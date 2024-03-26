let allTotal = 0;

function addToCart (element){
  let mainEl = element.closest('.single-item');
  let price = mainEl.querySelector('.price').innerText;
  let name = mainEl.querySelector('h3').innerText;
  let quantity = mainEl.querySelector('input').value;
  let cartItems = document.querySelector('.cart-items');

if(parseInt(quantity) > 0 ){
  price = price.substring(1);
  price = parseInt(price);
  let total = price * parseInt(quantity);
 
allTotal += total;

  cartItems.innerHTML += `<div class="cart-single-item">
                            <h3>${name}</h3>
                            <p>${price} x ${quantity} = $<span>${total}</span></p3>
                            <button onclick="removeFromCart(this)" class="remove-item">Ukloni</button>
                          </div>`;

  document.querySelector('.total').innerText = `Total: $${allTotal}`;
  
  element.innerText = 'Dodano';
  element.setAttribute('dissabled', 'true');

}else {
  alert('Odaberi kolicinu');
}
}

function removeFromCart(element){
  let mainEl = element.closest('.cart-single-item');
//  let price = mainEl.querySelector('p span'); -- pri uklanjanju, ne daje broj nego prikazuje NaN
    let price = mainEl.querySelector('p span').innerText; // basic greska haha, sad vraca brojcanu vrijednost 
  let name = mainEl.querySelector('h3').innerText;
  let vegetables = document.querySelectorAll('.single-item');
  
  price = parseInt(price);

  allTotal -= price;

document.querySelector('.total').innerText = `Total: $${allTotal}`;

  mainEl.remove();

vegetables.forEach(function (vege){
  let itemName = vege.querySelector('.si-content h3').innerText;

  if(itemName === name){
vege.querySelector('.action input').value = 0;
vege.querySelector('.action button').removeAttribute('disabled');
vege.querySelector('.action input').innerText = 'Dodaj';
  }

  console.log(vege);
  });
}
