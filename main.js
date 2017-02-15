
document.querySelector("#thanks button").addEventListener('click',function(){
  // TASK #1
 alert("Yowch! Dont click me so hard!")
})

document.querySelector("#double button").addEventListener('click',function(){
  // TASK #2
  var pNode = document.getElementById('compoundInvestment')
  var number = parseInt(pNode.innerHTML)
  number = number * 2
  pNode.innerHTML=number
})


document.querySelector("#color-circle button").addEventListener('click',function(){
  // TASK #3
  var circle = document.querySelector('#circle-bw')
  if(circle.style.background === 'white'){
  	circle.style.background = 'black'
  }
  else{
  	circle.style.background = 'white'
  }
})

document.querySelector("#blow-up button").addEventListener('click',function(){
  // TASK #4}
  var redCircle = document.querySelector('.circle-red')
  var styleObj = window.getComputedStyle(redCircle)
  
  var doubleHeight = parseInt(styleObj.height)*2
  var doubleWidth = parseInt(styleObj.width)*2

  if(parseInt(redCircle.style.height) > 320){
 	redCircle.style.height = '40px'
  	redCircle.style.width = '40px'
  }
  else{
  	redCircle.style.height = doubleHeight + 'px'
  	redCircle.style.width = doubleWidth + 'px'
  }

})

document.querySelector("#remove button").addEventListener('click',function(){
  // TASK #5
  var ulNode = document.getElementById('userList')
var liArray = ulNode.children 

for (var i = liArray.length - 1; i >= 0; i --) { 
      if(liArray[i].classList.contains('inactive')) {
        ulNode.removeChild(liArray[i]) 
      }
  }
})


document.querySelector("#reverse-squares button").addEventListener('click',function(){
  // TASK #6
  var colorParentNode = document.querySelector('.square').parentNode
  var colorSquareNode = colorParentNode.children 
  var colorArray = [] 
  for (var i = 0; i < colorSquareNode.length; i++){
  	colorArray.push(colorSquareNode[i]) 

  }
  colorArray.reverse() 
  colorParentNode.innerHTML='' 

  for(var i = 0; i < colorArray.length; i++) {
  	colorParentNode.appendChild(colorArray[i])
  }


})

document.querySelector("#pig-latin button").addEventListener('click',function(){
  // TASK #7
  var ulNode = document.querySelector('#tasks')
  var liChildren = ulNode.children

  for (var i = 0; i<liChildren.length; i++){
  	liChildren[i].innerHTML = liChildren[i].innerHTML.split('').reverse().join('')
  }
})

document.querySelector("#cycle-image button").addEventListener('click',function(){
  // TASK #8
})