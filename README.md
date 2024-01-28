# lagentiti.github.io

# < name >.json Example in ./projects/
```json
{
  "name": "",
  "id": ,
  "description": "",
  "picture": {
    "icon": "", // 120x120px
    "couverture": "", // 300x425px
    "videoId": "", // video YouTube Id
    "galery": [
      "", // 651x366 px
    ]
  },
  "links": [
    {
      "link": "",
      "name": ""
    },
    {
      "link": "",
      "name": ""
    }
  ]
}
```

# tutos.json example
```json
...
{
  "id": "",
  "name": "",
  "description": "",
  "icon": "",
  "link": ""
}
```

# about.json example
```json
...
"param": {
  "name": "name",
  "html": [
    "<div>",
    "</div>"
  ]
}
```

# script for html to json html (by bingAI)
```js
function textToArray(text) {
  // Divise le texte en lignes en utilisant le caractère de nouvelle ligne comme séparateur
  var lines = text.split('\n');

  // Crée un nouveau tableau où chaque ligne est un élément
  var array = lines.map(function(line) {
      // Remplace les apostrophes par des guillemets et vice versa
      line = line.split('').map(function(char) {
          if (char === "'") return '"';
          if (char === '"') return "'";
          return char;
      }).join('');
      return '"' + line + '"';
  });

  // Retourne le tableau sous forme de chaîne de caractères
  return '[\n' + array.join(',\n') + '\n]';
}

// Exemple d'utilisation
var text = `texte`;
console.log(textToArray(text));
```