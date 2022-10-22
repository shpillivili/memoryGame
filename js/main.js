const container = document.createElement('div'),
      but = document.createElement('button'),
      section = document.createElement('section');
    
document.body.appendChild(container);

container.classList.add('container');
but.classList.add('but-game');
section.classList.add('memory-game');

container.append(but);

but.innerHTML = 'Start Game';

function createCards() {

    let cards = [];

    for (let i = 0; i < 16; i++) {
        let i = document.createElement('div')
        i.classList.add('memory-card');
        cards.push(i);
    }

    cards.forEach(card => section.append(card));

}



but.addEventListener('click', function() {
    but.remove();
    container.append(section);
    createCards();
})