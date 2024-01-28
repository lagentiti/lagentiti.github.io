let param = new URLSearchParams(window.location.search).get('p')
let xhr3 = new XMLHttpRequest();

xhr3.onreadystatechange = (e) => {
  if (xhr3.readyState !== 4) {
    return;
  }
  if (xhr3.status === 200) {
    json = JSON.parse(xhr3.responseText);

    document.getElementById("headTitle").innerHTML = json[param].name;

    var html = "";
    for(i=0;i<=json[param].html.length-1;i++) {
      html = html + json[param].html[i];
    };
    console.log(json[param].html.length)

    setTimeout(() => {
      document.getElementById("app").innerHTML = html;
    }, 50);
  };
};
xhr3.open('GET', `./about.json`);
xhr3.send();

/*
  #VforVictory 🐝
  :akaruuU: (comment ca tu follow pas https://www.twitch.tv/akaruu ???)
  RED > ALL colors
*/