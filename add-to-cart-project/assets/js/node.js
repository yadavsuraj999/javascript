let cartarr = [{
    id: 1,
    image: "./assets/image/22-205x195.jpg",
    product: "Infinite Necklace",
    price: 299,
}, {
    id: 2,
    image: "./assets/image/15-205x195.jpg",
    product: "Angel City Ring",
    price: 325,
}, {
    id: 3,
    image: "./assets/image/16-205x195.jpg",
    product: "High Five Ring",
    price: 365,
}, {
    id: 4,
    image: "./assets/image/30-205x195.jpg",
    product: "Mojito Ring",
    price: 758,
}, {
    id: 5,
    image: "./assets/image/19-205x195.jpg",
    product: "Le Louvre Necklace",
    price: 10212,
}, {
    id: 6,
    image: "./assets/image/14-205x195.jpg",
    product: "Mojito Ring",
    price: 2546,
}, {
    id: 7,
    image: "./assets/image/3-205x195.jpg",
    product: "Curtain Call Necklace",
    price: 5465,
}, {
    id: 8,
    image: "./assets/image/17-205x195.jpg",
    product: "Moments Necklace",
    price: 6985,
}, {
    id: 9,
    image: "./assets/image/20-205x195.jpg",
    product: "Lapis Ring",
    price: 7898,
}
]
let menu = document.getElementById("menu-btn")
let menubox = document.getElementById("menu")
let row = document.getElementById("row")
let addcart = document.getElementById("addcart")
let counter = document.getElementById("counter")
let cartArr = JSON.parse(localStorage.getItem("cartArray")) || []
counter.innerHTML = cartArr.length;

function addToCart(productid) {
    cartArr = JSON.parse(localStorage.getItem("cartArray")) || []
    let item = cartarr.find((obj) => obj.id == productid);

    let productIdx = cartArr.findIndex((obj) => productid == obj.id);


    if (productIdx == -1) {
        item.quantity = 1;
        cartArr.push(item);
        Swal.fire({
            title: "Added To Cart",
            icon: "success",
            position: "top-start",
            showConfirmButton: false,
            timer: 1000,
            toast: true
        });
    } else {
        Swal.fire({
            title: "Already Added To Cart",
            icon: "warning",
            position: "top-start",
            showConfirmButton: false,
            timer: 1000,
            toast: true
        });
    }

    localStorage.setItem("cartArray", JSON.stringify(cartArr));

    let totalQuantity = cartArr.length;
    counter.innerHTML = totalQuantity;
}

menu.addEventListener("click", function () {
    menubox.classList.toggle("d-none");
})



cartarr.forEach((product, idx) => {
    row.innerHTML += `<div class="border main-box box-1 col-md-3 col-12-center p-3" id="1">
                    <div class="border-bottom box-2">
                        <img src="${product.image}" alt="" class="image" width="100%">
                    </div>
                    <h4 class="font">
                        ${product.product}
                    </h4>
                    <p class="fw-bold py-3">
                        $${product.price}
                    </p>
                    <button class="btn-1" onclick="addToCart(${product.id})">
                        <span id="addcart">Add To Cart</span>
                    </button>
                </div>`
})