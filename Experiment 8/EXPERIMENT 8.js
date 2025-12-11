// Change background color when button clicked
document.getElementById('colorBtn').addEventListener('click', function() {
    const colors = ['#f28b82', '#fbbc04', '#34a853', '#4285f4', '#f5f5f5'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});

// Modify text on hover
document.getElementById('textBlock').addEventListener('mouseenter', function() {
    this.textContent = "You hovered over me!";
    this.style.backgroundColor = '#ff5722';
});

document.getElementById('textBlock').addEventListener('mouseleave', function() {
    this.textContent = "Hover over me!";
    this.style.backgroundColor = '#ffeb3b';
});

// Increase size when button clicked (using this keyword)
document.getElementById('sizeBtn').addEventListener('click', function() {
    this.style.transform = 'scale(1.5)';
    this.style.transition = '0.3s';
});

// Move the red box randomly when clicked
document.getElementById('moveBox').addEventListener('click', function() {
    const x = Math.floor(Math.random() * 300);
    const y = Math.floor(Math.random() * 300);
    this.style.transform = `translate(${x}px, ${y}px)`;
    this.style.transition = '0.5s';
});

// Change box color on click
document.getElementById('box').addEventListener('click', function() {
    this.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
});
