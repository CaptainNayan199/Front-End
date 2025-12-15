let bagItemObjects;
const DELIVERY_FEE = 140
window.addEventListener('load', event => {
  loadBagItemObjects()
  showDataInfo()
  showTotalPrice()
})


function showDataInfo() {
  let bagItemsContainer = document.querySelector('.bag-items-container')
  let innerHtmlCode = ''
  bagItemObjects.forEach(bagItem => {
    innerHtmlCode += generateItemCode(bagItem)
  });

  bagItemsContainer.innerHTML = innerHtmlCode
}


function loadBagItemObjects() {
  // console.log(bagItems)
  // console.log(allItems[0])
  bagItemObjects = bagItems.map(itemId => {
    for (let i = 0; i < allItems.length; i++) {
      if (itemId == allItems[i].id) {
        return allItems[i]
      }
    }
  })
  // console.log(bagItemObjects)
}

function removeFromBag(itemId) {
  bagItems = bagItems.filter(bagId => bagId != itemId)
  localStorage.setItem('bagItems', JSON.stringify(bagItems))
  loadBagItemObjects()
  showDataInfo()
  displayBagCount()
  showTotalPrice()
  // console.log(bagItems)

}



function generateItemCode(item) {
  console.log(item)
  return `<div class="bag-item-container">
              <div class="item-left-part">
                <img class="bag-item-img" src="../${item.image}" />
              </div>
              <div class="item-right-part">
                <div class="company">${item.company_name}</div>
                <div class="item-name">
                  ${item.item_name}
                </div>
                <div class="price-container">
                  <span class="current-price">Rs ${item.price.current_price}</span>
                  <span class="original-price">Rs ${item.price.original_price}</span>
                  <span class="discount-percentage">(${item.price.discount}% OFF)</span>
                </div>
                <div class="return-period">
                  <span class="return-period-days">14 days</span> return available
                </div>
                <div class="delivery-details">
                  Delivery by
                  <span class="delivery-details-days">10 Oct 2025</span>
                </div>
              </div>
  
              <div class="remove-from-cart" onclick = 'removeFromBag(${item.id})' >x</div>
            </div>`
}



function showTotalPrice() {
  let bag_summary = document.querySelector('.bag-summary')

  let totalItems = bagItemObjects.length
  let totalMRP = 0
  let totalDiscount = 0
  bagItemObjects.forEach(bagItem => {
    totalMRP += bagItem.price.original_price
    totalDiscount += bagItem.price.original_price - bagItem.price.current_price
  })

  let finalPayment = (totalMRP - totalDiscount) + DELIVERY_FEE



  bag_summary.innerHTML = `<div class="bag-details-container">
            <div class="price-header">PRICE DETAILS (${totalItems} Items)</div>
            <div class="price-item">
              <span class="price-item-tag">Total MRP</span>
              <span class="price-item-value">Rs ${totalMRP}</span>
            </div> 
            <div class="price-item">
              <span class="price-item-tag">Discount on MRP</span>
              <span class="price-item-value priceDetail-base-discount"
                > -Rs ${totalDiscount}</span
              >
            </div>
            <div class="price-item">
              <span class="price-item-tag">Delivery Fee</span>
              <span class="price-item-value">Rs 140</span>
            </div>
            <hr />
            <div class="price-footer">
              <span class="price-item-tag">Total Amount</span>
              <span class="price-item-value">Rs ${finalPayment}</span>
            </div>
          </div>
          <button class="btn-place-order">
            <div class="css-xjhrni">PLACE ORDER</div>
          </button>`



}
