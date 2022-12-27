let html = document.documentElement;
    up.onclick = function() {
        html.style.fontSize = parseInt(getComputedStyle(html, '').fontSize) + 2 + 'px';
    };

    down.onclick = function() {
        html.style.fontSize = parseInt(getComputedStyle(html, '').fontSize) - 2 + 'px';
    };
    {
        function changeColor() {
document.querySelectorAll(".square").forEach(v => v.style.backgroundColor = "red");
}
    }