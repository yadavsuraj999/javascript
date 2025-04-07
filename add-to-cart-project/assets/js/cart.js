let cartarr = JSON.parse(localStorage.getItem("cartArray")) || []
let cart = document.getElementById("cart-item")
let counter = document.getElementById("counter")

console.log(cartarr.length);

console.log(counter);

function addQuantity(idx, value) {
    cartarr[idx].quantity += value;

    if (cartarr[idx].quantity <= 0) {
        deleteproduct(idx)
    } else {
        localStorage.setItem("cartArray", JSON.stringify(cartarr));
    }
    disPlayCart()
}

function deleteproduct(idx) {
    cartarr.splice(idx, 1);
    localStorage.setItem("cartArray", JSON.stringify(cartarr));
    disPlayCart()
}

function disPlayCart() {
    cartarr = JSON.parse(localStorage.getItem("cartArray")) || []
    counter.innerHTML = cartarr.length;
    if (cartarr.length == 0) {

        document.getElementById("emty-cart").innerHTML = `
        <div>
<img src="./assets/image/Add to Cart-rafiki.png" alt="" class="img-fluid" style="max-width: 600px;">
</div>
<button>
            return to shop
        </button>`
        cart.style.textAlign = "center"
        document.getElementById("totalamount").innerHTML = 0
        return;
    }
    let total = 0;
    cart.innerHTML = ""
    cartarr.forEach((item, idx) => {
        let sum = item.price * item.quantity;
        total += item.price * item.quantity;
        cart.innerHTML += `<tr>
                                <td>
                                    <img src="${item.image}" alt="Infinite Necklace" class="img-fluid" style="max-width: 100px;">
                                </td>
                                <td>
                                    <strong class="fs-5">${item.product}</strong>
                                </td>
                                <td>
                                    <span class="fs-5">$${item.price}</span>
                                </td>
                                <td>
                                    <div class="d-flex justify-content-center align-items-center gap-2">
                                        <button class="btn btn-outline-secondary btn-sm px-2" onclick="addQuantity(${idx},-1)">
                                            <i class="ri-arrow-left-s-line"></i>
                                        </button>
                                        <span class="border px-3 py-1 rounded bg-light">${item.quantity}</span>
                                        <button class="btn btn-outline-secondary btn-sm px-2" onclick="addQuantity(${idx},1)">
                                            <i class="ri-arrow-right-s-line"></i>
                                        </button>
                                    </div>
                                </td>
                                <td>
                                    <span class="fs-5">$${sum}</span>
                                </td>
                                <td>
                                    <button class="btn btn-outline-danger btn-sm" onclick="deleteproduct(${idx})">
                                        <i class="ri-delete-bin-6-line"></i>
                                    </button>
                                </td>
                            </tr>`
    })
    document.getElementById("totalamount").innerHTML = `$${total}`
    document.getElementById("totalamount").style.color = "green"
}

disPlayCart()
