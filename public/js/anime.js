  anime({
    targets: '.letter',
    opacity: 0,
    translateX: 250,
    translateY: -50,
    rotate: {
        value: 360,
    },
    direction: 'reverse',
    easing: 'easeInOutSine',
    delay: anime.stagger(50, {start: 200})
  });