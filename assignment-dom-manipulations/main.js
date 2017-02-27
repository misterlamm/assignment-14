
document.querySelector("#inject-html button").addEventListener('click',function(){
  // TASK #1
  var answerBoxEl = document.querySelector('#inject-html .answer-box')
  answerBoxEl.innerHTML = "<h2>Here is some text for you!!</h2>"
})

document.querySelector("#double button").addEventListener('click',function(){
  // TASK #2
  var answerPTagWithValue = document.querySelector('#compoundInvestment')
  // you do the rest
  var number = answerPTagWithValue.textContent
    answerPTagWithValue.textContent = number * 2
})


document.querySelector("#color-circle button").addEventListener('click',function(){
  // TASK #3

var circleEl = document.querySelector('#circle-bw')
console.log(circleEl)


var circleStyles = window.getComputedStyle(circleEl)

if(circleStyles.backgroundColor === 'rgb(0, 0, 0)'){
  circleEl.style.background  = "#fff"
} else {
  circleEl.style.background  = "rgb(0, 0, 0)"
}

})

document.querySelector("#blow-up button").addEventListener('click',function(){
  // TASK #4}
var blowUpButtonEl = document.querySelector('#blow-up')

// Part 1
// 1 select Circle Element (circle-red)
// 2 get the pixel string value of width and height of circle-red
// 3 convert pixel string value into an integer (parseInt(...))

// Part 2       check to see if integer-width >= 320
//    1 IF integer-width of .circle-red < 320
//     2a  THEN multiply integer-width * 2
//     3a convert integer-width to 'XXpx' string
//     4a  assign .circle-red & .style.width = 'XXpx' string
//
//     2b ELSE multiply integer-width * 2
//     3b assign circle-red .style.width & style.height = '40px' string

})

document.querySelector("#remove button").addEventListener('click',function(){
  // TASK #5
var userListEls = document.querySelectorAll('#user-list li')
var userListContainerEl = document.querySelector('#user-list')

var largeHtmlStr = ''

forEach(userListEls, function(domElement, index, theArray){
    if(domElement.className.indexOf('inactive') >= 0) {
      userListContainerEl.removeChild(domElement)
    }
})

//1 select all the <li> elements under #user-list
//2 loop over the <li> elements
//3 on each iteration, check the className on the DOM element to see if it has a value of 'active'
//4 IF the DOM element has a class of 'active', we need to append to a large-string
//5 When finished w/ loop, append large-string as .innerHTML to #user-list (the list container)



})


document.querySelector("#reverse-squares button").addEventListener('click',function(){
  // TASK #6
var reverseSquares = document.querySelector('#reverse-squares')

// 1 select all elements that are .square w/ document .querySelectorAll()
// 2 iterate over elements backwards for { var i = allSqaures.length - 1 ; i >= 0 ; i --)
// 3 select #reverse-squares .answer-box and .appendChild (squareDomElement)

//Alternative
// 2 create an empty array
// 3 iterate over elements and .unshift() each element to the beginning of reverseOrderSquaresList
// 4 clear the #reverse-squares .asnwer-box (.innerHTML = '')
// 5 iterate over reverseOrderSquaresList
// 6 inside loop, you will append element to reverse-squares .answer-box with .appendChild(squareDomElement)


})

document.querySelector("#pig-latin button").addEventListener('click',function(){
  // TASK #7
var pigLatin = document.querySelector('#pig-latin')

//1 select all the #tasks li elements .querySelectorAll(...)
//2 loop over each li element
//3 inside of for-loop, store the value of the reversed string into variable
//        - to reverse string
//          i) split string into an array of single characters
//          ii) reverse the array
//          iii) join the now-reversed array back into a string
//4 inside of for-loop set dom element .innterHTML to the reversed string

})

document.querySelector("#cycle-image button").addEventListener('click',function(){
   //TASK #8
var cycleImage = document.querySelector('#cycle-image')

})
