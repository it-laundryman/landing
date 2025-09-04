
export function animateSecure(gsap: GSAP): GSAPTimeline {

  const tlGallery = gsap.timeline({
    scrollTrigger: {
      trigger: ".secure",
      start: "top+=1px top",
      scrub: 1,
      // scrub: false,
      // scrub: true,

      end: "bottom"
      // pin: true,
    },
  });

  gsap.to(
    ".secure__item .orbit",
    {
      scrollTrigger: {
        trigger: ".secure",
        start: "top center",
        // scrub: 1,
        // scrub: false,
        // scrub: true,

        end: "bottom",
        // pin: true,
      },
      rotation: "+=360",
      duration: 5,
      // stagger: 0.35
    }
  );

  return tlGallery;
}

export function animateMobileSecure(gsap: GSAP): GSAPTimeline {

  const tlGallery = gsap.timeline({
    scrollTrigger: {
      trigger: ".secure",
      start: "top+=1px top",
      scrub: 1,
      // scrub: false,
      // scrub: true,

      end: "bottom"
      // pin: true,
    },
  });

  gsap.to(
    ".secure__item .orbit",
    {
      scrollTrigger: {
        trigger: ".secure",
        start: "top center",
        // scrub: 1,
        // scrub: false,
        // scrub: true,

        end: "bottom",
        // pin: true,
      },
      rotation: "+=360",
      duration: 5,
      // stagger: 0.35
    }
  );

  return tlGallery;
}