function html(file) {
  let xhr = new XMLHttpRequest();
  xhr.addEventListener("load", function () {
    document.getElementById(file).innerHTML += xhr.responseText;
  });
  xhr.open("GET", `./html/${file}.html`);
  xhr.send();
};
/*
  #VforVictory 🐝
  :akaruuU: (comment ca tu follow pas https://www.twitch.tv/akaruu ???)
  RED > ALL colors
*/