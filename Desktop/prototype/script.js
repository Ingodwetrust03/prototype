'use strict'

const form = document.querySelector('.create-element')
const input = document.querySelector('input')
let inputValue
const btn = document.querySelector('button')
let newBlock

const DomElement = function(selector, height, width, bg, fontSize){
    this.selector = selector
    this.height = height + 'px'
    this.width = width + 'px'
    this.bg = bg
    this.fontSize = fontSize + 'px'
    
}




DomElement.prototype.createDiv = function() {
    newBlock = document.createElement('p')
    newBlock.style.cssText='height:' + this.height + ';' + 'width:' +  this.width +';' + 'background:' + this.bg + ';' + 'font-size:' + this.fontSize + ';'
    newBlock.style.marginTop = 15 + 'px'

    inputValue = input.value

    if(inputValue.charAt(0) == '.'){
        this.selector = inputValue.substring(1)
        console.log(this.selector)
        newBlock.setAttribute('class', this.selector)
    }else if(inputValue.charAt(0) == '#'){
        this.selector = inputValue.substring(1)
        console.log(this.selector)
        newBlock.setAttribute('id', this.selector)
    }  else {
        return
    }


    form.after(newBlock)
}




btn.addEventListener('click', (e) => {
    e.preventDefault
    let newDiv = new DomElement(input.value, '150', '150', 'red', '25')
    newDiv.createDiv()
})



