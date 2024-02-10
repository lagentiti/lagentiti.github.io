function About() {
  let param = new URLSearchParams(window.location.search).get('p');
  let xhr = new XMLHttpRequest();

  xhr.onreadystatechange = (e) => {
    if (xhr.readyState !== 4) {
      return;
    }
    if (xhr.status === 200) {
      json = JSON.parse(xhr.responseText);

      var param2;
      var err404 = 0;

      if(param == null) {
        param2 = "main";
      } else {
        if(json[param] == undefined) {
          err404 = 1;
        } else {
          param2 = param;
        };
      };

      if(err404 !== 1) {
        let htmljson = json[param2].html;

        document.getElementById("headTitle").innerHTML = json[param2].name;

        var html = "";
        for(i=0;i<=htmljson.length-1;i++) {
          html = html + htmljson[i];
        };

        setTimeout(() => {
          document.getElementById("app").innerHTML = html;
        }, 50);

        if(param2 == "main") {
          setTimeout(() => {
            let btn = [
              "cs2",
              "config"
            ];
            for(i=0;i<=btn.length-1;i++) {
              document.getElementById("btn").innerHTML = document.getElementById("btn").innerHTML +
              `
              <button onclick="window.location.href = './about.html?p=${btn[i]}'">
                ${btn[i]}
              </button>
              <div style="margin: 5px;"></div>
              `;
            };
          }, 70);
        };
      } else {
        let xml = new XMLHttpRequest();

        xml.addEventListener("load", function () {
          document.getElementById("app").innerHTML += xml.responseText;
        });
        xml.open("GET", `../html/error/404.html`);
        xml.send();
      };
    };
  };
  xhr.open('GET', `./about.json`);
  xhr.send();
};
About();