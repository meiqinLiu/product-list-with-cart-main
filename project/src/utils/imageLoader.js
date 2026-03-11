const modules = import.meta.glob('@/assets/images/*.{png,jpg,jpeg,svg}', {
    eager: true,
    import: 'default'
  })
  
  const images = {}

  // console.log(modules);
  
  for (const path in modules) {
    const fileName =   path.replace('/src/assets/images', '')
    images[fileName] = modules[path]
  }
  
  export function getImage(name) {
    console.log(images);
    return images[name]
  }
  
  export function getAllImages() {
    return images
  }