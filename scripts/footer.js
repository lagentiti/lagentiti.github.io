var maxFile2 = 0;

function jsonFileList() {
  for(i=1;i<=9;i++) {
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = (e) => {
      if (xhr.readyState !== 4) {
        return;
      }
      if (xhr.status === 200) {
        return maxFile2++;
      };
    };
    xhr.open('GET', `./projects/${i}.json`);
    xhr.send();
  };
};

function projectList(max) {
  for(i=0;i<=max;i++) {
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

jsonFileList();
setTimeout(() => {
  var max = 0;
  if(maxFile2 <= 3) {
    var max = maxFile2;
  }
  if(maxFile2 > 3) {
    var max = 3;
  }
  projectList(max);
  tutoList();
}, 10);
/*
  #VforVictory 🐝
  :akaruuU: (comment ca tu follow pas https://www.twitch.tv/akaruu ???)
  RED > ALL colors
*/