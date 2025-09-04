
export function animateDelivery(gsap: GSAP): GSAPTimeline {

  const tlGallery = gsap.timeline({});

  gsap.to(
    ".delivery__item .orbit",
    {
      scrollTrigger: {
        trigger: ".delivery",
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

export function animateMobileDelivery(gsap: GSAP): GSAPTimeline {

  const tlGallery = gsap.timeline({});

  gsap.to(
    ".delivery__item .orbit",
    {
      scrollTrigger: {
        trigger: ".delivery",
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