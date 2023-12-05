export const toTitle = (text) => {
  return text.split().map((word) => {
    const fisrtChar = word.substring(0, 1)
    const resChar = word.substring(1)
    return fisrtChar.toUpperCase() + resChar.toLowerCase()
  }).join(" ")
}