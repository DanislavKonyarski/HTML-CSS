function cats(catsArr) {
  class Cats {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    meow() {
      console.log(this.name + ", age " + this.age + " says Meow");
    }
  }

  for (let i = 0; i < catsArr.length; i++) {
    let name = catsArr[i].split(" ")[0];
    let age = catsArr[i].split(" ")[1];
    let cat = new Cats(name, age);
    cat.meow();
  }
}
cats(['Candy 1', 'Poppy 3', 'Nyx 2']);
