"use strict";
function kmtom(x) {
    if (typeof x === "string") {
        return parseInt(x) / 1000;
    }
    else {
        return x / 1000;
    }
}
kmtom(1000);
kmtom("1000");
