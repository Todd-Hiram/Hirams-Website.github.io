function theSphere() {
    let sphere = document.getElementById(sphere);
    sphere.className = (sphere);
    sphere.ondrag = handleDrag;
    sphere.setAttribute('draggable', 'true');
    sphere.addEventListener('touchmove', handleTouchMove);
    document.body.appendChild(sphere);
}

function handleDrag(event) {
    // The horizontal coordinate
    let x = event.clientX; 
    // The vertical coordinate
    let y = event.clientY;
    
    console.log("drag", x, y);
    
    if (x && y) {
        this.style.left = (x - 25) + "px";
        this.style.top = (y - 25) + "px";
    }
}

function handleTouchMove(event) {
    let touch = event.targetTouches[0];
    
    // This places the element where the the finger is located on screen
    this.style.left = touch.clientX - 25 + "px";
    this.style.top = touch.clientY - 25 + "px";
    event.preventDefault();
}