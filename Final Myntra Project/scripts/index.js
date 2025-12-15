// We will add the elements from API/server(items.js) to html using js.
let bagItems = []; // id jati sabai yaha basne ho ni



window.addEventListener('load', event => {
  let bagItemString = localStorage.getItem('bagItems')
  // console.log(bagItemString)
  // bagItems.push(bagItemString)
  bagItems = bagItemString ? JSON.parse(bagItemString) : []
  showData()
  displayBagCount()
})


function showData() {
  let itemsContainer = document.querySelector(".items-container");
  let innerData = ''
  if (!itemsContainer) {
    return
  }
  allItems.forEach(item => {
    innerData += `<div class="item-container">
          <img class="item-image" src="${item.image}" alt="ear ring image" />
          <div class="rating">${item.rating.stars} ⭐ | ${item.rating.totalReviews}</div>
          <div class="company-name">${item.company_name}</div>
          <div class="item-name">${item.item_name}</div>
          <div class="price">
            <span class="current-price">Rs.${item.price.current_price}</span>
            <span class="original-price">Rs ${item.price.original_price}</span>
            <span class="discount">(${item.price.discount}% OFF)</span>
          </div>
          <button class="btn-add-bag" onclick= "addToBag('${item.id}')"  >Add to cart</button>
        </div>`
  })
  itemsContainer.innerHTML = innerData
}





function addToBag(itemId) {
  bagItems.push(itemId)
  displayBagCount()
  localStorage.setItem('bagItems', JSON.stringify(bagItems))
}


function displayBagCount() {
  let bagItemCount = document.querySelector('.itemCount')
  if (bagItems.length > 0) {
    bagItemCount.style.visibility = 'visible'
    bagItemCount.innerText = bagItems.length
  }
  else {
    bagItemCount.style.visibility = 'hidden'
  }
}




