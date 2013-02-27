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
					"ingress": "Lørem ipsum dolor sit amet, sit te erat accusam, cåusae laoreet adipisci ei usu, nec delectus menændri eloquentiåm æd. Mei ælii sanctus ex, cum id ridens intellegat, at per græeco.",
					"body": "Et vix clitæ timeæm voluptuæ, docendi corrumpit disputåtioni his at. Ad nec tale habemus tibique, cu solutå låtine voluptatum sea! Consul dolores intellegåm usu no, duis illum elitr his ex. Eam saperet eligendi in, eæm ei alia vide porrø, åt iracundia complectitur duo! Propriae consectetuer usu ex. Ex mea hinc zril assentior, ea dicæm accusåmus cum, eleifend suævitæte vel ea. Nonumy efficiendi cu mei, hærum ponderum vel eu. Et sit agam æccumsan, ådmodum quæestiø mel ne! Nec vide suævitate an, te munere animæl explicæri sea! Ån est soleåt commodo discere, ut nusquam æccusatå dissentiæs nec! Commodø vølumus te nec. Quo at aliquid explicari! Seå te everti mediocritatem? Id eum consulatu interesset. Ut sed græece nønumes similique! Qui doming similique posidonium at, eius træctåtos theøphrastus eos te. Et nec åliæ porro scriptørem, per ex cetero sådipscing? Nam omnis fuisset quæestio ea, vis te melius mælørum molestie. In aliå nonumy voluptatum sea, eu sed sale mundi conceptåm. Dicø errem elabøraret te nec, id æssum choro sit. Sit solet nusquam suscipiåntur eu, adølescens scriptorem qui at. Eå eum meis atqui diceret, ut ius brute zril eleifend, mel te utinam ubique dolores."
				},
				{
					"navn": "Bo Jakobsen",
					"alder": "27",
					"land": "Danmark",
					"by": "Kjøbenhavn",
					"tittle": "- Det blir vanskelig etter utdannelsen",
					"bilde": "http://ap.mnocdn.no/incoming/article7128427.ece/ALTERNATES/w980c43/afp000483128.jpg?updated=220220130924",
					"ingress": "Lørem ipsum dolor sit amet, sit te erat accusam, cåusae laoreet adipisci ei usu, nec delectus menændri eloquentiåm æd. Mei ælii sanctus ex, cum id ridens intellegat, at per græeco.",
					"body": "Et vix clitæ timeæm voluptuæ, docendi corrumpit disputåtioni his at. Ad nec tale habemus tibique, cu solutå låtine voluptatum sea! Consul dolores intellegåm usu no, duis illum elitr his ex. Eam saperet eligendi in, eæm ei alia vide porrø, åt iracundia complectitur duo! Propriae consectetuer usu ex. Ex mea hinc zril assentior, ea dicæm accusåmus cum, eleifend suævitæte vel ea. Nonumy efficiendi cu mei, hærum ponderum vel eu. Et sit agam æccumsan, ådmodum quæestiø mel ne! Nec vide suævitate an, te munere animæl explicæri sea! Ån est soleåt commodo discere, ut nusquam æccusatå dissentiæs nec! Commodø vølumus te nec. Quo at aliquid explicari! Seå te everti mediocritatem? Id eum consulatu interesset. Ut sed græece nønumes similique! Qui doming similique posidonium at, eius træctåtos theøphrastus eos te. Et nec åliæ porro scriptørem, per ex cetero sådipscing? Nam omnis fuisset quæestio ea, vis te melius mælørum molestie. In aliå nonumy voluptatum sea, eu sed sale mundi conceptåm. Dicø errem elabøraret te nec, id æssum choro sit. Sit solet nusquam suscipiåntur eu, adølescens scriptorem qui at. Eå eum meis atqui diceret, ut ius brute zril eleifend, mel te utinam ubique dolores."
				},
				{
					"navn": "Linda Johansson",
					"alder": "19",
					"land": "Sverige",
					"by": "Malmø",
					"tittle": "- Det blir vanskelig etter utdannelsen",
					"bilde": "http://ap.mnocdn.no/incoming/article7128427.ece/ALTERNATES/w980c43/afp000483128.jpg?updated=220220130924",
					"ingress": "Lørem ipsum dolor sit amet, sit te erat accusam, cåusae laoreet adipisci ei usu, nec delectus menændri eloquentiåm æd. Mei ælii sanctus ex, cum id ridens intellegat, at per græeco.",
					"body": "Et vix clitæ timeæm voluptuæ, docendi corrumpit disputåtioni his at. Ad nec tale habemus tibique, cu solutå låtine voluptatum sea! Consul dolores intellegåm usu no, duis illum elitr his ex. Eam saperet eligendi in, eæm ei alia vide porrø, åt iracundia complectitur duo! Propriae consectetuer usu ex. Ex mea hinc zril assentior, ea dicæm accusåmus cum, eleifend suævitæte vel ea. Nonumy efficiendi cu mei, hærum ponderum vel eu. Et sit agam æccumsan, ådmodum quæestiø mel ne! Nec vide suævitate an, te munere animæl explicæri sea! Ån est soleåt commodo discere, ut nusquam æccusatå dissentiæs nec! Commodø vølumus te nec. Quo at aliquid explicari! Seå te everti mediocritatem? Id eum consulatu interesset. Ut sed græece nønumes similique! Qui doming similique posidonium at, eius træctåtos theøphrastus eos te. Et nec åliæ porro scriptørem, per ex cetero sådipscing? Nam omnis fuisset quæestio ea, vis te melius mælørum molestie. In aliå nonumy voluptatum sea, eu sed sale mundi conceptåm. Dicø errem elabøraret te nec, id æssum choro sit. Sit solet nusquam suscipiåntur eu, adølescens scriptorem qui at. Eå eum meis atqui diceret, ut ius brute zril eleifend, mel te utinam ubique dolores."
				},
				{
					"navn": "Linda Johansson",
					"alder": "19",
					"land": "Sverige",
					"by": "Malmø",
					"tittle": "- Det blir vanskelig etter utdannelsen",
					"bilde": "http://ap.mnocdn.no/incoming/article7128427.ece/ALTERNATES/w980c43/afp000483128.jpg?updated=220220130924",
					"ingress": "Lørem ipsum dolor sit amet, sit te erat accusam, cåusae laoreet adipisci ei usu, nec delectus menændri eloquentiåm æd. Mei ælii sanctus ex, cum id ridens intellegat, at per græeco.",
					"body": "Et vix clitæ timeæm voluptuæ, docendi corrumpit disputåtioni his at. Ad nec tale habemus tibique, cu solutå låtine voluptatum sea! Consul dolores intellegåm usu no, duis illum elitr his ex. Eam saperet eligendi in, eæm ei alia vide porrø, åt iracundia complectitur duo! Propriae consectetuer usu ex. Ex mea hinc zril assentior, ea dicæm accusåmus cum, eleifend suævitæte vel ea. Nonumy efficiendi cu mei, hærum ponderum vel eu. Et sit agam æccumsan, ådmodum quæestiø mel ne! Nec vide suævitate an, te munere animæl explicæri sea! Ån est soleåt commodo discere, ut nusquam æccusatå dissentiæs nec! Commodø vølumus te nec. Quo at aliquid explicari! Seå te everti mediocritatem? Id eum consulatu interesset. Ut sed græece nønumes similique! Qui doming similique posidonium at, eius træctåtos theøphrastus eos te. Et nec åliæ porro scriptørem, per ex cetero sådipscing? Nam omnis fuisset quæestio ea, vis te melius mælørum molestie. In aliå nonumy voluptatum sea, eu sed sale mundi conceptåm. Dicø errem elabøraret te nec, id æssum choro sit. Sit solet nusquam suscipiåntur eu, adølescens scriptorem qui at. Eå eum meis atqui diceret, ut ius brute zril eleifend, mel te utinam ubique dolores."
				},
				{
					"navn": "Linda Johansson",
					"alder": "19",
					"land": "Sverige",
					"by": "Malmø",
					"tittle": "- Det blir vanskelig etter utdannelsen",
					"bilde": "http://ap.mnocdn.no/incoming/article7128427.ece/ALTERNATES/w980c43/afp000483128.jpg?updated=220220130924",
					"ingress": "Lørem ipsum dolor sit amet, sit te erat accusam, cåusae laoreet adipisci ei usu, nec delectus menændri eloquentiåm æd. Mei ælii sanctus ex, cum id ridens intellegat, at per græeco.",
					"body": "Et vix clitæ timeæm voluptuæ, docendi corrumpit disputåtioni his at. Ad nec tale habemus tibique, cu solutå låtine voluptatum sea! Consul dolores intellegåm usu no, duis illum elitr his ex. Eam saperet eligendi in, eæm ei alia vide porrø, åt iracundia complectitur duo! Propriae consectetuer usu ex. Ex mea hinc zril assentior, ea dicæm accusåmus cum, eleifend suævitæte vel ea. Nonumy efficiendi cu mei, hærum ponderum vel eu. Et sit agam æccumsan, ådmodum quæestiø mel ne! Nec vide suævitate an, te munere animæl explicæri sea! Ån est soleåt commodo discere, ut nusquam æccusatå dissentiæs nec! Commodø vølumus te nec. Quo at aliquid explicari! Seå te everti mediocritatem? Id eum consulatu interesset. Ut sed græece nønumes similique! Qui doming similique posidonium at, eius træctåtos theøphrastus eos te. Et nec åliæ porro scriptørem, per ex cetero sådipscing? Nam omnis fuisset quæestio ea, vis te melius mælørum molestie. In aliå nonumy voluptatum sea, eu sed sale mundi conceptåm. Dicø errem elabøraret te nec, id æssum choro sit. Sit solet nusquam suscipiåntur eu, adølescens scriptorem qui at. Eå eum meis atqui diceret, ut ius brute zril eleifend, mel te utinam ubique dolores."
				},
				{
					"navn": "Linda Johansson",
					"alder": "19",
					"land": "Sverige",
					"by": "Malmø",
					"tittle": "- Det blir vanskelig etter utdannelsen",
					"bilde": "http://ap.mnocdn.no/incoming/article7128427.ece/ALTERNATES/w980c43/afp000483128.jpg?updated=220220130924",
					"ingress": "Lørem ipsum dolor sit amet, sit te erat accusam, cåusae laoreet adipisci ei usu, nec delectus menændri eloquentiåm æd. Mei ælii sanctus ex, cum id ridens intellegat, at per græeco.",
					"body": "Et vix clitæ timeæm voluptuæ, docendi corrumpit disputåtioni his at. Ad nec tale habemus tibique, cu solutå låtine voluptatum sea! Consul dolores intellegåm usu no, duis illum elitr his ex. Eam saperet eligendi in, eæm ei alia vide porrø, åt iracundia complectitur duo! Propriae consectetuer usu ex. Ex mea hinc zril assentior, ea dicæm accusåmus cum, eleifend suævitæte vel ea. Nonumy efficiendi cu mei, hærum ponderum vel eu. Et sit agam æccumsan, ådmodum quæestiø mel ne! Nec vide suævitate an, te munere animæl explicæri sea! Ån est soleåt commodo discere, ut nusquam æccusatå dissentiæs nec! Commodø vølumus te nec. Quo at aliquid explicari! Seå te everti mediocritatem? Id eum consulatu interesset. Ut sed græece nønumes similique! Qui doming similique posidonium at, eius træctåtos theøphrastus eos te. Et nec åliæ porro scriptørem, per ex cetero sådipscing? Nam omnis fuisset quæestio ea, vis te melius mælørum molestie. In aliå nonumy voluptatum sea, eu sed sale mundi conceptåm. Dicø errem elabøraret te nec, id æssum choro sit. Sit solet nusquam suscipiåntur eu, adølescens scriptorem qui at. Eå eum meis atqui diceret, ut ius brute zril eleifend, mel te utinam ubique dolores."
				},
				{
					"navn": "Linda Johansson",
					"alder": "19",
					"land": "Sverige",
					"by": "Malmø",
					"tittle": "- Det blir vanskelig etter utdannelsen",
					"bilde": "http://ap.mnocdn.no/incoming/article7128427.ece/ALTERNATES/w980c43/afp000483128.jpg?updated=220220130924",
					"ingress": "Lørem ipsum dolor sit amet, sit te erat accusam, cåusae laoreet adipisci ei usu, nec delectus menændri eloquentiåm æd. Mei ælii sanctus ex, cum id ridens intellegat, at per græeco.",
					"body": "Et vix clitæ timeæm voluptuæ, docendi corrumpit disputåtioni his at. Ad nec tale habemus tibique, cu solutå låtine voluptatum sea! Consul dolores intellegåm usu no, duis illum elitr his ex. Eam saperet eligendi in, eæm ei alia vide porrø, åt iracundia complectitur duo! Propriae consectetuer usu ex. Ex mea hinc zril assentior, ea dicæm accusåmus cum, eleifend suævitæte vel ea. Nonumy efficiendi cu mei, hærum ponderum vel eu. Et sit agam æccumsan, ådmodum quæestiø mel ne! Nec vide suævitate an, te munere animæl explicæri sea! Ån est soleåt commodo discere, ut nusquam æccusatå dissentiæs nec! Commodø vølumus te nec. Quo at aliquid explicari! Seå te everti mediocritatem? Id eum consulatu interesset. Ut sed græece nønumes similique! Qui doming similique posidonium at, eius træctåtos theøphrastus eos te. Et nec åliæ porro scriptørem, per ex cetero sådipscing? Nam omnis fuisset quæestio ea, vis te melius mælørum molestie. In aliå nonumy voluptatum sea, eu sed sale mundi conceptåm. Dicø errem elabøraret te nec, id æssum choro sit. Sit solet nusquam suscipiåntur eu, adølescens scriptorem qui at. Eå eum meis atqui diceret, ut ius brute zril eleifend, mel te utinam ubique dolores."
				},
				{
					"navn": "Linda Johansson",
					"alder": "19",
					"land": "Sverige",
					"by": "Malmø",
					"tittle": "- Det blir vanskelig etter utdannelsen",
					"bilde": "http://ap.mnocdn.no/incoming/article7128427.ece/ALTERNATES/w980c43/afp000483128.jpg?updated=220220130924",
					"ingress": "Lørem ipsum dolor sit amet, sit te erat accusam, cåusae laoreet adipisci ei usu, nec delectus menændri eloquentiåm æd. Mei ælii sanctus ex, cum id ridens intellegat, at per græeco.",
					"body": "Et vix clitæ timeæm voluptuæ, docendi corrumpit disputåtioni his at. Ad nec tale habemus tibique, cu solutå låtine voluptatum sea! Consul dolores intellegåm usu no, duis illum elitr his ex. Eam saperet eligendi in, eæm ei alia vide porrø, åt iracundia complectitur duo! Propriae consectetuer usu ex. Ex mea hinc zril assentior, ea dicæm accusåmus cum, eleifend suævitæte vel ea. Nonumy efficiendi cu mei, hærum ponderum vel eu. Et sit agam æccumsan, ådmodum quæestiø mel ne! Nec vide suævitate an, te munere animæl explicæri sea! Ån est soleåt commodo discere, ut nusquam æccusatå dissentiæs nec! Commodø vølumus te nec. Quo at aliquid explicari! Seå te everti mediocritatem? Id eum consulatu interesset. Ut sed græece nønumes similique! Qui doming similique posidonium at, eius træctåtos theøphrastus eos te. Et nec åliæ porro scriptørem, per ex cetero sådipscing? Nam omnis fuisset quæestio ea, vis te melius mælørum molestie. In aliå nonumy voluptatum sea, eu sed sale mundi conceptåm. Dicø errem elabøraret te nec, id æssum choro sit. Sit solet nusquam suscipiåntur eu, adølescens scriptorem qui at. Eå eum meis atqui diceret, ut ius brute zril eleifend, mel te utinam ubique dolores."
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