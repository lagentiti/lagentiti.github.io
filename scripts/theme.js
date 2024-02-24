function setTheme(options) {
  localStorage.setItem("theme", options)
  location.reload();
};

function importTheme() {
  var page_name = window.location.pathname.split("/").pop().split(".")[0];
  
  if(page_name == "") {
    page_name = "index";
  }
  if(localStorage.getItem("theme") == "black") {
    page_name = `theme/${page_name}`;
  };

  let xhr = new XMLHttpRequest();
  xhr.addEventListener("load", function () {
    document.getElementById("theme").innerHTML += xhr.responseText;
  });
  xhr.open("GET", `./styles/${page_name}.css`);
  xhr.send();
};
importTheme();