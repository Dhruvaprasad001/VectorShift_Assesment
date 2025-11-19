// delayNode.js

import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const DelayNode = ({ id, data }) => {
  const [delayMs, setDelayMs] = useState(data?.delayMs || '1000');

  return (
    <BaseNode
      id={id}
      title="Delay"
      handles={[
        {
          type: 'target',
          id: `${id}-input`
        },
        {
          type: 'source',
          id: `${id}-output`
        }
      ]}
    >
      <input
        className="border border-gray-300 rounded px-1 py-0.5 w-full"
        type="number"
        placeholder="Delay (ms):"
        value={delayMs}
        onChange={(e) => setDelayMs(e.target.value)}
        min="0"
      />
    </BaseNode>
  );
}


