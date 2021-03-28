// EXTERNAL VARIABLES
var burgerName = document.getElementById('name');
var btn = document.getElementById('button');
var ingredientsCheck = document.getElementsByClassName('ingredient-checkbox');
var screenPrice = document.getElementById('price');

// COUPONS
var coupon = document.getElementById('coupon');
var validCoupons = ['123456ABCD', '7890EFGH', '1029384756AZ', '123'];

// CALCULATE ON CLICK
btn.addEventListener('click', function() {

    // Burger name
    var burgerValue = (burgerName.value).trim();
    if (burgerValue.length === 0) {
        alert('Inserire nome del panino!');
    }else {

        // Update the price if ingredients are selected
        var price = 50;
        for (i = 0; i < ingredientsCheck.length; i++) {
            var ingredientChecked = ingredientsCheck[i];
            if (ingredientChecked.checked) {
                price += parseInt(ingredientChecked.value);
            }
        }

        // Coupon discount 20%
        var couponCode = coupon.value;
        for (i = 0; i < validCoupons.length; i++) {
            if (couponCode == validCoupons[i]) {
                price *= 0.8; 
            }
        }

        // Print the new-price on screen
        screenPrice.innerHTML = price.toFixed(2);
    }    
})