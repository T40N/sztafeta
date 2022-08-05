const Score = (element) => {
  const elem = element;

  const change = (value) => {
    elem.innerHTML = value;
  };

  return {
    change,
  };
};

export default Score;
