document.addEventListener('DOMContentLoaded', function () {
    const submitButton = document.getElementById('submit');
    const guessInput = document.getElementById('guess');
    const messageParagraph = document.getElementById('message');
    const correctSound = new Audio('audio/correct.mp3');
    const wrongSound = new Audio('audio/wrong.mp3');

    let randomNumber = Math.floor(Math.random() * 100) + 1; // Nombre aléatoire entre 1 et 100

    submitButton.addEventListener('click', function () {
        const userGuess = parseInt(guessInput.value);
        messageParagraph.style.display = 'block'; // Affiche le message

        if (isNaN(userGuess)) {
            displayMessage("Veuillez entrer un nombre valide !", 'error');
            return;
        }

        if (userGuess === randomNumber) {
            displayMessage("Bravo, vous avez trouvé le nombre !", 'success');
            correctSound.play();
            // Ajouter une animation de succès
            document.querySelector('.container').classList.add('win-animation');
        } else if (userGuess < randomNumber) {
            displayMessage("Trop petit, essayez encore !", 'warning');
            wrongSound.play();
        } else {
            displayMessage("Trop grand, essayez encore !", 'warning');
            wrongSound.play();
        }

        guessInput.value = ''; // Réinitialiser le champ de saisie
        guessInput.focus(); // Remettre le focus sur le champ de saisie
    });

    function displayMessage(message, type) {
        messageParagraph.textContent = message;

        if (type === 'success') {
            messageParagraph.style.color = '#4CAF50'; // Vert
            messageParagraph.style.fontWeight = 'bold';
        } else if (type === 'warning') {
            messageParagraph.style.color = '#FFC107'; // Jaune
        } else if (type === 'error') {
            messageParagraph.style.color = '#F44336'; // Rouge
        }

        // Ajouter une animation de tremblement lors d'une mauvaise réponse
        if (type === 'warning' || type === 'error') {
            messageParagraph.classList.add('shake');
            setTimeout(() => {
                messageParagraph.classList.remove('shake');
            }, 500);
        }
    }
});

