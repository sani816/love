function createLoveMessage() {
    const loveText = document.createElement("div");
    loveText.classList.add("love-message");
    loveText.innerHTML = "I LOVE YOU ❤️";

    // Random position and size
    loveText.style.left = Math.random() * 100 + "vw"; 
    loveText.style.animationDuration = Math.random() * 3 + 2 + "s"; 
    loveText.style.fontSize = Math.random() * 20 + 20 + "px"; 

    document.body.appendChild(loveText);

    setTimeout(() => {
        loveText.remove();
    }, 5000);
}

// Generate "I LOVE YOU" every 300ms
setInterval(createLoveMessage, 300);
