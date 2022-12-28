const chess = new Chess()

// let position = [
//     ["r", "n", "b", "q", "k", "b", "n", "r"],
//     ["p", "p", "p", "p", "p", "p", "p", "p"],
//     ["", "", "", "", "", "", "", ""],
//     ["", "", "", "", "", "", "", ""],
//     ["", "", "", "", "", "", "", ""],
//     ["", "", "", "", "", "", "", ""],
//     ["P", "P", "P", "P", "P", "P", "P", "P"],
//     ["R", "N", "B", "Q", "K", "B", "N", "R"]
// ]

row = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
column = ['8', '7', '6', '5', '4', '3', '2', '1']

function createPiece(elem, id, img_path) {
    var img = document.createElement("img");
    img.src = img_path;
    img.setAttribute("id", id)

    img.style.height = "80px";
    img.style.width = "80px";
    elem.appendChild(img)
}

function move(from, to) {
    piece = null
    var tile1 = document.getElementById(from); 
    var tile2 = document.getElementById(to);
    let has_piece = tile1.hasChildNodes()
    let has_piece2 = tile2.hasChildNodes()

    var is_legal = chess.move({ from: from, to: to })
    if (is_legal !== null) {
        console.log('from '+from+'; to '+to);
        console.log(chess.ascii())
        if (has_piece) {
            if (has_piece2) {
                tile2.removeChild(tile2.firstChild);
            }
    
            piece = tile1.firstChild
            tile1.removeChild(piece);
            tile2.appendChild(piece);
        }
    } else {
        console.log("is illegal")
        console.log(chess.ascii())
    }
}

let count = 1
let from = ''
let to = ''

for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        const div = document.createElement("div");

        // div.setAttribute("id", (i).toString()+(j).toString());
        div.setAttribute("id", row.at(j)+column.at(i))
        div.setAttribute("tabindex", "0")

        let color = "#66433A"
        if (i % 2 === 0) {
            if (j % 2 === 0) {
                color = "#F4E5BF"
            }
        } else {
            if (j % 2 !== 0) {
                color = "#F4E5BF"
            }
        }

        div.style.height = "80px";
        div.style.width = "80px";
        div.style.backgroundColor = color;
        div.style.position = "absolute";
        div.style.top = (i*85+10).toString()+"px"
        div.style.left = (j*85+10).toString()+"px";

        if (i === 0) {
            if (j === 0) {
                createPiece(div, "r", 'images/Chess_rdt60.png')
            }
            if (j === 1) {
                createPiece(div, "n", 'images/Chess_ndt60.png')
            }
            if (j === 2) {
                createPiece(div, "b", 'images/Chess_bdt60.png')
            }
            if (j === 3) {
                createPiece(div, "q", 'images/Chess_kdt60.png')
            }
            if (j === 4) {
                createPiece(div, "k", 'images/Chess_qdt60.png')
            }
            if (j === 5) {
                createPiece(div, "b", 'images/Chess_bdt60.png')
            }
            if (j === 6) {
                createPiece(div, "n", 'images/Chess_ndt60.png')
            }
            if (j === 7) {
                createPiece(div, "r", 'images/Chess_rdt60.png')
            }
        }

        if (i === 1) {
            createPiece(div, "p", 'images/Chess_pdt60.png')
        }

        if (i === 6) {
            createPiece(div, "P", 'images/Chess_plt60.png')
        }

        if (i === 7) {
            if (j === 0) {
                createPiece(div, "R", 'images/Chess_rlt60.png')
            }
            if (j === 1) {
                createPiece(div, "N", 'images/Chess_nlt60.png')
            }
            if (j === 2) {
                createPiece(div, "B", 'images/Chess_blt60.png')
            }
            if (j === 3) {
                createPiece(div, "Q", 'images/Chess_klt60.png')
            }
            if (j === 4) {
                createPiece(div, "K", 'images/Chess_qlt60.png')
            }
            if (j === 5) {
                createPiece(div, "B", 'images/Chess_blt60.png')
            }
            if (j === 6) {
                createPiece(div, "N", 'images/Chess_nlt60.png')
            }
            if (j === 7) {
                createPiece(div, "R", 'images/Chess_rlt60.png')
            }
        }

        div.addEventListener("focus", function() {
            div.style.border = "2px solid black";
            if (count === 1) {
                from = div.id;
                // console.log('from: '+from);
                count = count + 1;
            } else {
                to = div.id;
                // console.log('to: '+to);
                count = 1
                move(from, to);
            }
        });
        div.addEventListener("blur", function() {
            div.style.border = "0px";
        });

        document.body.appendChild(div);
        
    }
}

console.log(chess.ascii())