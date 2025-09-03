import { useBreakpoints } from "@vueuse/core"

const breakpoints = useBreakpoints({
  mobile: 0, // optional
  desktop: 768
})

export function useBreakpoint() {
  return {
    isMobile: breakpoints.smaller("desktop")
  }
}