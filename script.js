const trailer = document.getElementById("trailer");

window.onmousemove = e => {
    const x = e.clientX - trailer.offsetHeight / 2;
    const y = e.clientY - trailer.offsetHeight / 2;

    console.log(`x: ${x}, y: ${y}`);

    const keyframes = {
        transform: `translate(${x}px, ${y}px)`,
    }

    trailer.animate(keyframes, {
        duration: 800,
        fill: "forwards",
        easing: "ease-out",
    });
}