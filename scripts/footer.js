function projectList() {
  for(i=0;i<=3;i++) {
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = (e) => {
      if (xhr.readyState !== 4) {
        return;
      }
      if (xhr.status === 200) {
        let json = JSON.parse(xhr.responseText);
        return document.getElementById("footer-item2-list").innerHTML = document.getElementById("footer-item2-list").innerHTML +
        `
        <li id="footer-item2-list-item">
          <a id="footer-item2-list-item-link" href="./project.html?p=${json.id}">
            ${json.name}
          </a>
        </li>
        `;
      };
    };
    xhr.open('GET', `./projects/${i}.json`);
    xhr.send();
  };
};

function tutoList() {
  let xhr = new XMLHttpRequest();

  xhr.onreadystatechange = (e) => {
    if (xhr.readyState !== 4) {
      return;
    }
    if (xhr.status === 200) {
      let json = JSON.parse(xhr.responseText);

      for(i=0;i<=3;i++) {
        document.getElementById("footer-item4-list").innerHTML = document.getElementById("footer-item4-list").innerHTML +
        `
        <li id="footer-item4-list-item">
          <a id="footer-item4-list-item-link" href="${json[i].link}">
            ${json[i].name}
          </a>
        </li>
        `;
      };
    };
  };
  xhr.open('GET', `./tutos.json`);
  xhr.send();
};

function settingTxtColor() {
  let lang = localStorage.getItem("lang");
  let theme = localStorage.getItem("theme");

  var lang1;
  var theme1;

  if(lang !== null) {
    lang1 = lang;
  } else {
    lang1 = "fr";
  };

  if(theme !== null) {
    theme1 = theme;
  } else {
    theme1 = "white";
  };
  
  document.querySelector(`li[class="footer-option-${lang1}"]`).style.color = "#999793";
  document.querySelector(`li[class="footer-option-${theme1}"]`).style.color = "#999793";
};

setTimeout(() => {
  settingTxtColor();
  projectList();
  tutoList();
}, 150);