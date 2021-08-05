const author = document.querySelector("#author")
const calculation = document.querySelector("#calculation")
const btn_toggle = document.querySelector("#toggle");
let toggle = false
let authorText = author.innerHTML

const length = document.getElementById('length')
const color = document.querySelector('#color')
const search = document.querySelector('#search')
const reset = document.querySelector('#reset')
const text = document.querySelector('#text')

let textData = text.innerText

// define more constants and variables here

btn_toggle.onclick = () => {
  if(!toggle){
    let l = length.value
    let code = parseInt(author.innerText.split(" ")[0],10)
    author.innerText = code + parseInt(l,10)
    btn_toggle.innerText = "Display Author"
    toggle = true
  }
  else {
    author.innerText = authorText
    btn_toggle.innerText = "Display Calculation"
    toggle = false
  }

}

// more codes for Search and Reset buttons here
search.onclick = () => {
  text.innerText = textData
  let l = length.value
  let words = text.innerText.split(" ")
  let selectword = []
  let color = document.querySelector("#color").value

  for(const word of words){
    if(word.length >= l){
      selectword.push(word)
    }
  }
  for(const word of selectword){
    let innerHTML = text.innerHTML
    let index = innerHTML.indexOf(word)
    innerHTML = innerHTML.substring(0, index) + "<span style='background-color:" + color + " ;'>" + innerHTML.substring(index, index + word.length) + "</span>" + innerHTML.substring(index + word.length);
    text.innerHTML = innerHTML;
  }
}

reset.onclick = () => {
  location.reload()
}