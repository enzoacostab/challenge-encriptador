const obj = {
  e: "enter", 
  i: "imes", 
  a: "ai", 
  o: "ober", 
  u: "ufat"
}
const p = document.getElementById("res")
const textarea = document.getElementById("text")
const section = document.querySelector("section")

const encriptar = () => {
  let { value } = textarea
  value = value.split('').map(e => obj[e] ?? e).join('')
  section.classList.add('res')
  p.innerText = value
}

const desencriptar = () => {
  let { value } = textarea
  for (let key in obj) {
    while (value.includes(obj[key])) {
      value = value.replace(obj[key], key)
    }
  }
  section.classList.add('res')
  p.innerText = value
}

const copiar = () => {
  navigator.clipboard.writeText(p.innerText)
}