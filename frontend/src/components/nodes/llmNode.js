// llmNode.js

import { BaseNode } from './BaseNode';

export const LLMNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      title="LLM"
      handles={[
        {
          type: 'target',
          id: `${id}-system`,
          style: { top: `${100/3}%` }
        },
        {
          type: 'target',
          id: `${id}-prompt`,
          style: { top: `${200/3}%` }
        },
        {
          type: 'source',
          id: `${id}-response`
        }
      ]}
    >
      <span>This is a LLM.</span>
    </BaseNode>
  );
}


