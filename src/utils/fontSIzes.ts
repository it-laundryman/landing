export const vw = (value: number, base = 1265) => {
  return (value / base) * window.innerWidth
}

export const vwm = (value: number, base = 320) => {
  return (value / base) * window.innerWidth
}

export const vmin = (value: number, base = 320) => {
  const minSide = Math.min(window.innerWidth, window.innerHeight)
  return (value / base) * minSide
}