import axios from "axios";

const ingredientsData = await axios
  .get(process.env.REACT_APP_API_URL + "/ingredients")
  .then((res) => {
    return res.data;
  });

function getZusatzIngredientstData(zusatz) {
  return ingredientsData.find((item) => item.name === zusatz);
}

function getPriceWithIngredientsData(id) {
  let data = ingredientsData.find((data) =>
    data.items.find((item) => item._id === id)
  );
  return data;
}

function getIngredientstData(id) {
  let ingredientData = undefined;
  for (const ingredient of ingredientsData) {
    ingredientData = ingredient.items.find((item) => item._id === id);
    if (ingredientData !== undefined) {
      return ingredientData;
    }
  }
  console.log("Ingredient data does not exist for Id:" + id);
  return undefined;
}

export {
  ingredientsData,
  getZusatzIngredientstData,
  getIngredientstData,
  getPriceWithIngredientsData,
};
