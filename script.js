document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".produto button");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            alert("Produto adicionado ao carrinho!");
        });
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".produto button");
    const carrosselItems = document.querySelectorAll(".carrossel-item");
    let currentIndex = 0;

    // Configura o carrossel para mudar a imagem a cada 5 segundos
    setInterval(() => {
        carrosselItems[currentIndex].style.display = "none";
        currentIndex = (currentIndex + 1) % carrosselItems.length;
        carrosselItems[currentIndex].style.display = "block";
    }, 10000);

    // Inicializa o carrossel
    carrosselItems.forEach((item, index) => {
        item.style.display = index === 0 ? "block" : "none";
    });

    // Configura o botão de compra
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            alert("Produto adicionado ao carrinho!");
        });
    });
});