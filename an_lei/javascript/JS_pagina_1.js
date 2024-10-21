window.addEventListener("click", () => {
    const bulletEl = document.createElement("span");
    const shipEl = document.getElementById("ship");
    bulletEl.className = "bullet"; // maakt <span class="bullet">
    document.body.append(bulletEl); // Voegt span toe aan body
    bulletEl.style.left = shipEl.offsetLeft + 50 + "px"; // Plaats de kogel midden op het schip

    // Zet de bullet op dezelfde hoogte als het schip
    bulletEl.style.bottom = (parseInt(getComputedStyle(shipEl).bottom) + 120) + "px"; // Hier +100 als het schip 100px hoog is

    // En weer opruimen
    setTimeout(() => {
        bulletEl.remove();
    }, 2000); // Verklein de tijd naar 2000ms voor een snellere verwijdering
});
