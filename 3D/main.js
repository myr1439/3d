gsap.registerPlugin(ScrollTrigger)

function lenis() {
    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
        //console.log(e)
    })

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)
}

lenis()


//////////////////////////////////////////

import { Application } from 'https://unpkg.com/@splinetool/runtime';

const canvas = document.getElementById('canvas3d');
const app = new Application(canvas);
app
    .load('https://prod.spline.design/iIfaVB1JVPsnV137/scene.splinecode')
    .then(()=>{
        let iMac = app.findObjectByName('iMac')
        console.log(iMac)
        
        gsap.set(iMac.scale,{x:0.8,y:0.8,z:0.8})
        gsap.set(iMac.position,{x:0,y:-30,z:0})
        gsap.set(iMac.rotation,{x:0,y:0,z:0})

        let stopRotation = gsap.to(iMac.rotation,{
            y: -Math.PI * 2 + iMac.rotation.y,
            x:0,
            z:0,
            duration:10,
            repeat:-1,
            ease:"none"
        })

        
    
        let tl = gsap.timeline
        tl({
            scrollTrigger:{
                trigger: ".sec2",
                start: "-30% bottom",
                end:"top top",
                scrub:1,
                markers:true,
                onEnter:()=>{
                    stopRotation.pause()
                },
                onLeaveBack:()=>{
                    let newProgress = Math * 2 + iMac.rotation.y
                    stopRotation.progress(newProgress).resume()
                }

            }
        })
        .to(iMac.rotation,{x:0,y:-Math.PI*1.49,z:0})
        .to(iMac.scale,{x:1,y:1,z:1})
        .to(iMac.position,{x:0,y:0,z:-7},0)

        tl({
            scrollTrigger:{
                trigger: ".sec2",
                start: "bottom bottom",
                end:"+=100%",
                scrub:1,
                pin:true
            }
        })

        tl({
            scrollTrigger:{
                trigger:".sec3",
                start:"20% bottom",
                end:"50% bottom",
                scrub:2,               
                //markers:true
            }
        })
        .to(iMac.scale,{x:-0.5,y:0.5,z:0.5})
        .to(iMac.position,{x:0,y:0,z:-250},0)
        .to(iMac.rotation,{x:0,y:-Math.PI*2,z:0})

        tl({
            scrollTrigger:{
                trigger:".sec3",
                start:"50% bottom",
                end:"100% bottom",
                scrub:3,
                markers:true
            }
        })
        .to(iMac.scale,{x:1,y:1,z:1})
        .to(iMac.position,{x:0,y:1,z:0},0)
        .to(iMac.rotation,{x:0,y:-Math.PI*2.85,z:0})

        tl({
            scrollTrigger:{
                trigger:".sec3",
                start:"bottom bottom",
                end:"+=100%",
                scrub:2,
                //markers:true,
                pin:true
            }
        })
    })

    




