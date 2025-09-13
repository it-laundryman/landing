<template>
  <div class="custom-tooltip">
    <div class="tooltip-content">
      <span class="time">{{ marker.travelTime }}</span>
      <p class="title">{{ marker.id }}</p>
      <!-- <p class="distance">{{ marker.distance }}</p> -->
    </div>
  </div>
</template>

<script setup lang="ts">
interface IMarker {
  id: string,
  type: string,
  position: { lat: number, lng: number },
  icon: any,
  travelTime?: string | null,
  distance?: string | null,
  default?: boolean
}
defineProps<{ marker: IMarker }>()
</script>

<style scoped lang="scss">
.custom-tooltip {
  // background: green;
  // border: 1px solid #ccc;
  // border-radius: 6px;
  // padding: 6px 10px;
  // box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  white-space: nowrap;
  pointer-events: none;
}

.tooltip-content {
  display: flex;
  line-height: 1.3;
  background-color: $white;
  border: 1px solid $yellow-dark;
  align-items: center;
  border-radius: 30px;
  padding: 4px;
  gap: 6px;
}

.title {
  font-family: 'Plus Jakarta Sans';
  font-weight: 400;
  font-size: 12px;
  line-height: 100%;
  letter-spacing: 0px;
  color: $black-light;

  @include mobile {
    font-size: vmin(7);
  }
}

.time {
  margin-left: -5px;
  margin-top: -5px;
  margin-bottom: -5px;
  display: inline-block;
  border-radius: 30px;
  font-family: 'Plus Jakarta Sans';
  font-weight: 600;
  font-style: SemiBold;
  font-size: 12px;
  line-height: 100%;
  letter-spacing: 0px;
  text-align: center;
  color: $white;
  padding: 7px 10px;
  background-color: $green;

  @include mobile {
    font-size: vmin(7);
  }
}
</style>