// DOM Utility
// https://gist.github.com/MadLittleMods/f71b0ef905832b8c16c9
//
// Inspired by bling.js: https://gist.github.com/paulirish/12fb951a8b893a454b32
// But we needed full module encapsulation

// This will concat anything including array-like things(like NodeLists or HTMLCollections)
let concat = function(...args) {
  return args.reduce((result, item) => {
    // If array-like
    if(
      item && item.length !== undefined && !Array.isArray(item) &&
      // The window object acts as an array of the iframes in the document (undesired effects for our use cases)
      (!window || (window && !(item instanceof window.constructor)))
    ) {
      item = Array.prototype.slice.call(item);
    }

    return result.concat(item);
  }, []);
};

// Pass in a selector string, dom node, or array of dom nodes
let coerceIntoElementsArray = function(...args) {
  let elements = args;
  if(typeof args[0] === 'string') {
    elements = document.querySelectorAll.call(document, ...args);
  }

  return concat(...elements);
};


// `arrayLike` can be a single object, array, or array-like (NodeList, HTMLCollection)
export function forEach(arrayLike, cb) {
  concat(arrayLike).forEach((...args) => {
    if(cb) {
      cb(...args);
    }
  });

  // Keep the chaining going
  return this;
}


// Listen to events.
// Pass in a string name of events separated by spaces
export function on(elements, names, cb) {
  names.split(/\s/).forEach((name) => {
    forEach(elements, (element) => {
      element.addEventListener(name, cb);
    });
  });

  // Keep the chaining going
  return this;
}

// Remove the event listener
// Pass in a string name of events separated by spaces
export function off(elements, names, cb) {
  names.split(/\s/).forEach((name) => {
    forEach(elements, (element) => {
      element.removeEventListener(name, cb);
    });
  });

  // Keep the chaining going
  return this;
}


export function prependElementTo(element, target) {
  let firstTargetChild = (target.children || [])[0];
  if(firstTargetChild) {
    target.insertBefore(element, firstTargetChild);
  }
  else {
    target.appendChild(element);
  }
}

// Can't use `classList.toggle` with the second parameter (force)
// Because IE11 does not support it
export function toggleClass(element, class1, force) {
  if(force !== undefined) {
    if(force) {
      element.classList.add(class1);
    }
    else {
      element.classList.remove(class1);
    }
  }
  else {
    element.classList.toggle(class1);
  }

  return force;
}




let $ = function(...args) {
  return coerceIntoElementsArray(...args);
};



export default $;
