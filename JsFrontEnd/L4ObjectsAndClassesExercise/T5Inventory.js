function inventory(inputHeroDataArr) {
  let heros = [];
  for (let i = 0; i < inputHeroDataArr.length; i++) {
    let heroName = inputHeroDataArr[i].split(" / ")[0];
    let heroLevel = Number(inputHeroDataArr[i].split(" / ")[1]);
    let heroItems = inputHeroDataArr[i].split(" / ")[2];
    heros.push({
      hero: heroName,
      level: heroLevel,
      items: heroItems,
    });
  }
  heros
    .sort((level1, level2) => {
      return level1.level - level2.level;
    })
    .forEach((element) => {
      console.log(`Hero: ${element.hero}`);
      console.log(`level => ${element.level}`);
      console.log(`items => ${element.items}`);
    });
}

inventory([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
