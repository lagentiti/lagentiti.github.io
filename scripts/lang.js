let langOptions = {
  "list": [
    {
      "code": "fr",
      "name": "francais"
    },
    {
      "code": "en",
      "name": "english"
    },
  ],
};

let xhr = new XMLHttpRequest();
var json = "";
let lang = localStorage.getItem("lang");

xhr.onreadystatechange = (e) => {
  if (xhr.readyState !== 4) {
    return;
  }
  if (xhr.status === 200) {
    json = JSON.parse(xhr.responseText);

    header(json);
    footer(json);
    index(json);
    project(json);
    tuto(json);
    projectList(json);
  };
};
if(lang !== null) {
  setTimeout(() => {
    xhr.open('GET', `./lang/${lang}.json`);
    xhr.send();
  }, 10);
} else {
  xhr.open('GET', `./lang/fr.json`);
  xhr.send();
  setTimeout(() => {
    var langs = "";
    for(i=0;i<=langOptions.list.length-1;i++) {
      langs = langs + `<option value="${langOptions.list[i].code}">${langOptions.list[i].name}</option>`;
    };
    setTimeout(() => {
      document.getElementById("lang").innerHTML =
      `
      <div>
        Choisire la langue du site
      </div>
      <div style="padding: 15px;"></div>
      <select id="liste">${langs}</select>
      <div style="padding: 15px;"></div>
      <div id="buttonLang" onclick="setLang(document.getElementById('liste').options[document.getElementById('liste').selectedIndex].value);">Validé</div>
      `;
      document.getElementById("lang").style.display = "flex";
    }, 10);
  }, 10);
};

function setLang(lang) {
  if(lang !== undefined) {
    localStorage.setItem("lang", lang);
    document.getElementById("lang").style.display = "none";
  };
};

function header(lang) {
  document.getElementById("header-item-link1").innerHTML = lang.header.title1;
  document.getElementById("header-item-link2").innerHTML = lang.header.title2;
};

function footer(lang) {
  document.getElementById("footer-item1-title").innerHTML = lang.footer.title1;
  document.getElementById("footer-item2-title").innerHTML = lang.footer.title2;
  document.getElementById("footer-item3-title").innerHTML = lang.footer.title3;
  document.getElementById("footer-item4-title").innerHTML = lang.footer.title4;
};

function index(lang) {

};

function project(lang) {

};

function tuto(lang) {

};

function projectList() {

};
/*
  #VforVictory 🐝
  :akaruuU: (comment ca tu follow pas https://www.twitch.tv/akaruu ???)
  RED > ALL colors
*/