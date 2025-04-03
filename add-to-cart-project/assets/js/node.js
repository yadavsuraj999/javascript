let menu = document.getElementById("menu-btn")
let menubox = document.getElementById("menu")
let row = document.getElementById("row")

menu.addEventListener("click", function () {
    menubox.classList.toggle("d-none");
})

let cartarr = [{
    id: 0,
    image: "./assets/image/22-205x195.jpg",
    product: "Infinite Necklace",
    price: 20584,
}, {
    id: 1,
    image: "./assets/image/15-205x195.jpg",
    product: "Angel City Ring",
    price: 10420,
}, {
    id: 2,
    image: "./assets/image/16-205x195.jpg",
    product: "High Five Ring",
    price: 29894,
}, {
    id: 3,
    image: "./assets/image/30-205x195.jpg",
    product: "Mojito Ring",
    price: 51418,
}, {
    id: 4,
    image: "./assets/image/19-205x195.jpg",
    product: "Le Louvre Necklace",
    price: 51418,
}, {
    id: 5,
    image: "./assets/image/14-205x195.jpg",
    product: "Mojito Ring",
    price: 9395,
}, {
    id: 6,
    image: "./assets/image/3-205x195.jpg",
    product: "Curtain Call Necklace",
    price: 9395,
}, {
    id: 7,
    image: "./assets/image/17-205x195.jpg",
    product: "Lapis Ring",
    price: 9395,
}
]

