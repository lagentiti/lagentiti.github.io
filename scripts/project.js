const param = new URLSearchParams(window.location.search).get('p');
const xhr = new XMLHttpRequest();

var picture = 0;
var pictureMax = 0;

xhr.onreadystatechange = (e) => {
  if (xhr.readyState !== 4) {
    return;
  }
  if (xhr.status === 200) {
    let json = JSON.parse(xhr.responseText);
    document.getElementById("title").innerHTML = json.name;
    document.getElementById("description").innerHTML = json.description;
    document.getElementById("itemImage").src = json.picture.couverture;
    pictureMax = json.picture.galery.length-1;

    if(json.picture.videoId !== "") {
      document.getElementById("picture").innerHTML =
      `
      <iframe id="picture0" width="900" height="400" src="https://www.youtube.com/embed/${json.picture.videoId}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      `;
    };

    for(i=0;i<=json.picture.galery.length-1;i++) {
      document.getElementById("picture").innerHTML = document.getElementById("picture").innerHTML +
      `
      <div id="picture${i+1}" style="display: none;">
        <img src="${json.picture.galery[i]}" width="900" height="400">
      </div>
      `;
    };

    for(i=0;i<=json.links.length;i++) {
      document.getElementById("linkList").innerHTML = document.getElementById("linkList").innerHTML +
      `
      <li>
        <a id="item-link" href="${json.links[i].link}">${json.links[i].name}</a>
      </li>
      <div style="margin: 10px;"></div>
      `;
    };
  };
};
xhr.open('GET', `./projects/${param}.json`);
xhr.send();

function buttonPicture(option) {
  if(option == 1) {
    if(picture !== 0) {
      document.getElementById(`picture${picture}`).style.display = "none";
      document.getElementById(`picture${picture - 1}`).style.display = "block";
      return picture = picture - 1;
    };
  };
  if(option == 2) {
    if(picture-1 !== pictureMax) {
      document.getElementById(`picture${picture}`).style.display = "none";
      document.getElementById(`picture${picture + 1}`).style.display = "block";
      return picture = picture + 1;
    };
  };
};
/*
  #VforVictory 🐝
  :akaruuU: (comment ca tu follow pas https://www.twitch.tv/akaruu ???)
  RED > ALL colors
*/