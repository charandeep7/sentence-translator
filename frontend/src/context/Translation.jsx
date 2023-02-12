import { createContext , useState } from "react";

export const TranslationContext = createContext(null)

const TranslationProvider = ({ children }) => {
    const [tense,setTense] = useState({
        present: false,
        past: false,
        future: false,
        exit: true
    })

    return(
        <TranslationContext.Provider value={{tense,setTense}}>
            {children}
        </TranslationContext.Provider>
    )
}

export default TranslationProvider