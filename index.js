var express = require('express');
var app = express();
const path = require('path');

app.use(express.static('./'))
var expressWs = require('express-ws')(app);
var players = []

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname+ '/index.html'));
});

app.ws('/ws', function(ws) {
  players.push(ws)
  ws.on('message', function(msg) {
    players.forEach((websocket) => {
      if (websocket != ws) {
        websocket.send(msg)
      }
    })
  });
  ws.on("close", () => {
    if (players.indexOf(ws) > -1) { 
      players.splice(players.indexOf(ws), 1); 
    }
  })
});

// function move(from, to) {
//   piece = null
//   var tile1 = document.getElementById(from); 
//   var tile2 = document.getElementById(to);
//   let has_piece = tile1.hasChildNodes()
//   let has_piece2 = tile2.hasChildNodes()

//   var is_legal = chess.move({ from: from, to: to })
//   if (is_legal !== null) {
//       console.log('from '+from+'; to '+to);
//       console.log(chess.ascii())
//       if (has_piece) {
//           if (has_piece2) {
//               tile2.removeChild(tile2.firstChild);
//           }
  
//           piece = tile1.firstChild
//           tile1.removeChild(piece);
//           tile2.appendChild(piece);
//       }
//   } else {
//       console.log("is illegal")
//       console.log(chess.ascii())
//   }
// }
const PORT = 8080;

app.listen(PORT, () => {
   console.log(`Server is running on PORT: ${PORT}`);
});