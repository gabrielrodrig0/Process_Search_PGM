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

var labels = document.querySelectorAll('label');
labels.forEach(function(label) {
    label.addEventListener('click', function() {
        toggleTribunais(label);
    });
});


