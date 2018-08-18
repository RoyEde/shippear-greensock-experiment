const scene = document.getElementById('scene');
document.addEventListener('DOMContentLoaded', () => {
	window.addEventListener('load', () => {
    const overlay = document.getElementById('overlay');
		const doc = scene.contentDocument;
		const cow = doc.getElementById('cow');
		const light = doc.getElementById('light');
		const ufo = doc.getElementById('ufo_super');
    const ufoShadow = doc.getElementById('ufo_shadow');

		TweenMax.set(scene, { opacity: 1 });
		TweenMax.set(light, { transformOrigin: '50% 0%', scale: 0 });
		TweenMax.set(ufoShadow, { transformOrigin: 'center' });
    TweenMax.set(cow, { transformOrigin: '40% 40%' });
    timeline = new TimelineMax({ paused: true });
    
    timeline
      .to(overlay, 2, {
        opacity: 0
      })
      .fromTo(cow, 2, {
        opacity: 0
      }, {
        opacity: 1
      })
      .from(ufo, 2, {
        x: -500,
        y: -500
      }, 2)
      .fromTo(ufoShadow, 2, {
        x: -500,
        scale: 0
      }, {
        x: 0,
        scale: 1
      }, 2)
      .to(light, 0.5, {
        scale: 1
      })
      .to(cow, 3, {
        rotation: 400,
        scale: 0,
        y: -200,
        ease: Power4.easeIn
      })
      .to(light, 0.7, {
        scale: 0
      })
      .to(ufo, 1.8, {
        x: 500,
        y: -500,
        delay: 0.5
      }, 8)
      .to(ufoShadow, 1.8, {
        x: 500,
        scale: 0,
        delay: 0.5
      }, 8)
      .to(overlay, 2, {
        opacity: 1
      });

    const playButton = document.getElementById('playButton');
    playButton.addEventListener('click', () => {
      timeline.play();
      timeline.restart();
    });
	}, false);
});