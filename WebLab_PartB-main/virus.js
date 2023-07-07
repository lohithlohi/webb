let virus = "coronavirus";
let blood = "ravus";

function checking(virus, blood) {
    let regx = new RegExp([... blood].join(".*"), "i");

    if (regx.test(virus)) {
        alert("Positive");
    } else {
        alert("Negative");
    }
}

checking(virus, blood);
