function createPiece(elem, img_path) {
    var img = document.createElement("img");
    img.src = img_path;
    img.style.height = "80px";
    img.style.width = "80px";
    elem.appendChild(img)
}

for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        const div = document.createElement("div");

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
                createPiece(div, 'images/Chess_rdt60.png')
            }
            if (j === 1) {
                createPiece(div, 'images/Chess_ndt60.png')
            }
            if (j === 2) {
                createPiece(div, 'images/Chess_bdt60.png')
            }
            if (j === 3) {
                createPiece(div, 'images/Chess_kdt60.png')
            }
            if (j === 4) {
                createPiece(div, 'images/Chess_qdt60.png')
            }
            if (j === 5) {
                createPiece(div, 'images/Chess_bdt60.png')
            }
            if (j === 6) {
                createPiece(div, 'images/Chess_ndt60.png')
            }
            if (j === 7) {
                createPiece(div, 'images/Chess_rdt60.png')
            }
        }

        if (i === 1) {
            createPiece(div, 'images/Chess_pdt60.png')
        }

        if (i === 6) {
            createPiece(div, 'images/Chess_plt60.png')
        }

        if (i === 7) {
            if (j === 0) {
                createPiece(div, 'images/Chess_rlt60.png')
            }
            if (j === 1) {
                createPiece(div, 'images/Chess_nlt60.png')
            }
            if (j === 2) {
                createPiece(div, 'images/Chess_blt60.png')
            }
            if (j === 3) {
                createPiece(div, 'images/Chess_klt60.png')
            }
            if (j === 4) {
                createPiece(div, 'images/Chess_qlt60.png')
            }
            if (j === 5) {
                createPiece(div, 'images/Chess_blt60.png')
            }
            if (j === 6) {
                createPiece(div, 'images/Chess_nlt60.png')
            }
            if (j === 7) {
                createPiece(div, 'images/Chess_rlt60.png')
            }
        }

        document.body.appendChild(div);
        
    }
}

