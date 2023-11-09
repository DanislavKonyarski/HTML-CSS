function listOfNames(arr) {
    let printStr="";
    arr.sort((a, b) => {
        return a.localeCompare(b);
      });
      for (let i = 0; i < arr.length; i++) {
        printStr += (i+1)+"."+arr[i]+"\n";
        
      }

      return printStr;
}

console.log(listOfNames([ "bas","bos","bes","3","2","John", "Bob", "Christina", "Ema"]))