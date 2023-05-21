//function that takes the [canvas] element on which to draw
function drawOnCanvas(canvas) {
    // Initializing variables to track drawing state and mouse position
    let isDrawing = false;
    let x = 0;
    let y = 0;

    //Get drawing context from the canvas element
    const ctx = canvas.getContext("2d");

    //Event Listener for when mouse is clicked in canvas
    canvas.addEventListener("mousedown",
                            //Record the current mouse position and set isDraw to True
                            ev => {
                                x = ev.offsetX;
                                y = ev.offsetY;
                                isDrawing = true;
                            });
    
    //Event Listener for when mouse moves in canvas
    canvas.addEventListener('mousemove', 
                            ev => {
                                if (isDrawing == true){
                                    //Draw line from previous mouse position to current mouse position
                                    drawLine(ctx, x, y, ev.offsetX, ev.offsetY)
                                    //update mouse position
                                    x = ev.offsetX;
                                    y = ev.offsetY;
                                }
                            });

    //Event Listener for when mouse is unclicked in the window
    window.addEventListener("mouseup",
                            ev => {
                                if (isDrawing == true){
                                    //Draw a line from the previous ouse position to the current mouse position
                                    drawLine(ctx, x, y, ev.offsetX, ev.offsetY);
                                    //Reset the mouse position to initial state and isDrawing to false
                                    x = 0;
                                    y = 0;
                                    isDrawing = false;
                                }
                            });
    
    //helper function to draw line between points
    function drawLine(ctx, x1, y1, x2, y2){
        ctx.beginPath();
        ctx.strokeStyle = "black";
        ctx.lineWidth = 25;
        ctx.lineCap = "round";
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        ctx.closePath();
    }
};

drawOnCanvas(document.getElementById("myCanvas"));

//function to clear a canvas
function clearCanvas(canvas){
    const canvElement = canvas.getContext("2d");
    canvElement.clearRect(0,0,canvas.width, canvas.height);
};

//function to resize canvas
function reSizeCanvas(origCanvas, resizedCanvas){
    const canv1 = origCanvas.getContext("2d");
    const canv2 = resizedCanvas.getContext("2d");

    canv2.drawImage(origCanvas, 0, 0, 280, 280, 0, 0, 28, 28);
}