export const simulateFetch = (fetch_time) => {
    return new Promise((resolve, reject) => {
        resolve(() => {
            setTimeout(() => resolve('done fetching...'), fetch_time)
        })

        reject((er) => {
            throw new Error(`some error occured ${er}`);
        })
    })
}

export const generateNewCards = ({ n, anime_observer }) => {
    console.log(`loading ${n} more cards...`)
    const card_container = document.getElementById('card_container');

    for (let i = 0; i < n; i++) {
        const new_card = document.createElement('div');
        new_card.className = 'card';

        new_card.innerHTML = 'New Card';

        anime_observer.observe(new_card)

        card_container.appendChild(new_card)
    }
}
