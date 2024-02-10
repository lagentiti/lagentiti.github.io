function html(file) {
  let xhr = new XMLHttpRequest();
  xhr.addEventListener("load", function () {
    document.getElementById(file).innerHTML += xhr.responseText;
  });
  xhr.open("GET", `./html/${file}.html`);
  xhr.send();
};