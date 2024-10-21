function toggleText(spook) {
    const spookNamen = ['pinky', 'inky', 'rood', 'oranje'];
    
    spookNamen.forEach((naam) => {
        const titel = document.getElementById(`${naam}-titel`);
        const tekst = document.getElementById(`${naam}-tekst`);
        
        if (naam === spook) {
            titel.style.display = 'block';
            tekst.style.display = 'block';
        } else {
            titel.style.display = 'none';
            tekst.style.display = 'none';
        }
    });
}
