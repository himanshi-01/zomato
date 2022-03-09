$( ".change" ).on("click", function() {
	if( $( "body" ).hasClass( "dark" )) {
		$( "body" ).removeClass( "dark" );
		$( ".change" ).text("off");
	} else {
		$( "body" ).addClass( "dark" );
		$( ".change" ).text("on");
	}
});
