import axios from "axios";
const productsArray = await axios
  .get("http://localhost:4000/products")
  .then((res) => {
    return res.data;
  });

function getTypeById(id) {
  let data = productsArray.find((products) =>
    products.items.find((item) => item.id === id)
  );
  if (data) {
    return data.type;
  } else {
    console.log("Type does not exist for Id:" + id);
    return undefined;
  }
}

function getDataByType(type) {
  let typeData = productsArray.find((products) => products.type === type);
  if (typeData === undefined) {
    console.log("Product data does not exist for Type:" + type);
    return undefined;
  }
  return typeData.items;
}

function getProductData(id) {
  let productData = undefined;
  for (const product of productsArray) {
    productData = product.items.find((item) => item.id === id);
    if (productData !== undefined) {
      return productData;
    }
  }
  console.log("Product data does not exist for Id:" + id);
  return undefined;
}

function getProductDataByName(name) {
  let productData = undefined;
  for (const product of productsArray) {
    productData = product.items.filter((item) =>
      item.name.toUpperCase().includes(name.toUpperCase())
    );
    console.log(productData);
    if (productData !== undefined) {
      return productData;
    }
  }
  console.log("Product data does not exist for Name:" + name);
  return undefined;
}

export {
  productsArray,
  getTypeById,
  getDataByType,
  getProductData,
  getProductDataByName,
};
