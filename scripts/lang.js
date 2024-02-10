let langOptions = {
  "list": [
    {
      "code": "fr",
      "name": "francais"
    },
    {
      "code": "en",
      "name": "english"
    }
  ]
};

let xhr = new XMLHttpRequest();
var json = "";
let lang = localStorage.getItem("lang");
let url = window.location.href.split('/')[3].split(".html")[0];

xhr.onreadystatechange = (e) => {
  if (xhr.readyState !== 4) {
    return;
  }
  if (xhr.status === 200) {
    json = JSON.parse(xhr.responseText);

    lang_header(json);
    lang_footer(json);

    setInterval(() => {
      if(url == "index" || "" || " ") {
        lang_index(json);
      };
      if(url == "about") {
        lang_about(json, new URLSearchParams(window.location.search).get('p'));
      };
    }, 50);
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

function setLang(lang2) {
  if(lang2 !== undefined) {
    localStorage.setItem("lang", lang2);
    document.getElementById("lang").style.display = "none";
    location.reload();
  };
};

function lang_header(lang2) {
  document.getElementById("header-item-link1").innerHTML = lang2.header.title1;
  document.getElementById("header-item-link2").innerHTML = lang2.header.title2;
  document.getElementById("header-item-link3").innerHTML = lang2.header.title3;
  document.getElementById("header-item-link4").innerHTML = lang2.header.title4;
};

function lang_footer(lang2) {
  document.getElementById("footer-item1-title").innerHTML = lang2.footer.title1;
  document.getElementById("footer-item2-title").innerHTML = lang2.footer.title2;
  document.getElementById("footer-item3-title").innerHTML = lang2.footer.title3;
  document.getElementById("footer-item4-title").innerHTML = lang2.footer.title4;
};

function lang_index() {

};

function lang_about(lang2, option) {
  var option2;
  if(option == null) {
    option2 = "main";
  } else {
    option2 = option;
  };
  for(i=0;i<=lang2.about[option2].max-1;i++) {
    document.getElementById(`about-${i+1}`).innerHTML = lang2.about[option2].txt[i];
  };
};
