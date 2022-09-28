gsap.registerPlugin(ScrollTrigger)

gsap.to(".title",{
    scrollTrigger:{
        //markers:true,
        start:"top top",
        end:"800px top",
        toggleActions:"start reverse",
        scrub:true
    },
    y:340,
})
gsap.to(".buildings",{
    scrollTrigger:{
        //markers:true,
        start:"top top",
        end:"500px top",
        toggleActions:"start reverse",
        scrub:true
    },
    y:-200
})

gsap.to(".alyx",{
    scrollTrigger:{
        //markers:true,
        start:"150px top",
        end:"950px top",
        toggleActions:"start reverse",
        scrub:true
    },
    y:-400
})
gsap.to(".rocks",{
    scrollTrigger:{
        //markers:true,
        start:"750px top",
        end:"1100px top",
        toggleActions:"start reverse",
        scrub:true
    },
    y:-600
})
