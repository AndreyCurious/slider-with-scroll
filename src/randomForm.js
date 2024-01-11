export function randomForm(item, pervForm, classes) {
  let randomNum = Math.floor(Math.random() * classes.length)
  let form = classes[randomNum]
  while (pervForm === form) {
    randomNum = Math.floor(Math.random() * classes.length)
    form = classes[randomNum]
  }
  if (item.title.length > 35 && form === 'circle') {
    return { ...item, form: 'longCircle', long: true }
  }
  if (item.title.length > 35) {
    return { ...item, form: form, long: true }
  }
  return { ...item, form: form }
}