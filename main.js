var canvas = new fabric.Canvas("myCanvas")
var xer = 10
var yer = 10
var bw = 30
var bh = 30
var player = ""
var block = ""

function player_update() {
    fabric.Image.fromURL("player.png", function (Img)
    {
        player = Img
        player.scaleToWidth(150)
        player.scaleToHeight(140)
        player.set({
            top: yer,
            left: xer
        })
        canvas.add(player)
    })
}

function new_image(getImage) {
    fabric.Image.fromURL(getImage, function (Img)
    {
        block = Img
        block.scaleToWidth(bw)
        block.scaleToHeight(bh)
        block.set({
            top: yer,
            left: xer
        })
        canvas.add(block)
    })
}

window.addEventListener("keydown", mykeydown);
function mykeydown(e) {
    key = e.keyCode;
    console.log(key)

    if (key == '65') {
        new_image("captain_america_left_hand.png")
    }

    if (key == '66') {
        new_image("hulk_face.png")
    }

    if (key == '67') {
        new_image("hulk_left_hand.png")
    }

    if (key == '68') {
        new_image("hulk_legs.png")
    }

    if (key == '69') {
        new_image("hulk_right_hand.png")
    }

    if (key == '70') {
        new_image("hulkd_body.png")
    }

    if (key == '71') {
        new_image("ironman_body.png")
    }

    if (key == '72') {
        new_image("ironman_face.png")
    }

    if (key == '73') {
        new_image("ironman_left_hand.png")
    }

    if (key == '74') {
        new_image("ironman_legs.png")
    }

    if (key == '75') {
        new_image("ironman_right_hand.png")
    }

    if (key == '76') {
        new_image("spiderman_body.png")
    }

    if (key == '77') {
        new_image("spiderman_face.png")
    }

    if (key == '78') {
        new_image("spiderman_left_hand.png")
    }

    if (key == '79') {
        new_image("spiderman_legs.png")
    }

    if (key == '80') {
        new_image("spiderman_right_hand.png")
    }

    if (key == '81') {
        new_image("thor_face.png")
    }

    if (key == '82') {
        new_image("thor_left_hand.png")
    }

    if (key == '83') {
        new_image("thor_right_hand.png")
    }

    if (key == '84') {
        bw = bw + 10;
        bh = bh + 10;
        document.getElementById("current_width").innerHTML = bw;
        document.getElementById("current_height").innerHTML = bh;
    }

    if (key == '85') {
        bw = bw - 10;
        bh = bh - 10;
        document.getElementById("current_width").innerHTML = bw;
        document.getElementById("current_height").innerHTML = bh;
    }

    if (key == '38') {
        up()
    }

    if (key == '40') {
        down()
    }

    if (key == '37') {
        left()
    }

    if (key == '39') {
        right()
    }


}

function up() {
    if (yer >= 0) {
        yer = yer - bh
        canvas.remove(avengerer)
        player_update()
    }
}

function down() {
    if (yer < 500) {
        yer = yer + bh
        canvas.remove(avengerer)
        player_update()
    }
}

function left() {
    if (xer >= 0) {
        xer = xer - bw
        canvas.remove(avengerer)
        player_update()
    }
}

function right() {
    if (xer < 900) {
        xer = xer + bw
        canvas.remove(avengerer)
        player_update()
    }
}