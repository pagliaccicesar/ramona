let bg = document.querySelector("header > img")
let root = document.querySelector("html")
window.addEventListener('scroll', () => {
    let { scrollY } = window;
    bg.style.top = 0.5 * scrollY + 'px';
    root.style.setProperty('--primary-color-hue', 220 + 0.025 * scrollY );
    root.style.setProperty('--hero-font-weight', 600 - 1 * scrollY );
    root.style.setProperty('--hero-letter-spacing',  0.01 * scrollY + "px" );
});