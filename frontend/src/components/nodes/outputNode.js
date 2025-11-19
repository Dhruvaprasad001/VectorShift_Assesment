// outputNode.js

import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data.outputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      title="Output"
      handles={[
        {
          type: 'target',
          id: `${id}-value`
        }
      ]}
    >
      <input
        className="border border-gray-300 rounded px-1 py-0.5 w-full"
        type="text"
        placeholder="Name:"
        value={currName}
        onChange={handleNameChange}
      />
      <select
        className="border border-gray-300 rounded px-1 py-0.5 w-full"
        value={outputType}
        onChange={handleTypeChange}
      >
        <option value="Text">Text</option>
        <option value="File">Image</option>
      </select>
    </BaseNode>
  );
}


