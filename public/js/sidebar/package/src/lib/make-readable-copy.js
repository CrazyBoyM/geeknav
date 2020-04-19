// Copy a JS object and make it read-only
export default function makeReadableCopy(obj) {
  let clone = {};
  Object.keys(obj).forEach((key) => {
    Object.defineProperty(clone, key, {
      value: obj[key],
      writable: false,
      configurable: false
    });
  });

  return clone;
}
