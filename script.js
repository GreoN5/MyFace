const mouthSmile = document.getElementById("mouth");
const centeredEyes = document.getElementById("eyes");
const leftEye = document.getElementById("left-eye");

const iris = document.querySelectorAll("[id=iris]");
const pupil = document.querySelectorAll("[id=pupil]");

function smile() {
    clearClassesMouth();
    mouthSmile.classList.add("smile");
}

function stopSmile() {
    clearClassesMouth();
    mouthSmile.classList.add("stop-smile");
}

function centerEyes() {
    clearClassesEyes();
    centerIris();
    centerPupil();
}

function winkLeftEye() {
    leftEye.classList.add("wink-left-eye");
}

function lookBack() {
    clearClassesEyes();
    lookBackIris();
    lookBackPupil();
}

function centerIris() {
    for (let i = 0; i < iris.length; i++) {
        iris[i].classList.add("center-eyes");
    }
}

function centerPupil() {
    for (let i = 0; i < pupil.length; i++) {
        pupil[i].classList.add("center-eyes");
    }
}

function lookBackIris() {
    for (let i = 0; i < iris.length; i++) {
        iris[i].classList.add("look-back-iris");
    }
}

function lookBackPupil() {
    for (let i = 0; i < pupil.length; i++) {
        pupil[i].classList.add("look-back-pupil");
    }
}

function clearClassesMouth() {
    for (let i = 0; i < mouthSmile.classList.length; i++) {
        if (mouthSmile.classList[i] != "mouth") {
            mouthSmile.classList.remove(mouthSmile.classList[i]);
        }
    }
}

function clearClassesEyes() {
    for (let i = 0; i < centeredEyes.classList.length; i++) {
        if (centeredEyes.classList[i] != "eyes") {
            centeredEyes.classList.remove(centeredEyes.classList[i]);
        }
    }

    clearClassesPupil();
    clearClassesIris();
}

function clearClassesIris() {
    for (let i = 0; i < iris.length; i++) {
        for (let j = 0; j < iris[i].classList.length; j++) {
            if (iris[i].classList[j] != "iris") {
                iris[i].classList.remove(iris[i].classList[j]);
            }
        }
    }
}

function clearClassesPupil() {
    for (let i = 0; i < pupil.length; i++) {
        for (let j = 0; j < pupil[i].classList.length; j++) {
            if (pupil[i].classList[j] != "pupil") {
                pupil[i].classList.remove(pupil[i].classList[j]);
            }
        }
    }
}