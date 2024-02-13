import { useMemo } from "react";
import GenericNode from "./GenericNode";
import StartNode from "./StartNode";

export const useNodeTypes = () => {
    const nodeTypes = useMemo(() => ({  
        generic: GenericNode,
        start: StartNode
    }), [])

    return nodeTypes
}