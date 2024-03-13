//Script para pegar a url de cada opção selecionada
const options = document.querySelectorAll('.option');

options.forEach(option => 
    {
    option.addEventListener('click', function() 
    {
        const apiUrl = this.getAttribute('data-api-url');
        localStorage.setItem('apiUrl', apiUrl); 
    });
});

    

