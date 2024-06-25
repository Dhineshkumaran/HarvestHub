function add() {
    document.querySelector('#formal').style.display = 'block';
}

async function validate() {
    const name = document.getElementById('name').value;
    const pname = document.getElementById('pname').value
    const pdate = document.getElementById('pdate').value;
    const mdate = document.getElementById('mdate').value;
    const price = document.getElementById('price').value;
    if (name === "") {
        name_c = document.getElementById('changename').innerHTML = "Enter Something"
    }
    else if (/\d/.test(name)) {
        document.getElementById('changename').innerHTML = "Invalid username"
    }
    if (pname === "") {
        document.getElementById('changeproduct').innerHTML = "Enter Something"
    }
    else if (/\d/.test(pname)) {
        document.getElementById('changeproduct').innerHTML = "Invalid username"
    }
    var isCharacter = /^[a-zA-Z]+$/.test(price);
    if (price === "") {
        document.getElementById('pricechange').innerHTML = "Enter something"
    }
    else {
        const form = document.getElementById('form');
        const data = new FormData(form);
        try {
            const response = await fetch('/updatefarmer',{
                method:"POST",
                body:data
            })
            if(!response.ok){
                console.log('Error saving data to database');
            }
        }   catch(error){
            console.log('Error',error);
        }

        var newProductCard = document.createElement("div");
        newProductCard.className = "product-card";
        newProductCard.innerHTML = `
    <img src="slideone.jpg" alt="Product Image" class="product-image">
    <div class="product-info">
        <h2 class="product-title">${pname}</h2>
        <p>Former Name: ${name}</p>
        <span>Plantation Date: ${pdate}</span>
        <br>
        <span>Maturity Date: ${mdate}</span>
        <br>
        <span style="color:green">• Organic</span>
        <p class="product-price">Basic Bit $${price}</p>
        <button class="delete-button">Delete</button>
    </div>`;
        document.getElementById("product-container").appendChild(newProductCard);

        document.querySelector('#formal').style.display = 'none';
    }
    var deleteButton = newProductCard.querySelector(".delete-button");
    deleteButton.addEventListener("click", function () {
        newProductCard.remove();
    });
    console.log(name)
    console.log(pname)
    console.log(pdate)
    console.log(mdate)
    console.log(price)
}
