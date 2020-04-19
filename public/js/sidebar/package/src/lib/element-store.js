let remove = function(element) {
  if(element) {
    element.parentElement.removeChild(element);
  }
};


class ElementStore {
  constructor() {
    this.elements = [];
  }

  createElement(...args) {
    let element = document.createElement.apply(document, args);
    this.add(element);
    return element;
  }

  add(...elements) {
    let flattenedElements = [].concat(elements).reduce((prevResult, element) => {
      if(element) {
        // If it is a store, flatten it out into us
        if(element instanceof ElementStore) {
          return prevResult.concat(element.elements);
        }

        return prevResult.concat(element);
      }

      return prevResult;
    }, []);

    this.elements = this.elements.concat(flattenedElements);
  }

  destroy() {
    this.elements.forEach((element) => remove(element));
    this.elements = [];
  }
}


export default ElementStore;
