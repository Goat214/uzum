import { products } from "./data.js";

products.forEach((element) => {
  console.log(element.title);
});

const html = document.documentElement;
const themeToggler = document.getElementById("theme-toggler");

const theme = localStorage.getItem("theme");

if (theme) {
  html.dataset.theme = theme;
  themeToggler.checked = html.dataset.theme == "luxury" ? true : false;
}

themeToggler.addEventListener("click", () => {
  html.dataset.theme = html.dataset.theme == "light" ? "luxury" : "light";

  localStorage.setItem("theme", html.dataset.theme);
  themeToggler.checked = html.dataset.theme == "luxury" ? true : false;
});

const template = document.querySelector("template");
const productsList = document.getElementById("product-list");

products.forEach((product) => {
  const clone = template.content.cloneNode(true);

  const cardImg = clone.querySelector(".card-imge");
  const cardTitle = clone.querySelector(".card-title");
  const rating = clone.querySelector(".rating");
  const description = clone.querySelector(".description");
  const price = clone.querySelector(".price");
  const discountPrice = clone.querySelector(".discount-price");


  cardTitle.textContent = product.title;
  description.textContent = product.description;
  cardImg.src = product.thumbnail;
  price.textContent = product.price + " $";
  discountPrice.textContent = product.discountPercentage + " $";
  rating.textContent = "⭐ "+product.rating + " (938 sarhlar)";
  
  
  productsList.appendChild(clone);
});

const checkboxes = document.querySelectorAll('.checkbox');

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', (e) => {
    const productId = e.target.dataset.id;
    let liked = JSON.parse(localStorage.getItem('likedProducts')) || [];
    if (e.target.checked) {
      alert("Mahsulot qushildi")
      if (!liked.includes(productId)) {
        liked.push(productId);
      }
    } else {
      liked = liked.filter(id => id !== productId);
    }
    localStorage.setItem('likedProducts', JSON.stringify(liked));
  });
});

