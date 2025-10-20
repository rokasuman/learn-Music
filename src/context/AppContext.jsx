import { createContext } from "react";
import { musican } from "../assets/assets";

export const AppContext = createContext()

const AppContextProvider = (props) =>{
  const currencySymbol = '$'

    const value = {
        musican,
       currencySymbol

    }
    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}
export default AppContextProvider