const animation = () =>{
    const timeline = gsap.timeline();
    timeline
    .from('.logo-main',{
        autoAlpha:0,
        y:'-50px',
        duration:1
    })
    .from('.shopping-and-search',{
        autoAlpha:0,
        y:'-50px',
        duration:1
    },',-=1')
    .from('.ul-list-main',{
        autoAlpha:0,
        y:'-50px',
        duration:1
    })
    .from('.right-section-hero',{
        x:'100%',
        autoAlpha:0,
        duration:1
    })
    .from('.main-section-heading',{
        x:'-100%',
        autoAlpha:0,
        duration:1
    },'-=.5')
    .from('.hero-section-description',{
        y:'-20px',
        autoAlpha:0,
        duration:1
    })
    .from('.image-small-hero',{
        y:'+20px',
        autoAlpha:0,
        duration:.8
    })
    .from('.buttons-section',{
        y:'50px',
        autoAlpha:0,
        duration:1
    })
    .to('.dot',{
        keyframes: [
            { duration: 1, x: -10 },
            { duration: 1, y: 10 },
            { duration: 1, x: +10 },
            { duration: 1, y: 10 },
          ],
        yoyo:true,
        repeat:-1
    })
}

window.addEventListener('load',animation);