// BaseNode.jsx
import { Handle, Position } from 'reactflow';

export const BaseNode = ({
  id,
  title,
  handles = [],
  children,
}) => {
  return (
    <div className="w-[200px] h-[100px] rounded-xl relative overflow-hidden box-border bg-[#4a1d6b] shadow-lg border border-purple-800/30">
      {handles
        .filter((handle) => handle.type === 'target')
        .map((handle, index) => (
          <Handle
            key={`target-${index}`}
            type="target"
            position={Position.Left}
            id={handle.id || `${id}-${handle.name || `input-${index}`}`}
            style={handle.style || {}}
            className="!bg-purple-400 !border-purple-300 !w-2 !h-2"
          />
        ))}
      <div className="bg-[#6b2d9e] px-3 py-2 mb-0">
        <div className="font-bold text-white text-sm">
          <span>{title}</span>
        </div>
      </div>
      <div className="px-3 py-2 text-xs text-white space-y-1">
        {children}
      </div>
      {handles
        .filter((handle) => handle.type === 'source')
        .map((handle, index) => (
          <Handle
            key={`source-${index}`}
            type="source"
            position={Position.Right}
            id={handle.id || `${id}-${handle.name || `output-${index}`}`}
            style={handle.style || {}}
            className="!bg-purple-400 !border-purple-300 !w-2 !h-2"
          />
        ))}
    </div>
  );
};


