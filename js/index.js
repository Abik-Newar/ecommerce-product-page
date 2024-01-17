let atcModal = document.getElementById("atcModal");
let shopCart = document.getElementById("shopCart");
const mainImg = document.getElementById("mainImg");
const lightBox = document.getElementById("lightBox");
const imgNext = document.getElementById("imgNext");
const imgMenu1 = document.getElementById("imgMenu1");
const imgMenu2 = document.getElementById("imgMenu2");
const imgMenu3 = document.getElementById("imgMenu3");
const imgMenu4 = document.getElementById("imgMenu4");
const otherImg1 = document.getElementsByClassName("otherImg1");
const otherImg2 = document.getElementsByClassName("otherImg2");
const otherImg3 = document.getElementsByClassName("otherImg3");
const otherImg4 = document.getElementsByClassName("otherImg4");
const atcBtn = document.getElementById("atcBtn");
const cartModal = document.getElementById("cartModal");
const noItems = document.getElementById("noItems");
const checkOut = document.getElementById("checkOut");
const totalPrice = document.getElementById("totalPrice");
const modalQnty = document.getElementById("modalQnty");
const plus = document.getElementById("plusQuan");
const minus = document.getElementById("minusQuan");
let quan = document.getElementById("quantity");
let quantity = document.getElementById("quantity").innerHTML;
const deleteBtn = document.getElementById("deleteBtn");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const changeImage = document.getElementById("changeImage")

shopCart.onclick = function() {
    atcModal.classList.toggle("atcModal1");
}


// change img start------------



imgMenu1.onclick = function() {
    imgNext.src = "images/image-product-1.jpg"
}

imgMenu2.onclick = function() {
    imgNext.src = "images/image-product-2.jpg"
}
imgMenu3.onclick = function() {
    imgNext.src = "images/image-product-3.jpg"
}
imgMenu4.onclick = function() {
    imgNext.src = "images/image-product-4.jpg"
}

// images change End-----------------


// increment 



quantity = Number(quantity);

plus.onclick = function(){
    quan.innerHTML = quantity ++;
}

minus.onclick = function(){
    quan.innerHTML = quantity --;
}

// increament endss





atcBtn.onclick = function(){
    cartModal.style.display = "flex";
    noItems.style.display = "none";
    checkOut.style.display = "flex"


    let finalQuantity = document.getElementById("quantity").innerHTML;
    modalQnty.innerHTML = finalQuantity;

    totalPrice.innerHTML = 125 * finalQuantity;



}




    deleteBtn.onclick = function(){
    cartModal.style.display = "none";
    noItems.style.display = "block";
    checkOut.style.display = "none"
}


mainImg.ondblclick = function(){
    lightBox.style.display = "flex"
}


const closeLightBox = document.getElementById("closeLightBox");

closeLightBox.onclick = function(){
    lightBox.style.display = "none";
}






let currentIndex = 1;

nextBtn.onclick = function() {
    currentIndex++;
    if (currentIndex > 4) {
        currentIndex = 1;
    }
    changeImage.src = "images/image-product-" + currentIndex + ".jpg";
}

prevBtn.onclick = function() {
    currentIndex--;
    if (currentIndex < 1) {
        currentIndex = 4;
    }
    changeImage.src = "images/image-product-" + currentIndex + ".jpg";
}


