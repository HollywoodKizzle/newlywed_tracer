function collectDivsByClass(className) {
    let divs = document.querySelectorAll('div.' + className);
    let divArray = Array.from(divs);
    return divArray;
  }


 function collectInnerTextValues(arrayOfElements) {     
    var arrayOfInnerTextValues = arrayOfElements.map(function(element) {
      return element.innerText;
    });
  
    // Return the array of innerText values
    return arrayOfInnerTextValues;
  }
