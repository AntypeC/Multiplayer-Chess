const express = require("express");
// const chess = require("chess.js");

const app = express();
app.use(express.static('./'))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
});

// const game = new chess.Chess()

// const move1 = game.move('e5')
// game.move('e5')

// console.log(move1);

// console.log(game.ascii())