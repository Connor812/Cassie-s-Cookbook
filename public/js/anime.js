/*let animation = anime({
    targets: '.letter',
    opacity: 1, 
    rotate: {
      value: 360,
      duration: 2000,
      easing: 'easeInExpo'
    },  
    delay: anime.stagger(100, {start: 1000}), 
    translateX: [-10, 0]
  });*/

  anime({
    targets: '.letter',
    opacity: 0,
    translateX: 250,
    rotate: {
        value: 360,
    },
    direction: 'reverse',
    easing: 'easeInOutSine',
    delay: anime.stagger(50, {start: 250})
  });