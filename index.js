function shout(arg1) {
    return arg1.toUpperCase();

}

function whisper(arg1) {
    return arg1.toLowerCase();

}

function logShout(arg1) {
    console.log(arg1.toUpperCase());

}

function logWhisper(arg1) {
    console.log(arg1.toLowerCase());

}

function sayHiToHeadphonedRoommate(arg1) {
    if (arg1 === String(arg1).toLowerCase() ){
        return "I can't hear you!"
    } else if (arg1 === String(arg1).toUpperCase()) {
        return 'YES INDEED!'
    } else if (arg1 === "Let's have dinner together!") {
        return 'I would love to!'
    }
}