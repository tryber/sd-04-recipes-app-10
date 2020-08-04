const getCodeYT = (link) => {
  const code = link.slice(32);
  return code;
};

export default getCodeYT;