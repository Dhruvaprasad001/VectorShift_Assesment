// inputNode.js

import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data.inputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      title="Input"
      handles={[
        {
          type: 'source',
          id: `${id}-value`
        }
      ]}
    >
      <input
        className="border border-gray-300 rounded px-1 py-0.5 w-full"
        type="text"
        placeholder="Name"
        value={currName}
        onChange={handleNameChange}
      />
      <select
        className="border border-gray-300 rounded px-1 py-0.5 w-full"
        value={inputType}
        onChange={handleTypeChange}
      >
        <option value="Text">Text</option>
        <option value="File">File</option>
      </select>
    </BaseNode>
  );
}


