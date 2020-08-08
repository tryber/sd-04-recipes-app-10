import { useState } from 'react';
import clipboardCopy from 'clipboard-copy';

const useCopy = (url = null) => {
  const [message, setMessage] = useState(null);

  const copy = (secondURL = null) => {
    if (url) {
      clipboardCopy(url);
    } else {
      clipboardCopy(secondURL);
    }
    setMessage('Link copiado!');
    setTimeout(() => setMessage(null), 5000);
  };

  return [message, copy];
};

export default useCopy;
