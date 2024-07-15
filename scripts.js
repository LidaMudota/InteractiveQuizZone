document.getElementById('startButton').addEventListener('click', function() {
    const gameArea = document.getElementById('gameArea');
    gameArea.innerHTML = ''; // Очистить игровую зону

    const questions = [
        { question: "Столица Франции?", options: ["Париж", "Лондон", "Берлин"], answer: "Париж" },
        { question: "Сколько будет 2 + 2?", options: ["3", "4", "5"], answer: "4" },
        { question: "Какого цвета небо?", options: ["Зеленое", "Голубое", "Красное"], answer: "Голубое" }
    ];

    questions.forEach((q, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="front">
                <p>${q.question}</p>
                <div class="option-container">
                    ${q.options.map(option => `<button class="option">${option}</button>`).join('')}
                </div>
            </div>
            <div class="back">${q.answer}</div>
        `;
        card.querySelectorAll('.option').forEach(button => {
            button.addEventListener('click', function() {
                if (button.textContent === q.answer) {
                    card.classList.toggle('flip');
                } else {
                    alert('Неправильный ответ, попробуйте снова.');
                }
            });
        });
        gameArea.appendChild(card);
    });
});

function showContent(topic) {
    const learnContent = document.getElementById('learnContent');
    learnContent.style.display = 'block';
    learnContent.innerHTML = ''; // Очистить содержимое

    if (topic === 'topic1') {
        learnContent.innerHTML = '<h3>Природа</h3><p>Здесь находятся интересные факты о природе. Например, леса покрывают около 30% суши Земли.</p>';
    } else if (topic === 'topic2') {
        learnContent.innerHTML = '<h3>Космос</h3><p>Здесь находятся интересные факты о космосе. Например, в космосе нет звуков, потому что звуковые волны не могут распространяться в вакууме.</p>';
    } else if (topic === 'topic3') {
        learnContent.innerHTML = '<h3>Наука</h3><p>Здесь находятся интересные факты о науке. Например, ДНК человека на 99.9% идентична ДНК каждого другого человека.</p>';
    }
}
