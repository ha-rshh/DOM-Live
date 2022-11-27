

const inputForm = document.getElementById("input-form");

inputForm.addEventListener("submit", (event) => {
  event.preventDefault();
    const URL = document.getElementById("url").value;
    const productsList = document.querySelector('.products')

    if(URL === ""){
        //    alert('no url present');
        console.log('hey')
    } else {
        let newHTML = `<div class="item">
        <img src="" alt="Products" class="image">
        <button id= "delete-btn">Delete</button>
        </div>`;
        const img = document.querySelector('.image')
        productsList.innerHTML+= newHTML;
        img.src= URL;
        // const type = document.querySelector('#category')
        // console.log(type)
        // img.classList = type.value;

    }
});
