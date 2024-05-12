import React from "react";

const FacebookPost = () => {
  return (
     <iframe
      src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FIASDManchester%2Fposts%2Fpfbid02iLdG3N5ULuvbz1NRfEwPWm56vKmnhnaXJQwXtfXixxDuePT3ZQdaSGBRU8KxEBjFl&show_text=true&width=500&is_preview=true"
      width="500"
      height="626"
      style={{ border: 'none', overflow: 'hidden' }}
      scrolling="no"
      frameBorder="0"
      allowFullScreen={true}
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
    ></iframe>
  );
};

export default FacebookPost;
