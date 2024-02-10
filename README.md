# lagentiti.github.io

# < name >.json sample in ./projects/
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

# tutos.json sample
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

# about.json sample
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
      // Ajoute un antislash avant et après chaque guillemet
      line = line.split('').map(function(char) {
          if (char === '"') return '\\"';
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

# actus.json sample
```json
...
{
  "id": ,
  "title": "",
  "description": "",
  "image": "",
  "link": ""
}
```