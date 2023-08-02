window.addEventListener('scroll', () => {
    let viewport = window.scrollY
    if(viewport >= 25) nav.classList.add('go-scroll');
    else nav.classList.remove('go-scroll');
})