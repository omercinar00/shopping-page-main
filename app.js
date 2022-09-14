const menu = document.querySelector('.hamb')

menu.addEventListener('click',(e)=>{
if(e.target.classList.contains('hambclick')){
    e.target.classList.remove("hambclick");
}else{
    e.target.classList.add("hambclick");
}
})

const artı = document.querySelector(".artı");
const eksi = document.querySelector(".eksi");
const adet = document.querySelector(".adet");
const leftside = document.querySelector(".leftside");


leftside.addEventListener('click',(e)=>{
    let sayaç = 1
    if(e.target.classList.contains('eksi') && adet.innerText > 1 ){
        --adet.innerText;
    }
    else if (e.target.classList.contains("artı")){
        ++adet.innerText;
    };
})

const sepetekle = document.querySelector("#sepetekle");
const sepettekiler = document.querySelector('.sepettekiler');

sepetekle.addEventListener('click', () => {
    sepettekiler.innerHTML=`<img src="./images/image-product-1-thumbnail.jpg" alt="" height="50px">
                  <div>
                    <p>Fall Limited Sneakers</p>
                    <p>$125.00 x ${adet.innerText} <b>$${125*adet.innerText}</b></p>
                  </div>
                  <img class="sepetsil" src="./images/icon-delete.svg" alt="" height="25px">

                </div>
                <button>

                </button>`
const sepetsil = document.querySelector(".sepetsil");

sepetsil.addEventListener("click", (e) => {
  console.log(e.target);
  sepettekiler.innerHTML = ` <p>Your Cart is empty !</p>`;
});
});






