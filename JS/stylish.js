// loader

setTimeout(() => {
  document.querySelector(".loader").style.display = "none";
}, 3000);
// loader
// Scroll Btn
window.addEventListener("scroll", () => {
  let btn = document.querySelector(".scrollup");
  if (window.pageYOffset > 500) {
    btn.classList.add("active");
  } else {
    btn.classList.remove("active");
  }
});
document.querySelector(".scrollup").addEventListener("click", () => {
  window.scrollTo({
    top: 0,
  });
});
// Scroll Btn

// Start Remove All Active Classes
let allLinks = document.querySelectorAll(".navmenu li a");
allLinks.forEach((link) => {
  link.addEventListener("click", function () {
    document.querySelector(".active")?.classList.remove("active");
    this.classList.add("active");
  });
});

// End Remove All Active Classes
// Start NavMenu
let navBtn = document.querySelector(".nav-btn");
let navMenu = document.querySelector(".navmenu");
let menuOpen = false;

navBtn.addEventListener("click", () => {
  if (!menuOpen) {
    navBtn.classList.add("change");
    navMenu.classList.add("open");
    menuOpen = true;
  } else {
    navBtn.classList.remove("change");
    navMenu.classList.remove("open");
    menuOpen = false;
  }
});

// End NavMenu
// Start Shop
let openShop = document.querySelector(".shop-icon");
let closeBtn = document.querySelector(".close");
let body = document.querySelector("body");
// let list = document.querySelector(".list");
// let listCard = document.querySelector(".listCard");
// let total = document.querySelector(".total");
// let quantity = document.querySelector(".quantity");
openShop.addEventListener("click", () => {
  body.classList.add("active");
});
closeBtn.addEventListener("click", () => {
  body.classList.remove("active");
});

let products = [
  {
    id: 1,
    title: "T-Shirt",
    image: "IMGS/t-shirt-1.jpg",
    price: 60,
  },
  {
    id: 2,
    title: "T-Shirt",
    image: "IMGS/t-shirt-2.jpg",
    price: 80,
  },
  {
    id: 3,
    title: "T-Shirt",
    image: "IMGS/t-shirt-3.jpg",
    price: 30,
  },
  {
    id: 4,
    title: "T-Shirt",
    image: "IMGS/t-shirt-4.jpg",
    price: 100,
  },
  {
    id: 5,
    title: "T-Shirt",
    image: "IMGS/t-shirt-5.jpg",
    price: 55,
  },
  {
    id: 6,
    title: "Pants",
    image: "IMGS/pants-1.jpg",
    price: 40,
  },
  {
    id: 7,
    title: "Pants",
    image: "IMGS/pants-2.jpg",
    price: 60,
  },
  {
    id: 8,
    title: "Pants",
    image: "IMGS/pants-3.jpg",
    price: 33,
  },
  {
    id: 9,
    title: "Pants",
    image: "IMGS/pants-4.jpg",
    price: 45,
  },
  {
    id: 10,
    title: "Pants",
    image: "IMGS/pants-5.jpg",
    price: 52,
  },
  {
    id: 11,
    title: "Shoes",
    image: "IMGS/shoes-1.jpg",
    price: 80,
  },
  {
    id: 12,
    title: "Shoes",
    image: "IMGS/shoes-2.jpg",
    price: 70,
  },
  {
    id: 13,
    title: "Shoes",
    image: "IMGS/shoes-3.jpg",
    price: 66,
  },
  {
    id: 14,
    title: "Shoes",
    image: "IMGS/shoes-4.jpg",
    price: 88,
  },
  {
    id: 15,
    title: "Shoes",
    image: "IMGS/shoes-5.jpg",
    price: 108,
  },
];

let categories = [
  ...new Set(
    products.map((item) => {
      return item;
    })
  ),
];
let i = 0;
document.querySelector(".list").innerHTML = categories
  .map((item) => {
    let { title, image, price } = item;
    return (
      `<div class="box">
    <img class="images" src=${image}
    <div class="info">
    <div class="title">${title}</div>
    <div class="price">$${price}</div> ` +
      "<button onclick='addtocard(" +
      i++ +
      ")'>Add To List</button>" +
      `
    </div>`
    );
  })
  .join("");
let cart = [];
function addtocard(a) {
  cart.push({ ...categories[a] });
  displayCart();
}
function delelement(a) {
  cart.splice(a, 1);
  displayCart();
}
function displayCart(a) {
  let j = 0,
    total = 0;
  document.querySelector(".quantity").innerHTML = cart.length;
  if (cart.length == 0) {
    document.querySelector(".listCard").innerHTML = "Your Cart Is Empty";
    document.querySelector(".total").innerHTML = "$ " + 0;
  } else {
    document.querySelector(".listCard").innerHTML = cart
      .map((items) => {
        let { image, title, price } = items;
        total = price + total;
        document.querySelector(".total").innerHTML = "$" + total;
        return (
          `<div class='cart-item'>
        <img class='cart-img' src=${image}>
        <p class='cart-title'> ${title}</p>
        <h2 class='cart-price'>$${price}<h2>` +
          "<i class='delete fa-solid fa-trash' onclick='delelement(" +
          j++ +
          ")'></i></div>"
        );
      })
      .join("");
  }
}

// End shop

// Start reveal

window.addEventListener(`scroll`, reveal);
function reveal() {
  let reveals = document.querySelectorAll(`.reveal`);
  for (let i = 0; i < reveals.length; i++) {
    let windowheight = window.innerHeight;
    let revealTop = reveals[i].getBoundingClientRect().top;
    let revealPoint = 120;
    if (revealTop < windowheight - revealPoint) {
      reveals[i].classList.add(`show`);
    } else {
      reveals[i].classList.remove(`show`);
    }
  }
}

// End reveal
