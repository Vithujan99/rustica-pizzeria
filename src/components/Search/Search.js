import { React, useEffect, useState } from "react";
import { getProductData, getProductDataByName } from "../../data/productsData";
import MenuItem from "../../pages/Menu/MenuItems/MenuItem/MenuItem";
import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";
import "./Search.css";
function Search() {
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const [searchedItem, setSearchedItem] = useState([]);
  useEffect(() => {
    var product;
    if (!isNaN(search)) {
      product = getProductData(parseInt(search));
    } else {
      product = getProductDataByName(search);
    }
    setSearchedItem(product);
  }, [search]);
  return (
    <div className="search-container">
      <motion.div
        class="search-bar"
        animate={{ x: [-400, 50, 0] }}
        transition={{
          duration: 0.75,
          ease: "easeOut",
          times: [0, 0.55, 0.75],
        }}
      >
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
          }}
        />
      </motion.div>
      <motion.div className="searched-items-holder">
        {search === "" || searchedItem === undefined ? (
          ""
        ) : !isNaN(search) ? (
          <motion.div className="searched-item" key={searchedItem.id}>
            <MenuItem key={searchedItem.id} data={searchedItem} />
          </motion.div>
        ) : (
          searchedItem.map((item) => (
            <motion.div className="searched-item">
              <MenuItem key={item.id} data={item} />
            </motion.div>
          ))
        )}
      </motion.div>
    </div>
  );
}

export default Search;
