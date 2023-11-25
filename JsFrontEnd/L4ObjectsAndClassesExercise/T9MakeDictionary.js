function makeDictionary(strArr) {
  let currentObj = {};

  for (let i = 0; i < strArr.length; i++) {
    let key = Object.keys(JSON.parse(strArr[i]));
    let value = Object.values(JSON.parse(strArr[i]));
    currentObj[key] = value;
  }
  let currentArr = [];

  for (const key in currentObj) {
    currentArr.push({ [key]: currentObj[key] });
  }
  currentArr
    .sort((a, b) => Object.keys(a)[0].localeCompare(Object.keys(b)[0]))
    .forEach((element) => {
      let term = Object.keys(element)[0];
      let definition = Object.values(element)[0];
      console.log(`Term: ${term} => Definition: ${definition}`);
    });
}
makeDictionary([
  '{"Cup":"A small bowl-shaped container for drinking from, typically having a handle"}',
  '{"Cake":"An item of soft sweet food made from a mixture of flour, fat, eggs, sugar, and other ingredients, baked and sometimes iced or decorated."} ',
  '{"Watermelon":"The large fruit of a plant of the gourd family, with smooth green skin, red pulp, and watery juice."} ',
  '{"Music":"Vocal or instrumental sounds (or both) combined in such a way as to produce beauty of form, harmony, and expression of emotion."} ',
  '{"Art":"The expression or application of human creative skill and imagination, typically in a visual form such as painting or sculpture, producing works to be appreciated primarily for their beauty or emotional power."} ',
]);
