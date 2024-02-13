"use client";
import Image from "next/image";
import { useCallback, useState } from "react";
import ReactFlow, { Controls, Background, applyNodeChanges, applyEdgeChanges, Node, NodeChange, EdgeChange, Edge, OnEdgesChange, addEdge, Connection } from "reactflow";
import "reactflow/dist/style.css";
import { useNodeTypes } from "./components/NodeTypes";

export default function Home() {
  const initialNodes = [
    {
      id: '1',
      data: { label: 'Start', value: 'Start' },
      position: { x: 0, y: 0 },
      type: 'start',
    },
    {
      id: '2',
      data: { label: 'Do dishes', value: 'do-dishes' },
      position: { x: 0, y: 100 },
      type: 'generic',
    },
  ];
  

  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>();
  const [newNodeLabel, setNewNodeLabel] = useState<string>('');
  const [newNodeType, setNewNodeType] = useState<string>('generic');

  const onNodesChange = useCallback(
    (changes: NodeChange[]) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [],
  );

  const onEdgesChange: OnEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds || [])),
    [setEdges],
  );

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds || [])),
    [],
  );
  
  const nodeTypes = useNodeTypes()

  const handleAddNode = () => {
    const newNode: Node = {
      id: (nodes.length + 1).toString(),
      data: { label: newNodeLabel, value: newNodeLabel },
      position: { x: 0, y: 0 },
      type: newNodeType,
    };
    setNodes((prevNodes) => [...prevNodes, newNode]);
  };

  return (
    <div className="w-[100vw] h-[100vh]">
      <div className="w-48 h-screen absolute p-4 bg-gray-90 z-10 bg-white">
        <input
            type="text"
            placeholder="Node Label"
            value={newNodeLabel}
            onChange={(e) => setNewNodeLabel(e.target.value)}
            className="block w-full mb-2 px-2 py-1 border border-gray-800 rounded-md bg-gray-100 text-gray-900 placeholder:text-gray-800 focus:outline-none"
          />
          <select
            value={newNodeType}
            onChange={(e) => setNewNodeType(e.target.value)}
            className="block w-full mb-2 px-2 py-1 border border-gray-800 rounded-md bg-gray-100 text-gray-900 focus:outline-none"
          >
            <option value="generic">Generic</option>
            <option value="start">Start</option>
            {/* Add more options as needed */}
          </select>
          <button
            onClick={handleAddNode}
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none"
          >
          Add Node
        </button>
      </div>
      <ReactFlow
        nodes={nodes}
        onNodesChange={onNodesChange}
        edges={edges}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        nodeTypes={nodeTypes}
      >
         <Background  color="yellow" className="absolute inset-0 bg-gradient-to-b from-black to-[#050A30]" />
    
        <Controls />
      </ReactFlow>
    </div>
  );
}
