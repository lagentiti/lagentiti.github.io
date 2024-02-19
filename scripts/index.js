function Index() {
  let xhr = new XMLHttpRequest();
  let lang = localStorage.getItem("lang");

  if(lang == null) {
    var lang1 = "fr";
  } else {
    var lang1 = lang;
  }

  xhr.onreadystatechange = (e) => {
    if (xhr.readyState !== 4) {
      return;
    }
    if (xhr.status === 200) {
      let json = JSON.parse(xhr.responseText);

      for(i=0;i<=json.length-1;i++) {
        document.getElementById("actus").innerHTML = document.getElementById("actus").innerHTML +
        `
          <div id="actus-item" onclick="window.location.href = '${json[i].link}'">
            <div id="actus-item-image">
              <img id="actus-item-image-img" src="${json[i].image}">
            </div>
            <div id="actus-item-txt">
              <div id="actus-item-txt-title">${json[i][lang1].title}</div>
              <div id="actus-item-txt-description">${json[i][lang1].description}</div>
            </div>
          </div>
        `;
      };
    };
  };
  xhr.open('GET', `./actus.json`);
  xhr.send();
};
Index()