
function cheekFoobar(number) {
    for (var i = 0; i < number; i++){
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("foobar");
        } else if (i % 5 === 0) {
            console.log("foo");
        }
        else if (i % 3 === 0) {
            console.log("bar");
        }
        else {
            console.log("fuck");
        }
    }
}

const number = cheekFoobar(50);