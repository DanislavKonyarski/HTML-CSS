function extract(content) {
  let text = document.getElementById(content).textContent;
  let regex = /\(([^)]+)\)/g;
  let result = [];
  let match = regex.exec(text);
  while (match) {
    result.push(match[1]);
    match = regex.exec(text);
  }

  return result.join("; ");
}
