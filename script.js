// SEARCH PRODUK
const searchInput = document.getElementById('searchInput');
const productCards = document.querySelectorAll('.product-card');

searchInput.addEventListener('keyup', function() {

  const keyword = searchInput.value.toLowerCase();

  productCards.forEach(card => {

    const title = card.querySelector('h3').textContent.toLowerCase();

    if(title.includes(keyword)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }

  });

});


// CHECKOUT WHATSAPP
function pesanProduk(namaProduk) {

  const nomor = '6285768495689';

  const pesan = `Halo ANSORI GROUP, saya mau pesan ${namaProduk}`;

  const url = `https://wa.me/${nomor}?text=${encodeURIComponent(pesan)}`;

  window.open(url, '_blank');
}
