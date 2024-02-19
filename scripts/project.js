var picture = 0;
var pictureMax = 0;
var maxrequest = 0;

function Project() {
  let param = new URLSearchParams(window.location.search).get('p');
  let xhr = new XMLHttpRequest();


  xhr.onreadystatechange = (e) => {
    if (xhr.readyState !== 4) {
      let xml1 = new XMLHttpRequest();
      if (xhr.status == 404) {
        xml1.addEventListener("load", function () {
          document.querySelector("app").innerHTML = xml1.responseText;
        });
        xml1.open("GET", `../html/error/404.html`);
        xml1.send();
  
        document.getElementById("titleHtml").innerHTML = "error 404";
      };
    };
    if(xhr.status === 200) {
      if(maxrequest == 0) {
        let json = JSON.parse(xhr.responseText);
        
        maxrequest++;
        
        document.getElementById("title").innerHTML = json.name;
        document.getElementById("description").innerHTML = json.description;
        document.getElementById("itemImage").src = json.picture.couverture;
        document.getElementById("titleHtml").innerHTML = "lagent_titi | " + json.name;

        if(json.picture.videoId !== "") {
          document.getElementById("picture").innerHTML =
          `
          <iframe id="picture0" width="900" height="400" src="https://www.youtube.com/embed/${json.picture.videoId}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          `;
        };

        for(i=0;i<=json.picture.galery.length-1;i++) {
          console.log(i)
          document.getElementById("picture").innerHTML = document.getElementById("picture").innerHTML +
          `
          <div id="picture${i+1}" style="display: none;">
            <img src="${json.picture.galery[i]}" width="900" height="400">
          </div>
          `;
        };
        
        for(a=0;a<=json.links.length-1;a++) {
          document.getElementById("linkList").innerHTML = document.getElementById("linkList").innerHTML +
          `
          <li>
            <a id="item-link" href="${json.links[a].link}">${json.links[a].name}</a>
          </li>
          <div style="margin: 10px;"></div>
          `;
        };

      };
    };
  };
  xhr.open('GET', `./projects/${param}.json`);
  xhr.send();
};
Project();

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