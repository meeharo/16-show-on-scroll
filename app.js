var animationsElement = document.querySelectorAll('.show-on-scroll')

function checkAnimation () {
    animationsElement.forEach( (element) =>  {
        const rec = element.getClientRects()[0]
        const viewportHeight = window.innerHeight;
    
        if(!(element.bottom < 0 || rec.top > viewportHeight)) {
            element.classList.add('start')
        } else {
            element.classList.remove('start')
        }
    })
}


window.onscroll = checkAnimation