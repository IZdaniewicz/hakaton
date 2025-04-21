window.saveMapImage = function (containerId, points) {
    var container = document.getElementById(containerId);
    if (!container) return;

    var img = container.querySelector("img");
    if (!img) return;

    var width = container.clientWidth;
    var height = container.clientHeight;

    var canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    var ctx = canvas.getContext("2d");

    // Rysowanie tła – obrazka
    ctx.drawImage(img, 0, 0, width, height);

    // Rysowanie trasy, jeśli są punkty
    if (points && points.length > 0) {
        ctx.strokeStyle = "red";
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);
        for (var i = 1; i < points.length; i++) {
            ctx.lineTo(points[i].x, points[i].y);
        }
        ctx.stroke();

        // Rysowanie kółek dla punktów
        ctx.fillStyle = "red";
        for (var i = 0; i < points.length; i++) {
            ctx.beginPath();
            ctx.arc(points[i].x, points[i].y, 5, 0, 2 * Math.PI);
            ctx.fill();
        }
    }

    var dataURL = canvas.toDataURL("image/png");
    var link = document.createElement("a");
    link.download = "map-with-route.png";
    link.href = dataURL;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
