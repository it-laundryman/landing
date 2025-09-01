export const clickOutside = {
  beforeMount(el, binding) {
    console.log(el, binding)
    el.clickOutsideEvent = function (event) {
      if (!(el === event.target || el.contains(event.target))) {
        binding.value(event);
      }
    };
    // Добавляем небольшую задержку для избежания immediate срабатывания
    setTimeout(() => {
      document.addEventListener('click', el.clickOutsideEvent);
    }, 0);
  },
  unmounted(el) {
    document.removeEventListener('click', el.clickOutsideEvent);
  }
};

export default clickOutside;