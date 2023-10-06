import { createContext, useContext, useState } from "react";

import samsungLogo from "../assets/samsung.png"
import nikeLogo from "../assets/nike.jpg"
import hondaLogo from "../assets/honda.png"

const caseColors = [
  {
    color: "#683434",
    name: "brown",
  },
  {
    color: "#1a5e1a",
    name: "green",
  },
  {
    color: "#659994",
    name: "blue",
  },
  {
    color: "#896599",
    name: "mauve",
  },
  {
    color: "#ffa500",
    name: "orange",
  },
  {
    color: "#59555b",
    name: "grey",
  },
  {
    color: "#222222",
    name: "black",
  },
  {
    color: "#ececec",
    name: "white",
  },
];

const caseImages = [
  {
    url: samsungLogo,
    alt: "Samsung",
  },
  {
    url: nikeLogo,
    alt: "Nike",
  },
  {
    url: hondaLogo,
    alt: "Honda",
  },
];

const CustomizationContext = createContext({});

export const CustomizationProvider = (props) => {
  const [caseColor, setCaseColor] = useState(caseColors[0]);
  const [caseImage, setCaseImage] = useState(caseImages[0]);

  return (
    <CustomizationContext.Provider
      value={{
        caseColors,
        caseColor,
        setCaseColor,
        caseImages,
        caseImage,
        setCaseImage,
      }}
    >
      {props.children}
    </CustomizationContext.Provider>
  );
};

export const useCustomization = () => {
  const context = useContext(CustomizationContext);
  return context;
};
