import { useContext } from "react";
import { NodeServerContext } from '../context/NodeServer'

export const useNodeServer = () => useContext(NodeServerContext)