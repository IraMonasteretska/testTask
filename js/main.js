// counter function
const counterPlus = document.querySelector('.size-qty__counter-right')
const counterMinus = document.querySelector('.size-qty__counter-left')
const counterResult = document.querySelector('.size-qty__counter-center')
const maxCount = 2;


counterPlus.addEventListener('click', () => {
  if(parseInt(counterResult.value) === maxCount){
    alert('The requested quantity for this product is not available.')
    return
  }
  counterResult.value++
})

counterMinus.addEventListener('click', () => {
  if(parseInt(counterResult.value) === 0){
    return
  }
  counterResult.value--
})


// select size clothing
const sizeClothing = document.querySelectorAll('.size-qty__type-item')

for(let item of sizeClothing){
  item.addEventListener('click', () => {
    if(item.classList.contains('no-active')){
      return
    }
    for(let j of sizeClothing){
      j.classList.remove('active')
    }
    item.classList.add('active')
  })
}


