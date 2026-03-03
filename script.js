console.log("JS動いてる");

function showMessage(text, type) {
    const message = document.getElementById("resultMessage");
    message.textContent = text;
    message.className = "result show " + type;

    setTimeout(() => {
        message.className = "result";
    }, 2000);
}

// 第1問 正解
function correct() {
    const audio = new Audio("correct.mp3");
    audio.play();

    showMessage("正解！🎉", "correct");

    // 第2問を表示
    document.getElementById("quiz1").style.display = "none";
    document.getElementById("quiz2").style.display = "block";
}

// 第2問 正解
function correct2() {
    const audio = new Audio("correct.mp3");
    audio.play();

    showMessage("正解！🎉", "correct");
}

// 不正解
function wrong() {
    const audio = new Audio("wrong.mp3");
    audio.play();

    showMessage("ざんねん…！", "wrong");
}
function backToQ1() {
    document.getElementById("quiz2").style.display = "none";
    document.getElementById("quiz1").style.display = "block";
}
function lunch() {
    const audio = new Audio("wrong.mp3");
    audio.play();
    showMessage("おいしいけど！！😋", "wrong");
}

function cleaning() {
    const audio = new Audio("wrong.mp3");
    audio.play();
    showMessage("きれいにするのは最高だけど！！🧹", "wrong");
}