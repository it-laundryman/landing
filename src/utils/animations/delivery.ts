export function animateDelivery(gsap, tl) {

  const tlGallery = gsap.timeline({});

  tlGallery.to(
    ".delivery__item .orbit",
    {
      rotation: "+=360",
      duration: 5,
      // stagger: 0.35
    }
  );

  return tlGallery;
}