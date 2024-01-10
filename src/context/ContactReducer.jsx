export const ContactReducer = (state, action) => {
    if (action.type === "THEME_CHANGE") {

        return {
            ...state,
            isDark: state.isDark ? false : true
        }
    } else if (action.type === "DELETE") {
        return {
            ...state,
            contacts: state.contacts.filter(item => item.id !== action.payload)
        }


    } else if (action.type === "SAVE") {
        return {
            ...state,
            contacts: [action.payload, ...state.contacts]
        }
    }
}