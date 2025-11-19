// loggerNode.js

import { BaseNode } from './BaseNode';

export const LoggerNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      title="Logger"
      handles={[
        {
          type: 'target',
          id: `${id}-input`
        }
      ]}
    >
      <div>
        <span>Logs input to console</span>
      </div>
    </BaseNode>
  );
}


