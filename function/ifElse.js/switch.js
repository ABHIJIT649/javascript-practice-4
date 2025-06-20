// given a day number (1 to 7), print the day name

let day = 6

switch (day) {
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("thursday");
        break;
    case 5:
        console.log("friday");
        break;
    case 6:
        console.log("satarday");
        break;
    case 7:
        console.log("sunday");
        break;

    default:
        break;
}

//based on a grade ( A, B, C, D, E, F),print the remark (e.g => A=Exelence, B=Good)

const grade = "a" 

switch (grade) {
    case "a":
        console.log("A= Excellent");
        break;
    case "b":
        console.log("B= Good");
        break;
    case "c":
        console.log("C= ok");
        break;
    case "d":
        console.log("D= better luck next time");
        break;
    case "e":
        console.log("E= try hard");
        break;
    case "f":
        console.log("F= verry Bad");
        break;

    default:
        break;
}

//Given a number  (1 to 12 ) , print the month name

let month = 11

switch (month) {
    case 1:
        console.log("jan");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("mar");
        break;
    case 4:
        console.log("apr");
        break;
    case 5:
        console.log("may");
        break;
    case 6:
        console.log("jun");
        break;
    case 7:
        console.log("jul");
        break;
    case 8:
        console.log("aug");
        break;
    case 9:
        console.log("sept");
        break;
    case 10:
        console.log("oct");
        break;
    case 11:
        console.log("nov");
        break;
    case 12:
        console.log("dec");
        break;

    default: 
    console.log("not a month");
        break;
}


// given a trfic signal color (red, yello, green),print the action

let color = "green"

switch (color) {
    case "red":
        console.log("stop");
        break;
    case "yello":
        console.log("get ready");
        break;
    case "green":
        console.log("go");
        break;

    default:
        break;
}