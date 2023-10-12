import { createContext, useState } from "react";
import { getPriceWithIngredientsData } from "../data/ingredientsData";

export const IngredientsContext = createContext({
  ingredientsArray: [],
  handleItemId: () => {},
  addAllIngredients: () => {},
  addIngredient: () => {},
  addDressingIngredient: () => {},
  removeIngredient: () => {},
  getTotalCost: () => {},
  removeItem: () => {},
});

export function IngredientsProvider({ children }) {
  const [itemId, setItemId] = useState(0);
  const [oldItems, setItems] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  function handleItemId(id) {
    if (itemId !== id) {
      setIngredients([]);
      setItemId(id);
    }
    //Wichtig funktioniert so nicht(soll sich alte Ingredients merken damit user acuh zwischen Items wechseln kann)
    //if (itemId !== id) {
    //  setItems(
    //    oldItems.map((item) =>
    //      item.itemId === itemId ? { ...item, ingredients: ingredients } : item
    //    )
    //  );
    //  const item = oldItems.find((oldItem) => oldItem.itemId === id);
    //  if (item === undefined) {
    //    setItemId(id);
    //    setIngredients([]);
    //    setItems([...oldItems, { itemId: id, ingredients: [] }]);
    //  } else {
    //    setItemId(item.itemId);
    //    setIngredients(item.ingredients);
    //  }
    //}
  }

  function getIngridientQuantity(ingredientId) {
    const quantity = ingredients.find(
      (ingredient) => ingredient.ingredientId === ingredientId
    )?.quantity;
    if (quantity === undefined) {
      return 0;
    }
    return quantity;
  }
  function addAllIngredients(id, allIngredients) {
    handleItemId(id);
    setIngredients(allIngredients);
  }
  function addIngredient(id, ingredientId) {
    handleItemId(id);
    const quantity = getIngridientQuantity(ingredientId);
    if (quantity === 0) {
      setIngredients([
        ...ingredients,
        { ingredientId: ingredientId, quantity: 1 },
      ]);
    } else {
      setIngredients(
        ingredients.map((ingredient) =>
          ingredient.ingredientId === ingredientId
            ? { ...ingredient, quantity: ingredient.quantity + 1 }
            : ingredient
        )
      );
    }
  }

  function addDressingIngredient(id, ingredientId) {
    handleItemId(id);
    ingredientId = parseInt(ingredientId);
    if (ingredientId === 234) {
      setIngredients([]);
    } else {
      setIngredients([{ ingredientId: ingredientId, quantity: 1 }]);
    }
  }

  function removeIngredient(id, ingredientId) {
    handleItemId(id);
    const quantity = getIngridientQuantity(ingredientId);
    if (quantity === 1) {
      deleteIngredient(ingredientId);
    } else {
      setIngredients(
        ingredients.map((ingredient) =>
          ingredient.ingredientId === ingredientId
            ? { ...ingredient, quantity: ingredient.quantity - 1 }
            : ingredient
        )
      );
    }
  }
  function deleteIngredient(ingredientId) {
    setIngredients(
      ingredients.filter(
        (ingredient) => ingredient.ingredientId !== ingredientId
      )
    );
  }

  function getTotalCost() {
    let totalCost = 0;
    // eslint-disable-next-line array-callback-return
    ingredients.map((ingredient) => {
      const data = getPriceWithIngredientsData(ingredient.ingredientId);
      totalCost += data.price * ingredient.quantity;
    });
    return totalCost;
  }

  function removeItem(id) {
    if (itemId === id) {
      setItemId(0);
      setIngredients([]);
    }
    setItems(oldItems.filter((item) => item.itemId !== id));
  }

  const contextValue = {
    ingredientsArray: ingredients,
    handleItemId,
    addAllIngredients,
    addIngredient,
    addDressingIngredient,
    removeIngredient,
    getTotalCost,
    removeItem,
  };
  return (
    <IngredientsContext.Provider value={contextValue}>
      {children}
    </IngredientsContext.Provider>
  );
}

export default IngredientsProvider;
