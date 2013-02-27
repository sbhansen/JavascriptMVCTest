var _controller = function(){

	var _root = this;
	
	var __construct = function(){
		window.googleDriveModel = new _googleDriveModel(),
		window.googleMapModel = new _googleMapsModel(),
		window.view = new _view();
		
		console.log( _root );
		console.log( googleDriveModel );
		console.log( googleMapModel );
		console.log( view );
	};
	
	this.attachClickEvents = function(){
		$(".thumb").click( function(){
			var $clickedElement = $( this ),
				id = parseInt( $clickedElement.attr("data-person-id") );
			_root.renderViewWithDataFromId( id ); 
		});
	};
	this.fillPageWithData = function(){
		var defaultId = 0,
			data = googleDriveModel.getData(),
			newPosition = googleMapModel.returnCoordinatesFromId( defaultId );
		
		view.fillPageWithData( data );
		view.changeTextDetails( data[ defaultId ] );
		view.setThumbFocus( defaultId );
		view.focusMapOnPosition( newPosition );
		view.updateMapCursorText( data[ defaultId ].by + ", " + data[ defaultId ].land );
	};
	this.renderViewWithDataFromId = function( in_id ){
		var id = in_id;
		
		newPosition = googleMapModel.returnCoordinatesFromId( id ),
		textDetails = googleDriveModel.getDetailsForEntryId( id );
		
		view.focusMapOnPosition( newPosition );
		view.updateMapCursorText( textDetails.by + ", " + textDetails.land );
		view.setThumbFocus( id );
		view.changeTextDetails( textDetails );	
		
	};
	__construct();
};