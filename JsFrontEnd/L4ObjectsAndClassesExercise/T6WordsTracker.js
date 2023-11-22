function wordsTracker(list) {
  let stringList = list.shift().split(" ");

  let occurances = {};

  stringList.forEach((word) => {
    occurances[word] = 0;

    list.forEach((element) => {
      if (word === element) {
        occurances[word] += 1;
      }
    });
  });
  let entries = Object.entries(occurances).sort((a, b) => b[1] - a[1]);

  for (const [key, value] of entries) {
    console.log(`${key} - ${value}`);
  }
}

wordsTracker([
  "is 5 the",
  "first",
  "sentence",
  "Here",
  "5",
  "is",
  "another",
  "the",
  "And",
  "finally",
  "the",
  "the",
  "sentence",
]);
