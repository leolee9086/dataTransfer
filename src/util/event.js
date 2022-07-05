export const debounce = (func, delay) => {
  window.delayFunc = null;
  if (window.delayFunc) {
    window.clearTimeout(window.delayFunc);
  }
  window.delayFunc = setTimeout(() => {
    func()
    window.delayFunc = null;
  }, 0);
};
