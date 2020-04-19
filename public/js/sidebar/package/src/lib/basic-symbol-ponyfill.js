
// We return the native Symbol if available
// Otherwise just give them a random string
export default function BasicSymbol(description) {
  if(typeof Symbol === 'function') {
    return Symbol(description);
  }

  let randomString = Math.random().toString(36).substr(2, 8);
  return description + randomString;
};
