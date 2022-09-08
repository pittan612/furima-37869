function calc (){
  // id="item-priceの要素を取得。
  const itemPrice = document.getElementById("item-price");
  // 値が入力された時にイベントを発火。
  itemPrice.addEventListener('input', function(){
    // 下記を追記して、要素の値を取得。
    const itemPriceValue = itemPrice.value
    const Tax = 0.1;
    const tax_fee = itemPriceValue * Tax;
    const profit = itemPriceValue - tax_fee;
    const taxArea = document.getElementById("add-tax-price");
    const profitArea = document.getElementById("profit");
    taxArea.innerHTML = tax_fee;
    profitArea.innerHTML = profit;
  })
}

window.addEventListener('load', calc)