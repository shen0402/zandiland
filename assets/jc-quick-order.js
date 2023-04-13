function updatePrice($addToCartForm) {
    var price = $addToCartForm.data('product-price');
    var qty = $addToCartForm.find('.jc-js-quantity-selector').val();
    var item_total_price = price * qty / 100;
    item_total_price = item_total_price.toFixed(2);
    $addToCartForm.find('.money-inner-total').text(item_total_price);
}

$(document).on('click', '.jc-quantity-btn-down', function(e){
    e.preventDefault();
    var input = $(this).closest('.jc-product-quantity-wrapper').find('.jc-js-quantity-selector');
    var qty = Number(input.val()) - 6;
    if (qty >= 0) {
        input.val(qty);
    }
    updatePrice($(this).closest('.quick-order-form'));
});

$(document).on('click', '.jc-quantity-btn-up', function(e){
    e.preventDefault();
    var input = $(this).closest('.jc-product-quantity-wrapper').find('.jc-js-quantity-selector');
    var qty = Number(input.val()) + 6;
    input.val(qty);
    updatePrice($(this).closest('.quick-order-form'));
});