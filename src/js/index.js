import '../scss/styles.scss'


anime({
    targets: '#amazing path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1500,
    delay: function(el, i) { return i * 500 },
    direction: 'alternate',
    loop: false
});




