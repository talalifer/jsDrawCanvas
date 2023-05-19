//function that takes the [canvas] element on which to draw
function drawOnCanvas(canvas) {
    // Initializing variables to track drawing state and mouse position
    let isDrawing = false;
    let x = 0;
    let y = 0;

    //Get drawing context from the canvas element
    const ctx = canvas.getContext("2d");

    //Add event listeners for when mouse is clicked in canvas
    canvas.addEventListener("mousedown",
                            //Record the current mouse position and set isDraw to True
                            ev => {
                                x = ev.offsetX;
                                y = ev.offsetY;
                                isDrawing = true;
                            });
    
    //Add an event listener for when mouse is unclicked in the window
    window.addEventListener("mouseup",
                            ev => {
                                //If user was drawing, isDrawing == true
                                if (isDrawing == true){
                                    //Draw a line from the previous ouse position to the current mouse position
                                    drawLine(ctx, x, y, ev.offsetX, ev.offsetY);
                                    //Reset the mouse position to initial state and isDrawing to false
                                    x = 0;
                                    y = 0;
                                    isDrawing = false;
                                }
                            });
    
}