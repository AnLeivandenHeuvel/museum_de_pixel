window.addEventListener("click", () => {
    const bulletEl = document.createElement("span")
    const shipEl = document.getElementById("ship")
    bulletEl.className = "bullet" // maakt <span class="bullet">
    document.body.append(bulletEl) // Voegt span toe aan body
    bulletEl.style.left = shipEl.offsetLeft + 5 + "px"
    // En weer opruimen
  
    setTimeout(() => {
        bulletEl.remove()
    }, 5000)
})
