function listOfNames(arr) {
    let printStr="";
    arr.sort(function(a, b) {
        return a === b ? 0 : a < b ? -1 : 1;
      });
      for (let i = 0; i < arr.length; i++) {
        printStr += (i+1)+"."+arr[i]+"\n";
        
      }

      return printStr;
}

console.log(listOfNames([ "bas","bos","bes","3","2","John", "Bob", "Christina", "Ema"]))