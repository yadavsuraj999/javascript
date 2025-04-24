let arr = [
    { name: "car", image: "./assets/image/download (1).jfif" },
    { name: "truck", image: "./assets/image/download (5).jfif" },
    { name: "bike", image: "./assets/image/images (1).jfif" },
    { name: "car", image: "./assets/image/download (2).jfif" },
    { name: "truck", image: "./assets/image/download (6).jfif" },
    { name: "bike", image: "./assets/image/images (2).jfif" },
    { name: "car", image: "./assets/image/download (3).jfif" },
    { name: "truck", image: "./assets/image/download (7).jfif" },
    { name: "bike", image: "./assets/image/images.jfif" },
    { name: "car", image: "./assets/image/images (3).jfif" },
    { name: "truck", image: "./assets/image/download.jfif" },
    { name: "bike", image: "./assets/image/download (4).jfif" },
];

let card = document.getElementById("card");
let carBtn = document.getElementById("car");
let truckBtn = document.getElementById("truck");
let bikeBtn = document.getElementById("bike");
let all = document.getElementById("all");


function renderCards(type) {
    card.innerHTML = "";
    let filteredArr = type ? arr.filter(item => item.name === type) : arr;
    
    filteredArr.forEach(element => {
        card.innerHTML += `
            <div class="col-3">
                <div>
                    <img src="${element.image}" alt="${element.name}">
                </div>
            </div>`;
    });
}


renderCards();


carBtn.addEventListener("click", () => renderCards("car"));
truckBtn.addEventListener("click", () => renderCards("truck"));
bikeBtn.addEventListener("click", () => renderCards("bike"));
all.addEventListener("click", () => renderCards());
