import { useState } from 'react';
import clipboardCopy from 'clipboard-copy';

const useCopy = (url) => {
  const [message, setMessage] = useState(null);

  const copy = () => {
    clipboardCopy(url);
    setMessage('Link copiado!');
    setTimeout(() => setMessage(null), 5000);
  };

  return [message, copy];
};

export default useCopy;
