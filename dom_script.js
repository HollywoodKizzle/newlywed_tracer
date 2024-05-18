function collectElementsBySelector(selector) {
    let elements = document.querySelectorAll(selector);
    let elementsArray = Array.from(elements);
    return elementsArray;
  }


  function collectDOMProperties(arrayOfElements,domProperty) {     
    var arrayOfDOMProperties = arrayOfElements.map(function(element) {
      return element.domProperty;
    });
    
    return arrayOfDOMProperties;
  }



 function collectInnerTextValues(arrayOfElements) {     
    var arrayOfInnerTextValues = arrayOfElements.map(function(element) {
      return element.innerText;
    });  
    return arrayOfInnerTextValues;
  }


  function collectHrefValues(arrayOfAnchorElements) {     
    var arrayOfHrefValues = arrayOfAnchorElements.map(function(anchorElement) {
      return anchorElement.href;
    });
    
    return arrayOfHrefValues;
  }



  

