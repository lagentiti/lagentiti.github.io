let xhr1 = new XMLHttpRequest();

xhr1.onreadystatechange = (e) => {
  if (xhr1.readyState !== 4) {
    return;
  }
  if (xhr1.status === 200) {
    let json = JSON.parse(xhr1.responseText);

    for(i=0;i<=json.length;i++) {
      document.getElementById("tutoList").innerHTML = document.getElementById("tutoList").innerHTML +
      `
      <li id="projectListItem">
        <a id="projectItem" href='${json[i].link}'>
          <div id="projectLeft">
            <img src="${json[i].icon}" width="220px" height="120px">
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
