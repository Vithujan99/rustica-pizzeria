import { createContext, useState, useEffect } from "react";

export const ServiceContext = createContext({
  service: {},
  plz: {},
  askPlz: true,
  setService: () => {},
  setPlz: () => {},
  setAskPlzShow: () => {},
  testPlz: () => {},
});

const Posleitzahlen = ["41238", "41236", "41061"];

export function ServiceProvider({ children }) {
  const storedSer = sessionStorage.getItem("ser");
  const [ser, handleService] = useState(storedSer ? storedSer : "null");
  useEffect(() => {
    sessionStorage.setItem("ser", ser);
  }, [ser]);

  const storedPosleitzahl = sessionStorage.getItem("posleitzahl");
  const [posleitzahl, handlePlz] = useState(
    storedPosleitzahl ? storedPosleitzahl : ""
  );
  useEffect(() => {
    sessionStorage.setItem("posleitzahl", posleitzahl);
  }, [posleitzahl]);

  const storedAskPlzShow = sessionStorage.getItem("askPlzShow");
  const [askPlzShow, hanldeAskPlzShow] = useState(storedAskPlzShow);
  useEffect(() => {
    sessionStorage.setItem("askPlzShow", askPlzShow);
  }, [askPlzShow]);

  function setService(choosenService) {
    handleService(choosenService);
  }
  function setPlz(newPlz) {
    handlePlz(newPlz);
  }
  function setAskPlzShow() {
    hanldeAskPlzShow(false);
  }

  function testPlz() {
    return Posleitzahlen.includes(posleitzahl);
  }

  const contextValue = {
    service: ser,
    plz: posleitzahl,
    askPlz: askPlzShow,
    setService,
    setPlz,
    setAskPlzShow,
    testPlz,
  };
  return (
    <ServiceContext.Provider value={contextValue}>
      {children}
    </ServiceContext.Provider>
  );
}
export default ServiceProvider;
