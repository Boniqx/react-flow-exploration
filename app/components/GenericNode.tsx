import { useCallback } from 'react';
import { Handle, Position, Node } from 'reactflow';
 
export default function GenericNode({ data } : any) {

  return (
    <>
      <Handle type="target" position={Position.Top} id={`${data}-top`} />
        <div className="p-3 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 rounded-lg border border-blue-800">
          <p className="text-sm text-white">{data.label}</p>
        </div>
      <Handle type="source" position={Position.Bottom} id={`${data}-bottom`} />
    </>
  );
}

