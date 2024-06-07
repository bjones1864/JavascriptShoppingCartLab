let cart = [];

function AddToCart(name, price, quantity)
{
    console.log(quantity);
    for(let i = 0; i < quantity; i++)
    {
        cart.push({Name: name, Price: price});
    }
}

function CheckOut()
{
    let total = 0;
    let totalString = [];
    cart.forEach((c) =>
    {
        let itemTotal = "Item: " + c.Name + " Price: $" + c.Price;
        console.log(itemTotal);
        total += c.Price;
        totalString.push(itemTotal);
    });
    preTotal = "Total: $" + (Math.round(total * 100) / 100);
    console.log(preTotal);
    totalString.push(preTotal);

    finalTotal = "Grand Total: $" + (Math.round(total * 1.06 * 100) / 100);
    console.log(finalTotal);
    totalString.push(finalTotal);
    
    totalString = totalString.join("<br>");
    document.getElementById("total").innerHTML = totalString;
}