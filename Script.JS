function verificarPontuacao() {
    const pontos = document.getElementById('pontos').value;
    const resultado = document.getElementById('resultado');
    const imagemDiv = document.getElementById('imagem');
    
    // Limpar classes de estilo anteriores
    imagemDiv.className = "";

    if (pontos === "") {
        resultado.textContent = "Por favor, insira sua pontuação.";
    } else if (pontos >= 100) {
        resultado.textContent = "Parabéns, você venceu!";
        resultado.style.color = "green";

        // Adiciona a classe que exibe a imagem de alegria embaixo
        imagemDiv.classList.add('vencedor');
    } else {
        resultado.textContent = "Tente novamente para ganhar.";
        resultado.style.color = "red";

        // Adiciona a classe que exibe a imagem pensativa embaixo
        imagemDiv.classList.add('perdedor');
    }
}
