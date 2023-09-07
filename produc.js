let openShopping = document.querySelector(".shopping");
let closeShopping = document.querySelector(".closeShopping");
let list = document.querySelector(".list");
let listCard = document.querySelector(".listCard");
let body = document.querySelector("body");
let total = document.querySelector(".total");
let quantity = document.querySelector(".quantity");

// Tombol untuk membuka keranjang belanja
openShopping.addEventListener("click", () => {
  body.classList.add("active");
});
// Tombol untuk menutup keranjang belanja.
closeShopping.addEventListener("click", () => {
  
  body.classList.remove("active");
});

// Menampilkan total harga produk pada keranjang belanja.
document.querySelector('.total').addEventListener('click',function (){
    alert('Fitur Pembelian belum tersedia ')
});


let products;
// Daftar produk yang ada di keranjang belanja.
let listCards = [];
function createProductElement(value, key) {
  let newDiv = document.createElement("div");
  newDiv.classList.add("item");

  let imgElement = document.createElement("img");
  imgElement.src = value.image_link;
  newDiv.appendChild(imgElement);

  let titleElement = document.createElement("div");
  titleElement.classList.add("title");
  titleElement.textContent = value.name;
  newDiv.appendChild(titleElement);

  let priceElement = document.createElement("div");
  priceElement.classList.add("price");
  priceElement.textContent = "$"+ value.price.toLocaleString();
  newDiv.appendChild(priceElement);

  let buttonElement = document.createElement("button");
  buttonElement.textContent = "ADD TO TROLI 🛒";
  newDiv.appendChild(buttonElement);

  // Add an event listener to the button instead of using onclick attribute
  buttonElement.addEventListener("click", function () {
    addToCard(key);
  });

  return newDiv;
}

// Memanggil fungsi initApp()untuk menampilkan produk pada halaman web saat halaman dimuat.
function initApp() {
  fetch("https://makeup-api.herokuapp.com/api/v1/products.json")
    .then((res) => res.json())
    .then((data) => {
      products = data;
      console.log(products);
      for (let i = 50; i < 197; i++) {
        let productElement = createProductElement(products[i],i);
        list.appendChild(productElement);
      }
    });

}
// Membuat fungsi initApp(), yang akanhttps://makeup-api.herokuapp.com/api/v1/products.json " dan menampilkan produk pada halaman dengan memanggil fungsi createProductElement().
initApp();
// Membuat fungsi addToCard(key), yang akan menambahkan produk ke dalam keranjang belanja. Jika produk belum ada di keranjang belanja, produk akan disalin ke dalam listCards dengan menyalin objek produk JSON dari produk. Jumlah kuantitas produk juga akan diatur menjadi 1.
function addToCard(key) {
  if (listCards[key] == null) {
    // salin daftar formulir produk ke kartu daftar
    listCards[key] = JSON.parse(JSON.stringify(products[key]));
    listCards[key].quantity = 1;
  }
  // Membuat fungsi `reloadreloadCard(), yangcreateCardElement(). Fungsi
  reloadCard();
}
// pemanggilan
// Membuat fungsi `createcreateCardElement(value, key), yang digunakan untuk membuat elemen produk pada keranjang belanja.<li>yang berisi gambar produk, nama produk, harga produk, dan tombol-tombol untuk mengubah jumlah quantity produk.
function createCardElement(value, key) {
  let newDiv = document.createElement("li");
  let imgDiv = document.createElement("div");
  let imgElement = document.createElement("img");
  imgElement.src = value.image_link;
  imgDiv.appendChild(imgElement);
  newDiv.appendChild(imgDiv);

  let nameDiv = document.createElement("div");
  nameDiv.textContent = value.name;
  newDiv.appendChild(nameDiv);

  let priceDiv = document.createElement("div");
  priceDiv.textContent = "$" + value.price.toLocaleString();
  newDiv.appendChild(priceDiv);

  let quantityDiv = document.createElement("div");
  let minusButton = document.createElement("button");
  minusButton.textContent = "-";
  minusButton.onclick = function () {
    changeQuantity(key, value.quantity - 1);
  };
  quantityDiv.appendChild(minusButton);

  let countDiv = document.createElement("div");
  countDiv.classList.add("count");
  countDiv.textContent = value.quantity;
  quantityDiv.appendChild(countDiv);

  let plusButton = document.createElement("button");
  plusButton.textContent = "+";
  plusButton.onclick = function () {
    changeQuantity(key, value.quantity + 1);
  };
  quantityDiv.appendChild(plusButton);

  newDiv.appendChild(quantityDiv);

  return newDiv;
}

// Membuat fungsi `reloadreloadCard(), yangcreateCardElement(). Fungsi
function reloadCard() {
  while (listCard.firstChild) {
    listCard.removeChild(listCard.firstChild);
  }

  let count = 0;
  let totalPrice = 0;

  listCards.forEach((value, key) => {
    if (value != null) {
      totalPrice = totalPrice + value.price * value.quantity;
      count = count + value.quantity + 0 ;
      let cardElement = createCardElement(value, key);
      listCard.appendChild(cardElement);
    }
  });

  total.textContent = "$" + totalPrice.toLocaleString();
  quantity.textContent = count;
}

// Menampilkan jumlah total produk yang ada pada keranjang belanja.
function changeQuantity(key, quantity) {
  if (quantity === 0) {
    delete listCards[key];
  } else {
    listCards[key].quantity = quantity;
    listCards[key].price = quantity * products[key].price;
  }

//   ke reload card
  reloadCard();
}



