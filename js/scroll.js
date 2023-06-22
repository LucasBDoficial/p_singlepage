const observer = new IntersectionObserver(entries => {
    
    Array.from(entries).forEach(entry => {
        if (entry.intersectionRatio >= .5) {
            entry.target.classList.add('hidden_on')
        }
    })
}, {
    threshold: [0, .5, 1]
})

Array.from(document.querySelectorAll('.hidden_off')).forEach(element => {
    observer.observe(element)
})