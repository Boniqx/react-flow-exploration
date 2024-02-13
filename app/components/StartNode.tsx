import { useCallback } from 'react';
import { Handle, Position, Node } from 'reactflow';
 
export default function StartNode({ data } : any) {

  return (
    <>
       <div className="p-3 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 rounded-lg border border-yellow-800">

        <p className="text-sm text-white">{data.label}</p>
      </div>
      <Handle type="source" position={Position.Bottom} id="" />
    </>
  );
}

