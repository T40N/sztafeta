const Button = (element, idiom, eventCallback) => {
  const elem = element;
  const idiomValue = idiom;
  elem.addEventListener("click", (event) => eventCallback(event));

  const getIdiom = () => {};
  const render = () => {};
  const mount = () => {};

  return {
    getIdiom,
    render,
    mount,
  };
};

export default Button;
