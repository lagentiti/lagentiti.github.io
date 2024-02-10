function Tuto() {
  let xhr = new XMLHttpRequest();

  xhr.onreadystatechange = (e) => {
    if (xhr.readyState !== 4) {
      return;
    }
    if (xhr.status === 200) {
      let json = JSON.parse(xhr.responseText);

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
  xhr.open('GET', `./tutos.json`);
  xhr.send();
};
Tuto();