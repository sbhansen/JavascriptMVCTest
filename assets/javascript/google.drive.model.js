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
					"body": "Et vix clitæ timeæm voluptuæ, docendi corrumpit disputåtioni his at. Ad nec tale habemus tibique, cu solutå låtine voluptatum sea! Consul dolores intellegåm usu no, duis illum elitr his ex. Eam saperet eligendi in, eæm ei alia vide porrø, åt iracundia complectitur duo! Propriae consectetuer usu ex. Ex mea hinc zril assentior, ea dicæm accusåmus cum, eleifend suævitæte vel ea.Nonumy efficiendi cu mei, hærum ponderum vel eu. Et sit agam æccumsan, ådmodum quæestiø mel ne! Nec vide suævitate an, te munere animæl explicæri sea! Ån est soleåt commodo discere, ut nusquam æccusatå dissentiæs nec!Commodø vølumus te nec. Quo at aliquid explicari! Seå te everti mediocritatem? Id eum consulatu interesset. Ut sed græece nønumes similique! Qui doming similique posidonium at, eius træctåtos theøphrastus eos te. Et nec åliæ porro scriptørem, per ex cetero sådipscing?Nam omnis fuisset quæestio ea, vis te melius mælørum molestie. In aliå nonumy voluptatum sea, eu sed sale mundi conceptåm. Dicø errem elabøraret te nec, id æssum choro sit. Sit solet nusquam suscipiåntur eu, adølescens scriptorem qui at. Eå eum meis atqui diceret, ut ius brute zril eleifend, mel te utinam ubique dolores."
				},
				{
					"navn": "Bo Jakobsen",
					"alder": "27",
					"land": "Danmark",
					"by": "Kjøbenhavn",
					"tittle": "- Jeg har tro på fremtiden",
					"bilde": "http://ap.mnocdn.no/incoming/article7127946.ece/ALTERNATES/w980c43/afp000483528-lIMlqXJQsy.jpg?updated=210220132244",
					"ingress": "Lørem ipsum dolor sit amet, sit te erat accusam, cåusae laoreet adipisci ei usu, nec delectus menændri eloquentiåm æd. Mei ælii sanctus ex, cum id ridens intellegat, at per græeco.",
					"body": "Lorem ipsum dølor sit amet, id nam feugait åntiopam. In eam dicåt quaestio corrumpit, te justo ceteros dissentias ius. Pro eu quis graecis voluptåria, nisl lobortis incørrupte åd eam. Vix possit gråeco fæcilisi eu. Ex his sæperet accumsan. Purtø noluisse has te, seæ duis augue no! Appareat definiebæs est ex! Mea probo brute numquåm nø, nø erat mollis vim. Labitur sænctus an usu. Cu vis illud novum choro.	Ei lørem tation quo. Possim promptæ bonorum sea æd. Qui åt viderer sålutandi vulputåte, cum in duis omittantur deterruisset! Prøpriae deserunt eu his, est ei vidit nonumy electræm. Sed cibo phæedrum vølutpat an?"
				},
				{
					"navn": "Linda Johansson",
					"alder": "19",
					"land": "Sverige",
					"by": "Malmø",
					"tittle": "- Jeg vet ikke hva jeg vil bli",
					"bilde": "http://ap.mnocdn.no/incoming/article7127192.ece/ALTERNATES/w980c43/vedkveld-KxlySm3ycr.jpg?updated=200220132324",
					"ingress": "Lørem ipsum dolor sit amet, sit te erat accusam, cåusae laoreet adipisci ei usu, nec delectus menændri eloquentiåm æd. Mei ælii sanctus ex, cum id ridens intellegat, at per græeco.",
					"body": "Ei sea illud dicant persius, cum nostro habemus elåboraret ea, vim nø numquam definitiones. Æliquip splendide pro eu? Sed reque ludus malorum åd. Sit tæntas mediøcritætem no, qui id dicit dicunt suscipit. Ei audiam postulånt usu! Per illum assum mølestiåe ad, sed eros affert åt. Meæ nobis timeåm nusquam id, id dicåm impetus usu. Vero summø åliquando eam no, offendit electram eos cu. Nec feugiæt dignissim in. Has an quås noluisse, cu est simul iudicabit, æn nulla tempor mei. Åliquip meliore probåtus nec ea, velit errem efficiendi te hås. Ex mutåt facilis fabellas nam, ad putant aperiæm qui. Ut sed fugit oratio appetere, adhuc option te his! Ne åutem voluptua appareåt sed, nec nonumes recusabo intellegebat ut, vis nonumes fuisset salutåtus no. Te sea fåcilis vulputate moderatius, ea pri primis dicunt åliquid. Åd hås elitr cotidieque, ad malis vivendum percipitur usu, ei sea sale argumentum. Ad hendrerit æppellantur eam? Ius nihil viderer an, cu impedit propriae nec? Pri iuvaret omittam tractatos no. Omnes vivendum sit ne, ad eius definitiones vis, nullå facilisi persequeris prø ei.Cu vereår commune liberavisse mei, in nam iuværet saperet? Atqui percipit laboramus ex sea, in labitur præesent duø? Mea orætio primis salutatus no. An his posse tantæs percipit, vis ea åssum tåntas, vis eruditi percipitur ne. Nemore eruditi contentiones ad his, nec et possim fæbellas."
				},
				{
					"navn": "Markusz Patlosjka",
					"alder": "32",
					"land": "Polen",
					"by": "Karakow",
					"tittle": "- Jeg tviholder på jobben min",
					"bilde": "http://ap.mnocdn.no/incoming/article7127363.ece/ALTERNATES/w980c169/spetbfy15-I8Ysv6fNcp.jpg?updated=210220131012",
					"ingress": "Lørem ipsum dolor sit amet, sit te erat accusam, cåusae laoreet adipisci ei usu, nec delectus menændri eloquentiåm æd. Mei ælii sanctus ex, cum id ridens intellegat, at per græeco.",
					"body": "Et vix clitæ timeæm voluptuæ, docendi corrumpit disputåtioni his at. Ad nec tale habemus tibique, cu solutå låtine voluptatum sea! Consul dolores intellegåm usu no, duis illum elitr his ex. Eam saperet eligendi in, eæm ei alia vide porrø, åt iracundia complectitur duo! Propriae consectetuer usu ex. Ex mea hinc zril assentior, ea dicæm accusåmus cum, eleifend suævitæte vel ea. Nonumy efficiendi cu mei, hærum ponderum vel eu. Et sit agam æccumsan, ådmodum quæestiø mel ne! Nec vide suævitate an, te munere animæl explicæri sea! Ån est soleåt commodo discere, ut nusquam æccusatå dissentiæs nec! Commodø vølumus te nec. Quo at aliquid explicari! Seå te everti mediocritatem? Id eum consulatu interesset. Ut sed græece nønumes similique! Qui doming similique posidonium at, eius træctåtos theøphrastus eos te. Et nec åliæ porro scriptørem, per ex cetero sådipscing? Nam omnis fuisset quæestio ea, vis te melius mælørum molestie. In aliå nonumy voluptatum sea, eu sed sale mundi conceptåm. Dicø errem elabøraret te nec, id æssum choro sit. Sit solet nusquam suscipiåntur eu, adølescens scriptorem qui at. Eå eum meis atqui diceret, ut ius brute zril eleifend, mel te utinam ubique dolores."
				},
				{
					"navn": "Virginie Helie",
					"alder": "30",
					"land": "Frankrike",
					"by": "Lyon",
					"tittle": "- Det blir vanskelig etter utdannelsen",
					"bilde": "http://ap.mnocdn.no/incoming/article7127302.ece/ALTERNATES/w980c169/anna+karenina.jpg?updated=210220130946",
					"ingress": "Lørem ipsum dolor sit amet, sit te erat accusam, cåusae laoreet adipisci ei usu, nec delectus menændri eloquentiåm æd. Mei ælii sanctus ex, cum id ridens intellegat, at per græeco.",
					"body": "Et vix clitæ timeæm voluptuæ, docendi corrumpit disputåtioni his at. Ad nec tale habemus tibique, cu solutå låtine voluptatum sea! Consul dolores intellegåm usu no, duis illum elitr his ex. Eam saperet eligendi in, eæm ei alia vide porrø, åt iracundia complectitur duo! Propriae consectetuer usu ex. Ex mea hinc zril assentior, ea dicæm accusåmus cum, eleifend suævitæte vel ea. Nonumy efficiendi cu mei, hærum ponderum vel eu. Et sit agam æccumsan, ådmodum quæestiø mel ne! Nec vide suævitate an, te munere animæl explicæri sea! Ån est soleåt commodo discere, ut nusquam æccusatå dissentiæs nec! Commodø vølumus te nec. Quo at aliquid explicari! Seå te everti mediocritatem? Id eum consulatu interesset. Ut sed græece nønumes similique! Qui doming similique posidonium at, eius træctåtos theøphrastus eos te. Et nec åliæ porro scriptørem, per ex cetero sådipscing? Nam omnis fuisset quæestio ea, vis te melius mælørum molestie. In aliå nonumy voluptatum sea, eu sed sale mundi conceptåm. Dicø errem elabøraret te nec, id æssum choro sit. Sit solet nusquam suscipiåntur eu, adølescens scriptorem qui at. Eå eum meis atqui diceret, ut ius brute zril eleifend, mel te utinam ubique dolores."
				},
				{
					"navn": "Monica Suarez",
					"alder": "24",
					"land": "Spania",
					"by": "Madrid",
					"tittle": "- Fremtiden ligger i Nord-Europa",
					"bilde": "http://ap.mnocdn.no/incoming/article7128417.ece/ALTERNATES/w980cFree/afp000342368-B1i1GOv2cJ.jpg?updated=220220131255",
					"ingress": "Lørem ipsum dolor sit amet, sit te erat accusam, cåusae laoreet adipisci ei usu, nec delectus menændri eloquentiåm æd. Mei ælii sanctus ex, cum id ridens intellegat, at per græeco.",
					"body": "Et vix clitæ timeæm voluptuæ, docendi corrumpit disputåtioni his at. Ad nec tale habemus tibique, cu solutå låtine voluptatum sea! Consul dolores intellegåm usu no, duis illum elitr his ex. Eam saperet eligendi in, eæm ei alia vide porrø, åt iracundia complectitur duo! Propriae consectetuer usu ex. Ex mea hinc zril assentior, ea dicæm accusåmus cum, eleifend suævitæte vel ea. Nonumy efficiendi cu mei, hærum ponderum vel eu. Et sit agam æccumsan, ådmodum quæestiø mel ne! Nec vide suævitate an, te munere animæl explicæri sea! Ån est soleåt commodo discere, ut nusquam æccusatå dissentiæs nec! Commodø vølumus te nec. Quo at aliquid explicari! Seå te everti mediocritatem? Id eum consulatu interesset. Ut sed græece nønumes similique! Qui doming similique posidonium at, eius træctåtos theøphrastus eos te. Et nec åliæ porro scriptørem, per ex cetero sådipscing? Nam omnis fuisset quæestio ea, vis te melius mælørum molestie. In aliå nonumy voluptatum sea, eu sed sale mundi conceptåm. Dicø errem elabøraret te nec, id æssum choro sit. Sit solet nusquam suscipiåntur eu, adølescens scriptorem qui at. Eå eum meis atqui diceret, ut ius brute zril eleifend, mel te utinam ubique dolores."
				},
				{
					"navn": "Marco Belafonte",
					"alder": "35",
					"land": "Italia",
					"by": "Roma",
					"tittle": "- Mamma gjør alt for meg",
					"bilde": "http://ap.mnocdn.no/incoming/article7127541.ece/ALTERNATES/w980cFree/db1a3405242d8860583dd4b55abe616ad5ee9ce858ac4e0ae805c45d-_boZjoHPJl.jpg?updated=210220131147",
					"ingress": "Mel esse søleat delicatå in, eå per esse aperiri. Soluta euismod id nec, utæmur adipisci splendide ne quo. Reque albucius intellegam ea.",
					"body": "Et vix clitæ timeæm voluptuæ, docendi corrumpit disputåtioni his at. Ad nec tale habemus tibique, cu solutå låtine voluptatum sea! Consul dolores intellegåm usu no, duis illum elitr his ex. Eam saperet eligendi in, eæm ei alia vide porrø, åt iracundia complectitur duo! Propriae consectetuer usu ex. Ex mea hinc zril assentior, ea dicæm accusåmus cum, eleifend suævitæte vel ea. Nonumy efficiendi cu mei, hærum ponderum vel eu. Et sit agam æccumsan, ådmodum quæestiø mel ne! Nec vide suævitate an, te munere animæl explicæri sea! Ån est soleåt commodo discere, ut nusquam æccusatå dissentiæs nec! Commodø vølumus te nec. Quo at aliquid explicari! Seå te everti mediocritatem? Id eum consulatu interesset. Ut sed græece nønumes similique! Qui doming similique posidonium at, eius træctåtos theøphrastus eos te. Et nec åliæ porro scriptørem, per ex cetero sådipscing? Nam omnis fuisset quæestio ea, vis te melius mælørum molestie. In aliå nonumy voluptatum sea, eu sed sale mundi conceptåm. Dicø errem elabøraret te nec, id æssum choro sit. Sit solet nusquam suscipiåntur eu, adølescens scriptorem qui at. Eå eum meis atqui diceret, ut ius brute zril eleifend, mel te utinam ubique dolores."
				},
				{
					"navn": "Vaclav Huarec",
					"alder": "25",
					"land": "Tsjekkia",
					"by": "Praha",
					"tittle": "- Turismen er alt vi har",
					"bilde": "http://ap.mnocdn.no/incoming/article7127373.ece/ALTERNATES/w980c43/afp000480850-_03KxmtgXA.jpg?updated=220220130800",
					"ingress": "Lørem ipsum dolor sit amet, sit te erat accusam, cåusae laoreet adipisci ei usu, nec delectus menændri eloquentiåm æd. Mei ælii sanctus ex, cum id ridens intellegat, at per græeco.",
					"body": "Possim tibique eu per. Ut sålutandi percipitur intellegebæt est, phaedrum definiebas vituperatoribus te mei? Hås etiam iuværet constituto æn, ex tollit sanctus qui. Rebum mucius indoctum hæs ea, cu ius option singulis. Eu zril singulis aliquændø est, hæs ea propriae perpetua, cu vix vocent virtute. Quaeque inermis salutåtus no nam? Nostrud dolores ad vix? Ei nullam øffendit quo. Sed illum lorem ponderum ut! Te sit animal nønumes hendrerit, pri autem deserunt id, clitæ fæbellas duø æn! No sanctus saperet debitis nam!"
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