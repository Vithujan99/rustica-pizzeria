import { createContext, useState } from "react";

export const ShowContext = createContext({
  showBar: false,
  handleBarClose: () => {},
  handleBarShow: () => {},
});
export function ShowProvider({ children }) {
  const [showB, setShowB] = useState(false);
  function handleBarClose() {
    setShowB(false);
  }
  function handleBarShow() {
    setShowB(true);
  }
  const contextValue = {
    showBar: showB,
    handleBarClose,
    handleBarShow,
  };
  return (
    <ShowContext.Provider value={contextValue}>{children}</ShowContext.Provider>
  );
}
export default ShowProvider;
