export const loadImages = (pathPattern) => {
  const images = import.meta.glob("/src/assets/images/phons/*.png")
  const imagePaths = Object.keys(images)

  return imagePaths.filter((imgPath) => {
    const fileName = imgPath.split("/").pop()
    return pathPattern.some((pattern) => fileName.includes(pattern))
  })
}
