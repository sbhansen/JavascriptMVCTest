var _view = function(){
	var _root = this,
		_$marker,
		_template = ""
			+ "<li class='thumb'>"
			+ "	<a>"
			+ "		<img src='%%bilde%%'>"
			+ "		<span>%%navn%%</span>"
			+ "		<span>%%alder%% år, %%land%%</span>"
			+ " </a>"
			+ "</li>";
	
	var __construct = function(){
		_$marker = $("#googleMapMarker");
	};
	this.focusMapOnPosition = function( in_position ){
		var position = in_position;
		animateMarker( position );
	};
	this.updateMapCursorText = function( in_string ){
		_$marker.html( in_string );
	};
	this.setThumbFocus = function( in_id ){
		var id = in_id,
			$allThumbs = $(".thumb"),
			$targetThumb = $(".thumb[data-person-id='" + id + "']");
		
		$allThumbs.removeClass("active");
		$targetThumb.addClass("active");
		
	};
	this.changeTextDetails = function( in_details ){
		var details = in_details,
			$container = $("#textContainer");
		
		for( index in details ){
			var item = details[ index ],
				$target = $container.find( "." + index );
			if( $target.is("img") && index == "bilde"  ){
				$target.attr("src", item )
			}
			else {
				$target.html( item );
			}
		}
	};
	this.fillPageWithData = function( in_data ){
		var data = in_data,
			$targetParent = $("#thumbContainer"),
			index;
		for( index in data ){
			var item = data[ index ],
				$element = createElementFromItem( item );
			
			$element.attr( "data-person-id", item.id );
			$targetParent.append( $element );
		}
	};
	var createElementFromItem = function( in_item ){
		var template = _template,
			item = in_item,
			index;
		for( index in item ){
			var attribute = item[ index ],
				pattern = "%%" + index + "%%",
				flags = "g",
				regExp = new RegExp( pattern, flags );
			template = template.replace( regExp, attribute );
		};
		return $( template );
	};
	var animateMarker = function( in_position ){
		var position = in_position;
		_$marker
			.animate({
				top : position.y,
				left : position.x
			});
	};
	__construct();
};