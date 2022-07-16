import { createContext } from "react";

//Context for the current user

export const CurrentUser = createContext({
  email: null,
  password: null,
  cart: null,
  key: null,
})