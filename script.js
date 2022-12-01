const addBtn = document.querySelector(".add-button");
const imageContainer = document.querySelector("#box");
const btns = document.querySelectorAll(".btn");

let arr = [];

function addItem() {
  let url = document.querySelector("#url").value;
  let type = document.querySelector("#category").value;
  let alert = document.querySelector('main > h3');
  if (url!= "") {
    arr.push({
        url: url,
        type: type,
      });
    
      imageContainer.innerHTML += 
      ` <div class = "box-img ${type}">
        <img src = "${url}" alt = "">
        <button class = "delete"> Delete </button>
        </div>`;
  } else {
    alert.innerText = "Please enter the URL";
    alert.style.color = "Red"
    setTimeout(() => {
        alert.innerText = "Add Product"
        alert.style.color = "White"
    }, 2000);

  }
}

// const delteBtn = document.querySelectorAll('.delete'); --->  wrong
//  we cannot  select dynamically  created  element

function deleteItem(e) {
  if (e.target.classList.contains("delete")) {
    let imgSrc = e.target.previousElementSibling.src;
    let deleteIndex = arr.findIndex((item) => item.url === imgSrc);
    arr.splice(deleteIndex, 1);
    e.target.parentNode.remove();
  }
}

function hideShowImages(e) {

  let imgs = document.querySelectorAll(".box-img");
  let filter = e.target.dataset.filter;

  imgs.forEach((item) => {
    if (filter === "all") {
      item.style.display = "flex";
    } else if (item.classList.contains(filter)) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
}

imageContainer.addEventListener("click", deleteItem);

addBtn.addEventListener("click", addItem);

btns.forEach((bt) => {
  bt.addEventListener("click", hideShowImages);
});
