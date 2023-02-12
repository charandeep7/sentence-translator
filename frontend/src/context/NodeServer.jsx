import { createContext } from "react";
import axios from "axios";

export const NodeServerContext = createContext(null)

const NodeServerProvider = ({ children }) => {

    const sendData = async ( URL , data ) => {
        const res = await axios.post(URL,data)
        return res
    }

    const getData = async (URL) => {
        const res = await axios.get(URL)
        return res
    }
    return (
        <NodeServerContext.Provider value={{sendData , getData}}>
            {children}
        </NodeServerContext.Provider>
    )
}

export default NodeServerProvider