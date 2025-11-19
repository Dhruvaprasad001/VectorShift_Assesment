// emojiNode.js

import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const EmojiNode = ({ id, data }) => {
  const [emoji, setEmoji] = useState(data?.emoji || '😀');

  return (
    <BaseNode
      id={id}
      title="Emoji"
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
        type="text"
        placeholder="Emoji:"
        value={emoji}
        onChange={(e) => setEmoji(e.target.value)}
        maxLength="2"
      />
      <div className="text-2xl mt-1">
        {emoji}
      </div>
    </BaseNode>
  );
}


