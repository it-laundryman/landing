// @ts-nocheck
export function animateGallery(gsap, tl) {
  const galleryList = document.querySelector('.gallery__list');
  const galleryItems = document.querySelectorAll('.gallery__item');
  const container = galleryList.parentElement;

  // Рассчитываем процент смещения
  const totalContentWidth = galleryList.scrollWidth;
  const visibleWidth = container.offsetWidth;
  const overflowWidth = totalContentWidth - visibleWidth;

  // Процент смещения, необходимый для прокрутки до конца
  const percentOffset = -(overflowWidth / totalContentWidth * 100);

  const tlHeader = gsap.timeline({
    scrollTrigger: {
      trigger: ".gallery",
      start: "top-=50% top",
      scrub: 1,
      end: "+=1000",
      // pin: true,
    },
  });
  tlHeader.fromTo(
    ".gallery__list",
    {
      x: '0%',
    },
    {
      x: `${percentOffset}%`,
      // duration: 24,
    }
  );


  return tlHeader
}