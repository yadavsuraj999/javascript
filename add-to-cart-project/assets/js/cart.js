let cart = document.getElementById("cart-item")
let cartarr = JSON.parse(localStorage.getItem("cartArray")) || [] 


cartarr.forEach((item, idx)=>{
    cart.innerHTML += `<div class="table-responsive">
                <table class="table text-center align-middle">
                    
                    <tbody>
                        <tr>
                            <td>
                                <img src="${item.image}" alt="Infinite Necklace" class="img-fluid" style="max-width: 100px;">
                            </td>
                            <td>
                                <strong class="fs-5">${item.product}</strong>
                            </td>
                            <td>
                                <span class="fs-5">${item.price}</span>
                            </td>
                            <td>
                                <div class="d-flex justify-content-center align-items-center gap-2">
                                    <button class="btn btn-outline-secondary btn-sm px-2">
                                        <i class="ri-arrow-left-s-line"></i>
                                    </button>
                                    <span class="border px-3 py-1 rounded bg-light">1</span>
                                    <button class="btn btn-outline-secondary btn-sm px-2">
                                        <i class="ri-arrow-right-s-line"></i>
                                    </button>
                                </div>
                            </td>
                            <td>
                                <span class="fs-5">$15.00</span>
                            </td>
                            <td>
                                <button class="btn btn-outline-danger btn-sm">
                                    <i class="ri-delete-bin-6-line"></i>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>`
})