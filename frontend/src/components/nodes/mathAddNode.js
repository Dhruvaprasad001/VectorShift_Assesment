// mathAddNode.js

import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const MathAddNode = ({ id, data }) => {
  const [value1, setValue1] = useState(data?.value1 || '0');
  const [value2, setValue2] = useState(data?.value2 || '0');

  return (
    <BaseNode
      id={id}
      title="Math Add"
      handles={[
        {
          type: 'target',
          id: `${id}-value1`
        },
        {
          type: 'target',
          id: `${id}-value2`
        },
        {
          type: 'source',
          id: `${id}-result`
        }
      ]}
    >
      <div className="space-y-1">
        <input
          className="border border-gray-300 rounded px-1 py-0.5 w-full"
          type="number"
          placeholder="Value 1:"
          value={value1}
          onChange={(e) => setValue1(e.target.value)}
        />
        <input
          className="border border-gray-300 rounded px-1 py-0.5 w-full"
          type="number"
          placeholder="Value 2:"
          value={value2}
          onChange={(e) => setValue2(e.target.value)}
        />
      </div>
    </BaseNode>
  );
}


