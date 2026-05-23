const cart = [];

const cartSidebar =
document.getElementById('cartSidebar');

const cartItems =
document.getElementById('cartItems');

const cartTotal =
document.getElementById('cartTotal');

const cartCount =
document.getElementById('cartCount');


// SEARCH PRODUK

const searchInput =
document.getElementById('searchInput');

searchInput.addEventListener('keyup',function(){

  const keyword =
  searchInput.value.toLowerCase();

  const cards =
  document.querySelectorAll('.card');

  cards.forEach(card=>{

    const title =
    card.querySelector('h3')
    .textContent
    .toLowerCase();

    if(title.includes(keyword)){

      card.style.display='block';

    }else{

      card.style.display='none';

    }

  });

});


// TOGGLE CART

function toggleCart(){

  cartSidebar.classList.toggle('active');

}


// ADD TO CART

function addToCart(name,price){

  cart.push({
    name,
    price
  });

  updateCart();

}


// UPDATE CART

function updateCart(){

  cartItems.innerHTML='';

  let total=0;

  cart.forEach((item,index)=>{

    total += item.price;

    cartItems.innerHTML += `

      <div class="cart-item">

        <h4>${item.name}</h4>

        <p>
          Rp ${item.price.toLocaleString()}
        </p>

        <button onclick="removeItem(${index})">
          Hapus
        </button>

      </div>

    `;

  });

  cartTotal.textContent =
  'Rp ' + total.toLocaleString();

  cartCount.textContent =
  cart.length;

}


// HAPUS ITEM

function removeItem(index){

  cart.splice(index,1);

  updateCart();

}


// BUY NOW

function buyNow(name,price){

  const nomor='6285768495689';

  const pesan=
  `Halo Anita Dwi, saya mau pesan:

${name}

Harga: Rp ${price.toLocaleString()}`;

  const url=
  `https://wa.me/${nomor}?text=${encodeURIComponent(pesan)}`;

  window.open(url,'_blank');

}


// CHECKOUT

function checkoutWhatsApp(){

  if(cart.length===0){

    alert('Keranjang kosong');

    return;

  }

  let pesan=
  'Halo Anita Dwi, saya ingin checkout:%0A%0A';

  let total=0;

  cart.forEach(item=>{

    pesan +=
    `- ${item.name} : Rp ${item.price.toLocaleString()}%0A`;

    total += item.price;

  });

  pesan +=
  `%0ATotal: Rp ${total.toLocaleString()}`;

  const nomor='6285768495689';

  const url=
  `https://wa.me/${nomor}?text=${pesan}`;

  window.open(url,'_blank');

}
function goBeranda(){
window.scrollTo({
top:0,
behavior:"smooth"
});
}
function closePopup() {

    document.getElementById("pesananPopup").style.display = "none";
    document.getElementById("voucherPopup").style.display = "none";
    document.getElementById("bantuanPopup").style.display = "none";

    document.body.style.overflow = "auto";
}

function openPesanan() {

    closePopup();

    document.getElementById("pesananPopup").style.display = "block";

    window.scrollTo(0, 0);

    document.body.style.overflow = "hidden";
}

function openVoucher() {

    closePopup();

    document.getElementById("voucherPopup").style.display = "block";

    window.scrollTo(0, 0);

    document.body.style.overflow = "hidden";
}

function openBantuan() {

    closePopup();

    document.getElementById("bantuanPopup").style.display = "block";

    window.scrollTo(0, 0);

    document.body.style.overflow = "hidden";
}
