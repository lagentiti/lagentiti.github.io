const listItem = [];

function ProjectList() {
  var maxFile = 0;

  function jsonFileList() {
    for (i = 1; i <= 9; i++) {
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
    for (i = 0; i <= max; i++) {
      let xhr = new XMLHttpRequest();

      xhr.onreadystatechange = (e) => {
        if (xhr.readyState !== 4) {
          return;
        }
        if (xhr.status === 200) {
          let json = JSON.parse(xhr.responseText);

          var tag = "";
          for (i = 0; i <= json.tag.length - 1; i++) {
            if (json.tag.length - 1 !== i) {
              var space = " | ";
            } else {
              var space = "";
            }
            tag = tag + json.tag[i] + space;
          };

          listItem.push({
            "name": json.name,
            "description": json.description,
            "tag": json.tag,
            "data": {
              "id": json.id,
              "icon": json.picture.icon
            }
          });

          return document.getElementById("projectList").innerHTML = document.getElementById("projectList").innerHTML +
            `
          <li id="projectListItem">
            <a id="projectItem" href="./project.html?p=${json.id}">
              <div id="projectLeft">
                <img src="${json.picture.icon}" width="120px" height="120px">
              </div>
              <div id="projectRight">
                <div>
                  <div id="projectTitle">${json.name}</div>
                  <div id="projectDescription">${json.description}</div>
                </div>
                <div id="projectTag">${tag}</div>
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
  }, 100);
};

function search(query) {
  if (query !== "") {
    document.getElementById("projectList").innerHTML = "";
    return listItem.filter(function (item) {
      var match = item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase()) ||
        item.tag.some(tag => tag.toLowerCase().includes(query.toLowerCase()));

      if (match) {
        var tag = "";

        for (var i = 0; i <= item.tag.length - 1; i++) {
          if (item.tag.length - 1 !== i) {
            var space = " | ";
          } else {
            var space = "";
          }
          tag = tag + item.tag[i] + space;
        };

        document.getElementById("projectList").innerHTML = document.getElementById("projectList").innerHTML +
          `
          <li id="projectListItem">
            <a id="projectItem" href="./project.html?p=${item.data.id}">
              <div id="projectLeft">
                <img src="${item.data.icon}" width="120px" height="120px">
              </div>
              <div id="projectRight">
                <div>
                  <div id="projectTitle">${item.name}</div>
                  <div id="projectDescription">${item.description}</div>
                </div>
                <div id="projectTag">${tag}</div>
              </div>
            </a>
          </li>
          `;
      };
    });
  };
};


ProjectList();