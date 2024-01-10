import { createContext, useReducer } from "react";
import { ContactReducer } from "./ContactReducer";

const ContactContext = createContext()
export const ContactProvider = ({ children }) => {
    const initialState = {
        contacts: [],
        isDark: false

    }
    const [state, dispatch] = useReducer(ContactReducer, initialState)







    return (
        <ContactContext.Provider value={{ contacts: state.contacts, isDark: state.isDark, dispatch }}>
            {children}
        </ContactContext.Provider>
    )
}








export default ContactContext