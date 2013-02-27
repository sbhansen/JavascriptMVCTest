var _googleDriveModel = function(){
	var _root = this,
		_connectionString = "",
		_data;
	
	var __construct = function(){
		_data = getDataFromSource();
	};
	var getDataFromSource = function(){
		var data = getDummyData();
		data = addIndexToDataset( data );
		return data;
	};
	var addIndexToDataset = function( in_dataset ){
		var dataset = in_dataset;
		for( index in dataset ){
			var current = dataset[ index ];
			current.id = index;
		}
		return dataset;
	};
	var getDummyData = function(){
		var dummyData = [
		 		{
					"navn": "Stephen Petrie",
					"alder": "22",
					"land": "England",
					"by": "Cambridge",
					"tittle": "- Det blir vanskelig etter utdannelsen",
					"bilde": "http://ap.mnocdn.no/incoming/article7128427.ece/ALTERNATES/w980c43/afp000483128.jpg?updated=220220130924",
					"ingress": "L�rem ipsum dolor sit amet, sit te erat accusam, c�usae laoreet adipisci ei usu, nec delectus men�ndri eloquenti�m �d. Mei �lii sanctus ex, cum id ridens intellegat, at per gr�eco.",
					"body": "Et vix clit� time�m voluptu�, docendi corrumpit disput�tioni his at. Ad nec tale habemus tibique, cu solut� l�tine voluptatum sea! Consul dolores intelleg�m usu no, duis illum elitr his ex. Eam saperet eligendi in, e�m ei alia vide porr�, �t iracundia complectitur duo! Propriae consectetuer usu ex. Ex mea hinc zril assentior, ea dic�m accus�mus cum, eleifend su�vit�te vel ea. Nonumy efficiendi cu mei, h�rum ponderum vel eu. Et sit agam �ccumsan, �dmodum qu�esti� mel ne! Nec vide su�vitate an, te munere anim�l explic�ri sea! �n est sole�t commodo discere, ut nusquam �ccusat� dissenti�s nec! Commod� v�lumus te nec. Quo at aliquid explicari! Se� te everti mediocritatem? Id eum consulatu interesset. Ut sed gr�ece n�numes similique! Qui doming similique posidonium at, eius tr�ct�tos the�phrastus eos te. Et nec �li� porro script�rem, per ex cetero s�dipscing? Nam omnis fuisset qu�estio ea, vis te melius m�l�rum molestie. In ali� nonumy voluptatum sea, eu sed sale mundi concept�m. Dic� errem elab�raret te nec, id �ssum choro sit. Sit solet nusquam suscipi�ntur eu, ad�lescens scriptorem qui at. E� eum meis atqui diceret, ut ius brute zril eleifend, mel te utinam ubique dolores."
				},
				{
					"navn": "Bo Jakobsen",
					"alder": "27",
					"land": "Danmark",
					"by": "Kj�benhavn",
					"tittle": "- Det blir vanskelig etter utdannelsen",
					"bilde": "http://ap.mnocdn.no/incoming/article7128427.ece/ALTERNATES/w980c43/afp000483128.jpg?updated=220220130924",
					"ingress": "L�rem ipsum dolor sit amet, sit te erat accusam, c�usae laoreet adipisci ei usu, nec delectus men�ndri eloquenti�m �d. Mei �lii sanctus ex, cum id ridens intellegat, at per gr�eco.",
					"body": "Et vix clit� time�m voluptu�, docendi corrumpit disput�tioni his at. Ad nec tale habemus tibique, cu solut� l�tine voluptatum sea! Consul dolores intelleg�m usu no, duis illum elitr his ex. Eam saperet eligendi in, e�m ei alia vide porr�, �t iracundia complectitur duo! Propriae consectetuer usu ex. Ex mea hinc zril assentior, ea dic�m accus�mus cum, eleifend su�vit�te vel ea. Nonumy efficiendi cu mei, h�rum ponderum vel eu. Et sit agam �ccumsan, �dmodum qu�esti� mel ne! Nec vide su�vitate an, te munere anim�l explic�ri sea! �n est sole�t commodo discere, ut nusquam �ccusat� dissenti�s nec! Commod� v�lumus te nec. Quo at aliquid explicari! Se� te everti mediocritatem? Id eum consulatu interesset. Ut sed gr�ece n�numes similique! Qui doming similique posidonium at, eius tr�ct�tos the�phrastus eos te. Et nec �li� porro script�rem, per ex cetero s�dipscing? Nam omnis fuisset qu�estio ea, vis te melius m�l�rum molestie. In ali� nonumy voluptatum sea, eu sed sale mundi concept�m. Dic� errem elab�raret te nec, id �ssum choro sit. Sit solet nusquam suscipi�ntur eu, ad�lescens scriptorem qui at. E� eum meis atqui diceret, ut ius brute zril eleifend, mel te utinam ubique dolores."
				},
				{
					"navn": "Linda Johansson",
					"alder": "19",
					"land": "Sverige",
					"by": "Malm�",
					"tittle": "- Det blir vanskelig etter utdannelsen",
					"bilde": "http://ap.mnocdn.no/incoming/article7128427.ece/ALTERNATES/w980c43/afp000483128.jpg?updated=220220130924",
					"ingress": "L�rem ipsum dolor sit amet, sit te erat accusam, c�usae laoreet adipisci ei usu, nec delectus men�ndri eloquenti�m �d. Mei �lii sanctus ex, cum id ridens intellegat, at per gr�eco.",
					"body": "Et vix clit� time�m voluptu�, docendi corrumpit disput�tioni his at. Ad nec tale habemus tibique, cu solut� l�tine voluptatum sea! Consul dolores intelleg�m usu no, duis illum elitr his ex. Eam saperet eligendi in, e�m ei alia vide porr�, �t iracundia complectitur duo! Propriae consectetuer usu ex. Ex mea hinc zril assentior, ea dic�m accus�mus cum, eleifend su�vit�te vel ea. Nonumy efficiendi cu mei, h�rum ponderum vel eu. Et sit agam �ccumsan, �dmodum qu�esti� mel ne! Nec vide su�vitate an, te munere anim�l explic�ri sea! �n est sole�t commodo discere, ut nusquam �ccusat� dissenti�s nec! Commod� v�lumus te nec. Quo at aliquid explicari! Se� te everti mediocritatem? Id eum consulatu interesset. Ut sed gr�ece n�numes similique! Qui doming similique posidonium at, eius tr�ct�tos the�phrastus eos te. Et nec �li� porro script�rem, per ex cetero s�dipscing? Nam omnis fuisset qu�estio ea, vis te melius m�l�rum molestie. In ali� nonumy voluptatum sea, eu sed sale mundi concept�m. Dic� errem elab�raret te nec, id �ssum choro sit. Sit solet nusquam suscipi�ntur eu, ad�lescens scriptorem qui at. E� eum meis atqui diceret, ut ius brute zril eleifend, mel te utinam ubique dolores."
				},
				{
					"navn": "Linda Johansson",
					"alder": "19",
					"land": "Sverige",
					"by": "Malm�",
					"tittle": "- Det blir vanskelig etter utdannelsen",
					"bilde": "http://ap.mnocdn.no/incoming/article7128427.ece/ALTERNATES/w980c43/afp000483128.jpg?updated=220220130924",
					"ingress": "L�rem ipsum dolor sit amet, sit te erat accusam, c�usae laoreet adipisci ei usu, nec delectus men�ndri eloquenti�m �d. Mei �lii sanctus ex, cum id ridens intellegat, at per gr�eco.",
					"body": "Et vix clit� time�m voluptu�, docendi corrumpit disput�tioni his at. Ad nec tale habemus tibique, cu solut� l�tine voluptatum sea! Consul dolores intelleg�m usu no, duis illum elitr his ex. Eam saperet eligendi in, e�m ei alia vide porr�, �t iracundia complectitur duo! Propriae consectetuer usu ex. Ex mea hinc zril assentior, ea dic�m accus�mus cum, eleifend su�vit�te vel ea. Nonumy efficiendi cu mei, h�rum ponderum vel eu. Et sit agam �ccumsan, �dmodum qu�esti� mel ne! Nec vide su�vitate an, te munere anim�l explic�ri sea! �n est sole�t commodo discere, ut nusquam �ccusat� dissenti�s nec! Commod� v�lumus te nec. Quo at aliquid explicari! Se� te everti mediocritatem? Id eum consulatu interesset. Ut sed gr�ece n�numes similique! Qui doming similique posidonium at, eius tr�ct�tos the�phrastus eos te. Et nec �li� porro script�rem, per ex cetero s�dipscing? Nam omnis fuisset qu�estio ea, vis te melius m�l�rum molestie. In ali� nonumy voluptatum sea, eu sed sale mundi concept�m. Dic� errem elab�raret te nec, id �ssum choro sit. Sit solet nusquam suscipi�ntur eu, ad�lescens scriptorem qui at. E� eum meis atqui diceret, ut ius brute zril eleifend, mel te utinam ubique dolores."
				},
				{
					"navn": "Linda Johansson",
					"alder": "19",
					"land": "Sverige",
					"by": "Malm�",
					"tittle": "- Det blir vanskelig etter utdannelsen",
					"bilde": "http://ap.mnocdn.no/incoming/article7128427.ece/ALTERNATES/w980c43/afp000483128.jpg?updated=220220130924",
					"ingress": "L�rem ipsum dolor sit amet, sit te erat accusam, c�usae laoreet adipisci ei usu, nec delectus men�ndri eloquenti�m �d. Mei �lii sanctus ex, cum id ridens intellegat, at per gr�eco.",
					"body": "Et vix clit� time�m voluptu�, docendi corrumpit disput�tioni his at. Ad nec tale habemus tibique, cu solut� l�tine voluptatum sea! Consul dolores intelleg�m usu no, duis illum elitr his ex. Eam saperet eligendi in, e�m ei alia vide porr�, �t iracundia complectitur duo! Propriae consectetuer usu ex. Ex mea hinc zril assentior, ea dic�m accus�mus cum, eleifend su�vit�te vel ea. Nonumy efficiendi cu mei, h�rum ponderum vel eu. Et sit agam �ccumsan, �dmodum qu�esti� mel ne! Nec vide su�vitate an, te munere anim�l explic�ri sea! �n est sole�t commodo discere, ut nusquam �ccusat� dissenti�s nec! Commod� v�lumus te nec. Quo at aliquid explicari! Se� te everti mediocritatem? Id eum consulatu interesset. Ut sed gr�ece n�numes similique! Qui doming similique posidonium at, eius tr�ct�tos the�phrastus eos te. Et nec �li� porro script�rem, per ex cetero s�dipscing? Nam omnis fuisset qu�estio ea, vis te melius m�l�rum molestie. In ali� nonumy voluptatum sea, eu sed sale mundi concept�m. Dic� errem elab�raret te nec, id �ssum choro sit. Sit solet nusquam suscipi�ntur eu, ad�lescens scriptorem qui at. E� eum meis atqui diceret, ut ius brute zril eleifend, mel te utinam ubique dolores."
				},
				{
					"navn": "Linda Johansson",
					"alder": "19",
					"land": "Sverige",
					"by": "Malm�",
					"tittle": "- Det blir vanskelig etter utdannelsen",
					"bilde": "http://ap.mnocdn.no/incoming/article7128427.ece/ALTERNATES/w980c43/afp000483128.jpg?updated=220220130924",
					"ingress": "L�rem ipsum dolor sit amet, sit te erat accusam, c�usae laoreet adipisci ei usu, nec delectus men�ndri eloquenti�m �d. Mei �lii sanctus ex, cum id ridens intellegat, at per gr�eco.",
					"body": "Et vix clit� time�m voluptu�, docendi corrumpit disput�tioni his at. Ad nec tale habemus tibique, cu solut� l�tine voluptatum sea! Consul dolores intelleg�m usu no, duis illum elitr his ex. Eam saperet eligendi in, e�m ei alia vide porr�, �t iracundia complectitur duo! Propriae consectetuer usu ex. Ex mea hinc zril assentior, ea dic�m accus�mus cum, eleifend su�vit�te vel ea. Nonumy efficiendi cu mei, h�rum ponderum vel eu. Et sit agam �ccumsan, �dmodum qu�esti� mel ne! Nec vide su�vitate an, te munere anim�l explic�ri sea! �n est sole�t commodo discere, ut nusquam �ccusat� dissenti�s nec! Commod� v�lumus te nec. Quo at aliquid explicari! Se� te everti mediocritatem? Id eum consulatu interesset. Ut sed gr�ece n�numes similique! Qui doming similique posidonium at, eius tr�ct�tos the�phrastus eos te. Et nec �li� porro script�rem, per ex cetero s�dipscing? Nam omnis fuisset qu�estio ea, vis te melius m�l�rum molestie. In ali� nonumy voluptatum sea, eu sed sale mundi concept�m. Dic� errem elab�raret te nec, id �ssum choro sit. Sit solet nusquam suscipi�ntur eu, ad�lescens scriptorem qui at. E� eum meis atqui diceret, ut ius brute zril eleifend, mel te utinam ubique dolores."
				},
				{
					"navn": "Linda Johansson",
					"alder": "19",
					"land": "Sverige",
					"by": "Malm�",
					"tittle": "- Det blir vanskelig etter utdannelsen",
					"bilde": "http://ap.mnocdn.no/incoming/article7128427.ece/ALTERNATES/w980c43/afp000483128.jpg?updated=220220130924",
					"ingress": "L�rem ipsum dolor sit amet, sit te erat accusam, c�usae laoreet adipisci ei usu, nec delectus men�ndri eloquenti�m �d. Mei �lii sanctus ex, cum id ridens intellegat, at per gr�eco.",
					"body": "Et vix clit� time�m voluptu�, docendi corrumpit disput�tioni his at. Ad nec tale habemus tibique, cu solut� l�tine voluptatum sea! Consul dolores intelleg�m usu no, duis illum elitr his ex. Eam saperet eligendi in, e�m ei alia vide porr�, �t iracundia complectitur duo! Propriae consectetuer usu ex. Ex mea hinc zril assentior, ea dic�m accus�mus cum, eleifend su�vit�te vel ea. Nonumy efficiendi cu mei, h�rum ponderum vel eu. Et sit agam �ccumsan, �dmodum qu�esti� mel ne! Nec vide su�vitate an, te munere anim�l explic�ri sea! �n est sole�t commodo discere, ut nusquam �ccusat� dissenti�s nec! Commod� v�lumus te nec. Quo at aliquid explicari! Se� te everti mediocritatem? Id eum consulatu interesset. Ut sed gr�ece n�numes similique! Qui doming similique posidonium at, eius tr�ct�tos the�phrastus eos te. Et nec �li� porro script�rem, per ex cetero s�dipscing? Nam omnis fuisset qu�estio ea, vis te melius m�l�rum molestie. In ali� nonumy voluptatum sea, eu sed sale mundi concept�m. Dic� errem elab�raret te nec, id �ssum choro sit. Sit solet nusquam suscipi�ntur eu, ad�lescens scriptorem qui at. E� eum meis atqui diceret, ut ius brute zril eleifend, mel te utinam ubique dolores."
				},
				{
					"navn": "Linda Johansson",
					"alder": "19",
					"land": "Sverige",
					"by": "Malm�",
					"tittle": "- Det blir vanskelig etter utdannelsen",
					"bilde": "http://ap.mnocdn.no/incoming/article7128427.ece/ALTERNATES/w980c43/afp000483128.jpg?updated=220220130924",
					"ingress": "L�rem ipsum dolor sit amet, sit te erat accusam, c�usae laoreet adipisci ei usu, nec delectus men�ndri eloquenti�m �d. Mei �lii sanctus ex, cum id ridens intellegat, at per gr�eco.",
					"body": "Et vix clit� time�m voluptu�, docendi corrumpit disput�tioni his at. Ad nec tale habemus tibique, cu solut� l�tine voluptatum sea! Consul dolores intelleg�m usu no, duis illum elitr his ex. Eam saperet eligendi in, e�m ei alia vide porr�, �t iracundia complectitur duo! Propriae consectetuer usu ex. Ex mea hinc zril assentior, ea dic�m accus�mus cum, eleifend su�vit�te vel ea. Nonumy efficiendi cu mei, h�rum ponderum vel eu. Et sit agam �ccumsan, �dmodum qu�esti� mel ne! Nec vide su�vitate an, te munere anim�l explic�ri sea! �n est sole�t commodo discere, ut nusquam �ccusat� dissenti�s nec! Commod� v�lumus te nec. Quo at aliquid explicari! Se� te everti mediocritatem? Id eum consulatu interesset. Ut sed gr�ece n�numes similique! Qui doming similique posidonium at, eius tr�ct�tos the�phrastus eos te. Et nec �li� porro script�rem, per ex cetero s�dipscing? Nam omnis fuisset qu�estio ea, vis te melius m�l�rum molestie. In ali� nonumy voluptatum sea, eu sed sale mundi concept�m. Dic� errem elab�raret te nec, id �ssum choro sit. Sit solet nusquam suscipi�ntur eu, ad�lescens scriptorem qui at. E� eum meis atqui diceret, ut ius brute zril eleifend, mel te utinam ubique dolores."
				}
			];
		return dummyData;
	};
	this.getData = function(){
		console.log( _data );
		return _data;
	};
	this.getDetailsForEntryId = function( in_id ){
		return _data[ in_id ];
	};
	__construct();
};