function bind(f, thisArg, ...fixedArgs) {
  return function (...args) {
    return f.call(thisArg, ...fixedArgs, ...args);
  };
}
