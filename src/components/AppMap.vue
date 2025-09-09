<template>
  <GMapMap :center="center" :zoom="16" map-type-id="terrain" style="width: 100%; height: 100%" :options="mapOptions">
    <GMapMarker v-for="marker in filteredMarkers" :key="marker.id" :position="marker.position" :icon="marker.icon" />
  </GMapMap>
</template>

<script setup lang="ts">
import { ref, computed } from "vue"
import logoMap from "@/assets/images/logo-map.svg"
import logoMapComponent from "@/components/icons/IconLogoMap.vue"
const center = { lat: -8.319236944941153, lng: 115.01765976695413 } // Bali центр

const sandMapStyle = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ebe3cd"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#523735"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f1e6"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#c9b2a6"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#dcd2be"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#ae9e90"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#93817c"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#a5b076"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#447530"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f1e6"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#fdfcf8"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f8c967"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#e9bc62"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e98d58"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#db8555"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#806b63"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8f7d77"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#ebe3cd"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#b9d3c2"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#92998d"
      }
    ]
  },
  {
    elementType: "labels.icon",
    stylers: [
      { visibility: "simplified" },
      { color: "#a68b61" } // песочный цвет иконок
    ]
  }
]

// Стили карты
const mapOptions = {
  disableDefaultUI: true,
  zoomControl: true,
  styles: sandMapStyle
}

// Фильтры
const filters = [
  { label: "WALKABLE", value: "walk" },
  { label: "FREE SHUTTLE", value: "shuttle" },
  { label: "BY CAR", value: "car" },
  { label: "ALL", value: "all" },
]

const activeFilter = ref("all")

// Маркеры
const markers = [
  {
    id: "temple1",
    type: "walk",
    position: { lat: -8.319236944941153, lng: 115.01765976695413 },
    icon: logoMap,
  },
  {
    id: "waterfall1",
    type: "car",
    position: { lat: -8.39, lng: 115.20 },
    icon: "/icons/waterfall.png",
  },
  {
    id: "resort",
    type: "shuttle",
    position: { lat: -8.37, lng: 115.18 },
    icon: "/icons/resort.png",
  }
]

const filteredMarkers = computed(() =>
  activeFilter.value === "all"
    ? markers
    : markers.filter(m => m.type === activeFilter.value)
)
</script>

<style scoped lang="scss">
.vue-map-container {
  height: 100%;
}
</style>