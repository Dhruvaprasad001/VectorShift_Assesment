// Toolbar.jsx

import { DraggableNode } from './DraggableNode';

export const PipelineToolbar = () => {
  return (
    <div className="p-3">
      <div className="mt-5 flex flex-wrap gap-3">
        <DraggableNode type='customInput' label='Input' />
        <DraggableNode type='llm' label='LLM' />
        <DraggableNode type='customOutput' label='Output' />
        <DraggableNode type='text' label='Text' />
        <DraggableNode type='mathAdd' label='Math Add' />
        <DraggableNode type='delay' label='Delay' />
        <DraggableNode type='emoji' label='Emoji' />
        <DraggableNode type='logger' label='Logger' />
        <DraggableNode type='randomString' label='Random String' />
      </div>
    </div>
  );
};


