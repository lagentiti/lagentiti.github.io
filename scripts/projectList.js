var maxFile = 0;

function jsonFileList() {
  for(i=1;i<=9;i++) {
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = (e) => {
      if (xhr.readyState !== 4) {
        return;
      }
      if (xhr.status === 200) {
        return maxFile++;
      };
    };
    xhr.open('GET', `./projects/${i}.json`);
    xhr.send();
  };
};

function htmlList(max) {
  for(i=1;i<=max;i++) {
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = (e) => {
      if (xhr.readyState !== 4) {
        return;
      }
      if (xhr.status === 200) {
        let json = JSON.parse(xhr.responseText);
        return document.getElementById("projectList").innerHTML = document.getElementById("projectList").innerHTML +
        `
        <li id="projectListItem">
          <a id="projectItem" href="./project.html?p=${json.id}">
            <div id="projectLeft">
              <img src="${json.picture.icon}" width="120px" height="120px">
            </div>
            <div id="projectRight">
              <div id="projectTitle">
                ${json.name}
              </div>
              <div id="projectDescription">
                ${json.description}
              </div>
            </div>
          </a>
        </li>
        `;
      };
    };
    xhr.open('GET', `./projects/${i}.json`);
    xhr.send();
  };
};

jsonFileList()
setTimeout(() => {
  htmlList(maxFile);
}, 100)
/*
  #VforVictory 🐝
  :akaruuU: (comment ca tu follow pas https://www.twitch.tv/akaruu ???)
  RED > ALL colors
*/