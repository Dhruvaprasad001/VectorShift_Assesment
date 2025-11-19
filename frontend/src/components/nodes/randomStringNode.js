// randomStringNode.js

import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const RandomStringNode = ({ id, data }) => {
  const [length, setLength] = useState(data?.length || '10');

  return (
    <BaseNode
      id={id}
      title="Random String"
      handles={[
        {
          type: 'source',
          id: `${id}-output`
        }
      ]}
    >
      <input
        className="border border-gray-300 rounded px-1 py-0.5 w-full"
        type="number"
        placeholder="Length:"
        value={length}
        onChange={(e) => setLength(e.target.value)}
        min="1"
        max="100"
      />
    </BaseNode>
  );
}


