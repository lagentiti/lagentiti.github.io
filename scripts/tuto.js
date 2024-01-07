let xhr1 = new XMLHttpRequest();

xhr1.onreadystatechange = (e) => {
  if (xhr.readyState !== 4) {
    return;
  }
  if (xhr1.status === 200) {
    let json = JSON.parse(xhr1.responseText);

    for(i=0;i<=3;i++) {
      document.getElementById("tutoList").innerHTML = document.getElementById("tutoList").innerHTML +
      `
      <li id="projectListItem">
        <a id="projectItem" href="./project.html?p=${json[i].id}">
          <div id="projectLeft">
            <img src="${json[i].icon}" width="120px" height="120px">
          </div>
          <div id="projectRight">
            <div id="projectTitle">
              ${json[i].name}
            </div>
            <div id="projectDescription">
              ${json[i].description}
            </div>
          </div>
        </a>
      </li>
      `;
    };
  };
};
xhr1.open('GET', `./tutos.json`);
xhr1.send();


/*
  #VforVictory 🐝
  :akaruuU: (comment ca tu follow pas https://www.twitch.tv/akaruu ???)
  RED > ALL colors
*/