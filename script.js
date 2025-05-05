
window.onload = function() {
    alert("Bem-vindo à documentação do Terminal Linux!");
};

document.addEventListener('DOMContentLoaded', () => {
    const copyButtons = document.querySelectorAll('.copy-button');
    
    copyButtons.forEach(button => {
        button.addEventListener('click', () => {
            const commandText = button.nextElementSibling.textContent;
            navigator.clipboard.writeText(commandText).then(() => {
                const originalText = button.textContent;
                button.textContent = 'Copiado!';
                setTimeout(() => {
                    button.textContent = originalText;
                }, 2000);
            });
        });
    });
});