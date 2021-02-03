const mouthSmile = document.getElementById("mouth");
const centeredEyes = document.getElementById("eyes");

function smile() {
    clearClasses();
    mouthSmile.classList.add("smile");
}

function stopSmile() {
    clearClasses();
    mouthSmile.classList.add("stop-smile");
}

function centerEyes() {
    centeredEyes.classList.add("centered-eyes");
}

function clearClasses() {
    for (let i = 0; i < mouthSmile.classList.length; i++) {
        if (mouthSmile.classList[i] != "mouth") {
            mouthSmile.classList.remove(mouthSmile.classList[i]);
        }
    }
}