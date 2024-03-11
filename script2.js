async function buscar(url) {
    try {
        const resposta = await fetch(url);
        const dados = await resposta.json();
        console.log("Dados recebidos:", dados);
    } catch (erro) {
        console.error("Ocorreu um erro ao buscar os dados do processo:", erro);
    }
}