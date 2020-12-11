//Change background

//Define variables
const button = document.querySelector('button')
const body = document.querySelector('body')
const colors = ['#fff9f9','#ffeeee','#ffe3e3','#ffcfcf', '#ffaaaa'];

//default bckground
body.style.background = 'pink'

//event and event function
button.addEventListener('click', changeBackground)

function changeBackground(){
  const colorIndex = parseInt(Math.random()*colors.length)
  body.style.backgroundColor = colors[colorIndex]
}
