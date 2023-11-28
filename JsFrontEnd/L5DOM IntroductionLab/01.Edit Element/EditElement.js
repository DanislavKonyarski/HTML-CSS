function editElement(ref, match, replacer) {
  let text = ref.textContent;
  let regex = new RegExp(match, "g");
  ref.textContent = text.replace(regex, replacer);
}
