// @ts-nocheck


// Define types for the element and event
type ClickOutsideElement = HTMLElement & {
  clickOutsideEvent?: (event: MouseEvent) => void;
};

export const clickOutside = {
  beforeMount(el: ClickOutsideElement, binding: DirectiveBinding) {
    console.log(el, binding);

    el.clickOutsideEvent = function (event: MouseEvent) {
      if (!(el === event.target || el.contains(event.target as Node))) {
        binding.value(event);
      }
    };

    // Добавляем небольшую задержку для избежания immediate срабатывания
    setTimeout(() => {
      document.addEventListener('click', el.clickOutsideEvent!);
    }, 0);
  },
  // unmounted(el: ClickOutsideElement) {
  //   if (el.clickOutsideEvent) {
  //     document.removeEventListener('click', el.clickOutsideEvent);
  //   }
  // }
};

export default clickOutside;