let iframe = document.querySelector("iframe");
let codeData = document.querySelectorAll("textarea");

codeData.forEach((e, i) => {
  e.addEventListener("keyup", () => {
    if (i === 0) {
      htmlCode = e.value;
    }
    if (i === 1) {
     var cssCode = e.value;
    }
    if (i === 2) {
      var jsCode = e.value;
    }
    iframe.contentDocument.body.innerHTML = htmlCode;
    iframe.contentDocument.head.innerHTML = `<style>${cssCode}</style>`;
    iframe.contentWindow.eval(jsCode);
  });
});
