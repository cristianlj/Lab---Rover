
let rover = {
    direction: "N",
    x: 0,
    y: 0,
    travelLog: []
};

function turnLeft(rover) {
    switch (rover.direction) {
        case "N":
            rover.direction = "W";
            break;
        case "W":
            rover.direction = "S";
            break;
        case "S":
            rover.direction = "E";
            break;
        case "E":
            rover.direction = "N";
            break;
        default: "Error";
            break;
    }



    console.log("turnLeft was called!", rover);
}

function turnRight(rover) {
    switch (rover.direction) {
        case "N":
            rover.direction = "E";
            break;
        case "E":
            rover.direction = "S";
            break;
        case "S":
            rover.direction = "W";
            break;
        case "W":
            rover.direction = "N";
            break;
        default: "Error"
            break;
    }

    // rover.travelLog.push(rover);
    console.log("turnRight was called!", rover);
}

function moveForward(rover) {

    switch (rover.direction) {
        case "N":
            rover.y -= 1;
            break;
        case "E":
            rover.x += 1;
            break;
        case "S":
            rover.y += 1;
            break;
        case "W":
            rover.x -= 1;
            break;
        default: "Error"
            break;
    }

    rover.travelLog.push({ x: rover.x, y: rover.y });

    console.log("moveForward was called", rover)
}


function moving(directions) {

    for (var i = 0; i < directions.length; i += 1) {

        if (rover.x >= 0 && rover.y >= 0)
            switch (directions[i]) {
                case "f":
                    moveForward(rover);
                    break;
                case "l":
                    turnLeft(rover);
                    break;
                case "r":
                    turnRight(rover);
                    break;
                default: "Error"
                    break;
            }
    }


    console.log(rover);
    outMap(rover);
}


function outMap(rover) {
    if (rover.x < 0 || rover.y < 0)
        console.log("Rover fora do mapa.")
    else {
        console.log("Rover dentro do mapa")
    }
}



moving('lffffffrfflfrff');
