  $(document).ready(function() { 
		{%- assign current_variant = product.selected_or_first_available_variant -%}

		{%- assign jc_available = current_variant.available -%}
		{% if jc_available != true %}

		$('#jc-add-to-cart-btn').attr('disabled','disabled');	

		{% endif %}
	 });