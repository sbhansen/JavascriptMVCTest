var _googleMapsModel = function(){
	
	var dummyCoordinate = function( in_axis ){
		var axis = in_axis || "x";
		switch( axis ){
			case "x":
				return Math.random() * 900;
			case "y":
				return Math.random() * 450;
		};
	};
	this.returnCoordinatesFromId = function( in_id ){
		var id = in_id || false,
			coordinates = {
				x : dummyCoordinate( "x" ),
				y : dummyCoordinate( "y" )
			};
		return coordinates;
	};
};