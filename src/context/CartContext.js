import { createContext, useEffect, useState } from "react";
import { getTypeById, getProductData } from "../data/productsData";
import { getPriceWithIngredientsData } from "../data/ingredientsData";

//Function are not defined here, but this indicates that we have room for thease Function
export const CartContext = createContext({
  items: [],
  getProductQuantity: () => {},
  addToCart: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
  delteOldAddNewToCart: () => {},
  deleteCart: () => {},
  getCost: () => {},
  getTotalCost: () => {},
  getTotalCostNoDrinks: () => {},
  getTotalCount: () => {},
});

export function CartProvider({ children }) {
  //Man kann auch sessionStorage benutzten
  const storedCartProducts = JSON.parse(localStorage.getItem("cartProducts"));
  const [cartProducts, setCartProducts] = useState(
    storedCartProducts === null ? [] : storedCartProducts
  );
  useEffect(() => {
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
  }, [cartProducts]);

  function getProductQuantity(id, ingredientsIds, description) {
    const quantity = cartProducts.find(
      (product) =>
        product.id === id &&
        JSON.stringify(product.ingredientsIds) ===
          JSON.stringify(ingredientsIds) &&
        product.description === description
    )?.quantity; //If there exist no Product with id it wont call quantity.
    if (quantity === undefined) {
      return 0;
    }
    return quantity;
  }

  //only for CartBar edit function
  function getProductQuantityInNewArray(ings, id, ingredientsIds, description) {
    const quantity = ings.find(
      (product) =>
        product.id === id &&
        JSON.stringify(product.ingredientsIds) ===
          JSON.stringify(ingredientsIds) &&
        product.description === description
    )?.quantity; //If there exist no Product with id it wont call quantity.
    if (quantity === undefined) {
      return 0;
    }
    return quantity;
  }

  function addToCart(id, ingredientsIds, description, count) {
    ingredientsIds = [...ingredientsIds].sort(
      (a, b) => a.ingredientId - b.ingredientId
    );

    var currentCartProducts = JSON.parse(localStorage.getItem("cartProducts"));
    const quantity = getProductQuantity(id, ingredientsIds, description);
    if (quantity === 0) {
      setCartProducts([
        ...currentCartProducts,
        {
          id: id,
          quantity: count,
          ingredientsIds: ingredientsIds,
          description: description,
        },
      ]);
    } else {
      setCartProducts(
        currentCartProducts.map((product) =>
          product.id === id &&
          JSON.stringify(product.ingredientsIds) ===
            JSON.stringify(ingredientsIds) &&
          product.description === description
            ? {
                ...product,
                quantity: product.quantity + count,
                ingredientsIds: ingredientsIds,
                description: description,
              }
            : product
        )
      );
    }
  }

  function removeOneFromCart(id, ingredientsIds, description) {
    const quantity = getProductQuantity(id, ingredientsIds, description);
    if (quantity === 1) {
      deleteFromCart(id, ingredientsIds, description);
    } else {
      setCartProducts(
        cartProducts.map((product) =>
          product.id === id &&
          product.ingredientsIds === ingredientsIds &&
          product.description === description
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
      );
    }
  }

  function deleteFromCart(id, ingredientsIds, description) {
    const p = cartProducts.find(
      (product) =>
        product.id === id &&
        product.ingredientsIds === ingredientsIds &&
        product.description === description
    );
    setCartProducts(cartProducts.filter((product) => product !== p));
  }

  //only for CartBar edit function
  function delteOldAddNewToCart(
    id,
    oldIngredientsIds,
    OldDescription,
    ingredientsIds,
    description,
    count
  ) {
    var ings;
    const p = cartProducts.find(
      (product) =>
        product.id === id &&
        product.ingredientsIds === oldIngredientsIds &&
        product.description === OldDescription
    );
    ings = cartProducts.filter((product) => product !== p);

    ingredientsIds = [...ingredientsIds].sort(
      (a, b) => a.ingredientId - b.ingredientId
    );

    const quantity = getProductQuantityInNewArray(
      ings,
      id,
      ingredientsIds,
      description
    );
    if (quantity === 0) {
      setCartProducts([
        ...ings,
        {
          id: id,
          quantity: count,
          ingredientsIds: ingredientsIds,
          description: description,
        },
      ]);
    } else {
      setCartProducts(
        ings.map((product) =>
          product.id === id &&
          JSON.stringify(product.ingredientsIds) ===
            JSON.stringify(ingredientsIds) &&
          product.description === description
            ? {
                ...product,
                quantity: product.quantity + count,
                ingredientsIds: ingredientsIds,
                description: description,
              }
            : product
        )
      );
    }
  }

  function getCost(id, ingredientsIds, description) {
    let cost = 0;
    let ingCost = 0;
    const p = cartProducts.find(
      (product) =>
        product.id === id &&
        product.ingredientsIds === ingredientsIds &&
        product.description === description
    );

    // eslint-disable-next-line array-callback-return
    p.ingredientsIds.map((ing) => {
      const ingData = getPriceWithIngredientsData(ing.ingredientId);
      ingCost += ingData.price * ing.quantity;
    });

    cost += (getProductData(id).price + ingCost) * p.quantity;
    return cost;
  }

  function getTotalCost() {
    let totalCost = 0;
    // eslint-disable-next-line array-callback-return
    cartProducts.map((product) => {
      const productData = getProductData(product.id);

      let ingCost = 0;
      // eslint-disable-next-line array-callback-return
      product.ingredientsIds.map((ing) => {
        const ingData = getPriceWithIngredientsData(ing.ingredientId);
        ingCost += ingData.price * ing.quantity;
      });

      totalCost += (productData.price + ingCost) * product.quantity;
    });
    return totalCost;
  }
  function getTotalCostNoDrinks() {
    let totalCost = 0;
    // eslint-disable-next-line array-callback-return
    cartProducts.map((product) => {
      const type = getTypeById(product.id);
      if (type !== "Drinks") {
        const productData = getProductData(product.id);

        let ingCost = 0;
        // eslint-disable-next-line array-callback-return
        product.ingredientsIds.map((ing) => {
          const ingData = getPriceWithIngredientsData(ing.ingredientId);
          ingCost += ingData.price * ing.quantity;
        });

        totalCost += (productData.price + ingCost) * product.quantity;
      }
    });
    return totalCost;
  }

  function getTotalCount() {
    return cartProducts.reduce((sum, product) => sum + product.quantity, 0);
  }

  function deleteCart() {
    setCartProducts([]);
  }

  const contextValue = {
    items: cartProducts,
    getProductQuantity,
    addToCart,
    removeOneFromCart,
    deleteFromCart,
    delteOldAddNewToCart,
    deleteCart,
    getCost,
    getTotalCost,
    getTotalCostNoDrinks,
    getTotalCount,
  };
  //we are giving contextValue as Value so all the children can access these Functions
  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}

export default CartProvider;

//Context(carrt, addToCart, removeCart)
//Provider -> gives your React app access to all the things in your context
