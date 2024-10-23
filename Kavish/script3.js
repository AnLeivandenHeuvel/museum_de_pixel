document.addEventListener('DOMContentLoaded', function() {
    const afbeeldingen = document.querySelectorAll('.afbeelding');

    afbeeldingen.forEach(afbeelding => {
        afbeelding.addEventListener('click', function() {
            const id = afbeelding.id.slice(-1); 
            const tekstElement = document.getElementById('tekst' + id);
            const titelElement = document.getElementById('titel' + id);

            
            if (tekstElement.style.display === 'block') {
                tekstElement.style.display = 'none'; 
                titelElement.style.display = 'none'; 
            } else {

                document.querySelectorAll('.tekst').forEach(tekst => {
                    tekst.style.display = 'none';
                });
                document.querySelectorAll('.titel').forEach(titel => {
                    titel.style.display = 'none';
                });
                titelElement.style.display = 'block'; 
                tekstElement.style.display = 'block'; 
            }
        });
    });
});
