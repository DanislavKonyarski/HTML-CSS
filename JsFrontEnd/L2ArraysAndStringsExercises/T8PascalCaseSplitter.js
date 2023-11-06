function pascalCaseSplitter(str){
   return str.match(/[A-Z][a-z]*/gm).join(", ");
        
}

console.log(pascalCaseSplitter('HoldTheDoor'))