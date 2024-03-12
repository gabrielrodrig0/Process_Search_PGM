//Script para fazer o toggle dos tribunais
function toggleTribunais(label) {
    var ul = label.nextElementSibling;
    var span = label.querySelector('span');

    if (ul.style.display === "none" || ul.style.display === "") {
        ul.style.display = "block";
        span.textContent = "▲";
    } else {
        ul.style.display = "none";
        span.textContent = "▼";
    }
}

var labels = document.querySelectorAll('.label1');
labels.forEach(function(label) {
    label.addEventListener('click', function(event) {
        toggleTribunais(label);
        event.stopPropagation(); 
    });
});


//Abrir e fechar modal

function fecharModal() {
    var modal = document.querySelector('.modal');
    modal.classList.remove('active');
}

//Radio

const radios = document.querySelectorAll('input[type="radio"]');

radios.forEach(radio => {
    radio.addEventListener('click', () => {
        radios.forEach(otherRadio => {
            if (otherRadio !== radio) {
                otherRadio.checked = false;
            }
        });
    });
});