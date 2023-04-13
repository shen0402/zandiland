$(document).on('click', '.jc-quantity-btn-down', function(e){
    e.preventDefault();
    var input = $(this).closest('.jc-product-quantity-wrapper').find('.jc-js-quantity-selector');
    var qty = Number(input.val()) - 6;
    if (qty >= 0) {
        input.val(qty);
    }
});

$(document).on('click', '.jc-quantity-btn-up', function(e){
    e.preventDefault();
    var input = $(this).closest('.jc-product-quantity-wrapper').find('.jc-js-quantity-selector');
    var qty = Number(input.val()) + 6;
    input.val(qty);
});