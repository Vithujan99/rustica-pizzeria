import { React, useState } from "react";
import { getProductData, getProductDataByName } from "../../data/productsData";
import MenuItem from "../../pages/Menu/MenuItems/MenuItem/MenuItem";
import { FaSearch } from "react-icons/fa";
import "./Search.css";
function Search() {
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const [searchedItem, setSearchedItem] = useState([]);
  const handleSearchedItem = (e) => {
    var input = e.target.value;
    var product;
    if (!isNaN(input)) {
      product = getProductData(parseInt(input));
    } else {
      product = getProductDataByName(input);
    }
    setSearchedItem(product);
  };
  return (
    <div className="search-container">
      <div class="search-bar">
        <FaSearch size={20} color="#777" />
        <input
          className="search-input"
          type="search"
          name="search"
          pattern=".*\S.*"
          value={search}
          required
          onChange={(e) => {
            handleSearch(e);
            handleSearchedItem(e);
          }}
        />
      </div>
      <div className="searched-items-holder">
        {search === "" || searchedItem === undefined ? (
          ""
        ) : !isNaN(search) ? (
          <div className="searched-item" key={searchedItem.id}>
            <MenuItem key={searchedItem.id} data={searchedItem} />
          </div>
        ) : (
          searchedItem.map((item) => (
            <div className="searched-item">
              <MenuItem key={item.id} data={item} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Search;
