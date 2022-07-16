import { createContext } from "react";

//Context for Modal Content

export const SetModalContent = createContext({
  title: null,
  image: null,
  description: null,
  price: null,
})