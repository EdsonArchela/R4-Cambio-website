const tagColors = (tag: string): string => {
  console.log(tag)
  let color
  switch (tag) {
    case 'Notícias':
      color = '#808080'
      break
    case 'Produtos':
      color = '#055556'
      break
    case 'Artigos':
      color = '#9e3200'
      break
    case 'Tendências':
      color = '#cf0202'
      break
    default:
      color = ''
      break
  }
  return color
}
export default tagColors
