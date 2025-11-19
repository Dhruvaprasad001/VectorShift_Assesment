// textNode.js

import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      title="Text"
      handles={[
        {
          type: 'source',
          id: `${id}-output`
        }
      ]}
    >
      <input
        className="border border-gray-300 rounded px-1 py-0.5 w-full"
        type="text"
        placeholder="Text:"
        value={currText}
        onChange={handleTextChange}
      />
    </BaseNode>
  );
}


