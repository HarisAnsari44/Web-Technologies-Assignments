// ---------------- Higher-Order Function ----------------
function applyAction(element, actionFunction) {
    actionFunction(element);   // HOF calling callback
}

// ---------------- Switch-Based Router ----------------
function performEffect(type) {
    switch (type) {
        case "hover-on":
            document.getElementById('textBlock').textContent = "You hovered over me!";
            document.getElementById('textBlock').style.backgroundColor = 'coral';
            break;

        case "hover-off":
            document.getElementById('textBlock').textContent = "Hover over me!";
            document.getElementById('textBlock').style.backgroundColor = 'khaki';
            break;

        case "random-color":
            const colors = ["pink", "orange", "lightgreen", "skyblue", "lightgray"];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            document.body.style.backgroundColor = randomColor;
            break;
    }
}

// ---------------- Interactions (Using Callbacks) ----------------

// Button: Random background color (callback inside HOF)
document.getElementById('colorBtn').addEventListener('click', function () {
    applyAction(document.body, function () {
        performEffect("random-color");
    });
});

// Hover Text (callback + switch)
document.getElementById('textBlock').addEventListener('mouseenter', function () {
    performEffect("hover-on");
});

document.getElementById('textBlock').addEventListener('mouseleave', function () {
    performEffect("hover-off");
});

// Size Button (callback + HOF)
document.getElementById('sizeBtn').addEventListener('click', function () {
    applyAction(this, function (btn) {
        btn.style.transform = "scale(1.5)";
        btn.style.transition = "0.3s";
    });
});

// Move Red Box
document.getElementById('moveBox').addEventListener('click', function () {
    applyAction(this, function (box) {
        const x = Math.floor(Math.random() * 300);
        const y = Math.floor(Math.random() * 300);
        box.style.transform = `translate(${x}px, ${y}px)`;
        box.style.transition = "0.5s";
    });
});

// Change box color
document.getElementById('box').addEventListener('click', function () {
    applyAction(this, function (b) {
        b.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    });
});
