function encodeAndDecodeMessages() {
  let [inputEncode, inputDecode] = document.querySelectorAll("textarea");
  const [btnEncode, btnDecode] = document.querySelectorAll("button");

  btnEncode.addEventListener("click", encode);
  btnDecode.addEventListener("click", decode);

  function encode() {
    let encodeOutput = "";
    inputEncode.value.split("").forEach((e) => {
      encodeOutput += String.fromCharCode(e.charCodeAt(0) + 1);
    });
    inputDecode.value = encodeOutput;
    inputEncode.value = "";
  }

  function decode() {
    let encodeOutput = "";
    inputDecode.value.split("").forEach((e) => {
      encodeOutput += String.fromCharCode(e.charCodeAt(0) - 1);
    });
    inputDecode.value = encodeOutput;
  }
}
