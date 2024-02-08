import { createNavBar } from '../../components/index.js'
import { generateNewCards, simulateFetch } from './intersection.service.js';

createNavBar('intersection observer');

const cards = document.querySelectorAll('.card')

const intersection_callback = (entries) => {
    // entries is always gone be an array
    entries.forEach(entry => {
        entry.target.classList.toggle('show', entry.isIntersecting) // entry.isIntersecting is a boolean, so we toggle on (add class) if it's true, and vice-versa
        if (entry.isIntersecting) anime_observer.unobserve(entry.target)
    })

    // console.clear()
    // console.log(entries)
}

const anime_observer_options = {
    root: null, // which defaults to the body if null or undefined. It defines the parent container which holds the children we are observing.
    threshold: 0, // value between 0 - 1 and represents a percentage of the item intersecting 0 by default
    rootMargin: '-9%' // allows us to offset when something happens. you can use it to preload data before it appears on the viewport
}

const anime_observer = new IntersectionObserver(intersection_callback, anime_observer_options)

cards.forEach(card => {
    anime_observer.observe(card)
})

/*
    an intersectionObser takes in 2 parameters, a callback
    and an options object
*/

// CREATE THE OBSERVER FOR INFINITE SCROLLING

const last_card_on_dom = document.querySelector('.card:last-child') // this simply querries for the last .card on the DOM.

const last_card_observer = new IntersectionObserver((entries) => {
    const last_card = entries[0] // since we'll only observe one thing.

    if (!last_card.isIntersecting) return

    simulateFetch(1000) // was trying to simulate a fetch. but there's an issue with the promise.
        .then(res => console.log(res))
        .catch(err => console.warn(err))

    generateNewCards({ n: 5, anime_observer })

    last_card_observer.unobserve(last_card.target) // stops observing the current last card

    last_card_observer.observe(document.querySelector('.card:last-child')) // starts observing the new loaded last card
}, {
    rootMargin: '200px'
})

last_card_observer.observe(last_card_on_dom);
