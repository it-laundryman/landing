export function animateSecure(gsap, tl) {

  const tlGallery = gsap.timeline({});

  tlGallery.to(
    ".secure__item .orbit",
    {
      rotation: "+=360",
      duration: 5,
      // stagger: 0.35
    }
  );

  return tlGallery;
}