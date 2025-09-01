<template>
  <div class="app-swiper__inner">
    <Swiper class="app-swiper" :spaceBetween="50" :breakpoints="breakpoints" :slidesPerView="slidesPerView"
      :autoplay="autoplay" :creative-effect="{
        prev: {
          shadow: false,
          translate: ['-20%', 0, -1],
        },
        next: {
          translate: ['100%', 0, 0],
        },
      }" :navigation="navigation" :modules="[Navigation, Autoplay]">
      <SwiperSlide :class="bem('app-swiper__slide', { full: slidesPerView === 1 })" v-for="(item, index) in slides"
        :key="index">

        <slot>
          <div class="app-swiper__item">
            <img class="app-swiper__item-image" :src="item.image" alt="" width="656" height="520" ref="image" />
            <div class="app-swiper__item-title" v-if="item.name">
              <span class="app-swiper__item-title__icon">{{ index + 1 }}</span>
              <p class="app-swiper__item-title__text">{{ item.name }}</p>
            </div>
            <p class="app-swiper__item-description" v-if="item.description" v-html="item.description" />
          </div>
        </slot>
      </SwiperSlide>
    </Swiper>
    <button id="swiper_btn_prev" :class="keyBtn.prev" :style="styleBtn">
      <NuxtIcon name="iconArrow" filled />
    </button>
    <button id="swiper_btn_next" :class="keyBtn.next" :style="styleBtn">
      <NuxtIcon name="iconArrow" filled />
    </button>
  </div>
</template>

<script setup lang="ts">
import { useMq } from "vue3-mq";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { computed, onMounted, ref } from "vue";
const props = defineProps({
  slides: {
    type: Array,
  },
  slidesPerView: {
    type: Number,
    default: 2,
  },
  keyBtn: {
    type: Object,
    default: {
      prev: "prev",
      next: "next",
    },
  },
  autoplay: {
    type: [Object, Boolean],
    default: {
      delay: 3000,
      disableOnInteraction: false,
    },
  },
});
const navigation = computed(() => {
  return {
    prevEl: `.${props.keyBtn.prev}`,
    nextEl: `.${props.keyBtn.next}`,
  };
});
const breakpointsMq = useMq();
const image = ref();
const breakpoints = {
  320: {
    spaceBetween: 24,
    slidesPerView: 1,
  },
  768: {
    spaceBetween: 40,
  },
  1265: {
    spaceBetween: 50,
  },
};
const styleBtn = ref("");
onMounted(() => {
  if (image?.value?.[0]) {
    const observer = new ResizeObserver((entries) => {
      const firstImage = entries[0];
      const top = firstImage?.contentRect?.height / 2 - 24;
      styleBtn.value = breakpointsMq.desktop_xl ? "" : `top: ${top}px;`;
    });

    observer.observe(image?.value?.[0]);
  }

});
</script>

<style lang="scss">
#swiper_btn_prev,
#swiper_btn_next {
  position: absolute;
  z-index: 1;
  border: none;
  outline: none;
  top: vw(260);
  width: vw(48);
  height: vw(48);
  background: $white;
  border-radius: 50%;
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.07),
    0px 0px 1px 0px rgba(0, 0, 0, 0.07), 0px 2px 2px 0px rgba(0, 0, 0, 0.06),
    0px 4px 2px 0px rgba(0, 0, 0, 0.04), 0px 7px 3px 0px rgba(0, 0, 0, 0.01),
    0px 11px 3px 0px rgba(0, 0, 0, 0);
  color: $white;
  display: flex !important;
  align-items: center;
  justify-content: center;

  &:after {
    content: "";
  }

  .nuxt-icon {
    display: inline-flex;
  }
}

#swiper_btn_prev.swiper-button-disabled,
#swiper_btn_next.swiper-button-disabled {
  opacity: 0;
  user-select: none;
  cursor: auto;
}

#swiper_btn_prev {
  left: -24px;

  // @include md-max {
  //   left: -14px;
  // }

  .nuxt-icon {
    transform: rotateZ(0deg);
  }
}

#swiper_btn_next {
  right: -24px;

  // @include md-max {
  //   right: -14px;
  // }

  .nuxt-icon {
    transform: rotateZ(180deg);
  }
}

.app-swiper {
  &__inner {
    position: relative;
  }

  &__slide {
    width: calc(50% - vw(25)) !important;

    // @include xl-max {
    //   width: calc(50% - vw(20)) !important;
    // }

    // @include md-max {
    //   width: 100% !important;
    // }

    &--full {
      width: 100% !important;
    }
  }

  &__item {}

  &__item-image {
    border-radius: vw(24);
    width: 100%;
    height: 100%;
    object-fit: cover;
    max-height: vw(520);
    aspect-ratio: 1/1;
  }

  &__item-title {
    margin-top: vw(32);
    margin-bottom: vw(24);
    display: flex;
    align-items: center;
    gap: vw(16);
    flex-wrap: wrap;

    // @include lg-max {
    //   margin-top: vw(24);
    //   margin-bottom: vw(16);
    // }
  }

  &__item-title__icon {
    min-width: vw(24);
    background-color: $brown;
    border-radius: vw(16);
    padding: vw(12);
    color: $white;
    font-size: vw(24);
    line-height: 100%;
    letter-spacing: -0.24px;
    display: grid;
    align-items: center;
    justify-content: center;

    // @include lg-max {
    //   font-size: vw(16);
    //   min-width: vw(8);
    //   max-height: vw(32);
    //   padding: vw(8) vw(12);
    //   border-radius: vw(12);
    // }
  }

  &__item-title__text {
    font-size: vw(32);
    line-height: 100%;
    letter-spacing: -0.48px;
    overflow-wrap: anywhere;

    // @include lg-max {
    //   font-size: vw(24);
    // }
  }

  &__item-description {
    color: rgba($brown, 0.6);
    font-size: vw(16);
    line-height: 130%;
    overflow-wrap: anywhere;

    // @include lg-max {
    //   font-size: vw(14);
    // }
  }
}
</style>