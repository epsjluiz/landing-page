document.addEventListener('DOMContentLoaded', function() {
    const readMoreBtn = document.querySelector('.read-more-btn');
    const recipeContent = document.querySelector('.recipe-content');

    readMoreBtn.addEventListener('click', function() {
        recipeContent.classList.toggle('hidden');
        readMoreBtn.textContent = recipeContent.classList.contains('hidden') 
            ? 'Ler Receita Completa' 
            : 'Fechar Receita';
    });
});
