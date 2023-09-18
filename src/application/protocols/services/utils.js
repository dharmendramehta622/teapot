 

function generateList(n , item ) {
    const result = [];
    for (let i = 1; i <= n; i++) {
      result.push(item);
    }
    return result;
  }
  
  export {generateList }