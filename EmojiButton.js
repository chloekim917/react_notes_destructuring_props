import React from 'react';

// function EmojiButton({ emoji, label }) {
//   // const { emoji, label } = props
//   // const emoji = props.emoji
//   // const label = props.label
  
//   return (
//     <button>
//       <span role="img">{emoji}</span>
//       {label}
//     </button>
//   )
// }

// export default EmojiButton

function EmojiButton({ emoji = "🐕", label }) {
  console.log(emoji)
  return (
    <button>
      <span role="img">{emoji}</span>
      {label}
    </button>
  )
}

export default EmojiButton