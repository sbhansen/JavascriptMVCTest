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
					"body": "Et vix clit� time�m voluptu�, docendi corrumpit disput�tioni his at. Ad nec tale habemus tibique, cu solut� l�tine voluptatum sea! Consul dolores intelleg�m usu no, duis illum elitr his ex. Eam saperet eligendi in, e�m ei alia vide porr�, �t iracundia complectitur duo! Propriae consectetuer usu ex. Ex mea hinc zril assentior, ea dic�m accus�mus cum, eleifend su�vit�te vel ea.Nonumy efficiendi cu mei, h�rum ponderum vel eu. Et sit agam �ccumsan, �dmodum qu�esti� mel ne! Nec vide su�vitate an, te munere anim�l explic�ri sea! �n est sole�t commodo discere, ut nusquam �ccusat� dissenti�s nec!Commod� v�lumus te nec. Quo at aliquid explicari! Se� te everti mediocritatem? Id eum consulatu interesset. Ut sed gr�ece n�numes similique! Qui doming similique posidonium at, eius tr�ct�tos the�phrastus eos te. Et nec �li� porro script�rem, per ex cetero s�dipscing?Nam omnis fuisset qu�estio ea, vis te melius m�l�rum molestie. In ali� nonumy voluptatum sea, eu sed sale mundi concept�m. Dic� errem elab�raret te nec, id �ssum choro sit. Sit solet nusquam suscipi�ntur eu, ad�lescens scriptorem qui at. E� eum meis atqui diceret, ut ius brute zril eleifend, mel te utinam ubique dolores."
				},
				{
					"navn": "Bo Jakobsen",
					"alder": "27",
					"land": "Danmark",
					"by": "Kj�benhavn",
					"tittle": "- Jeg har tro p� fremtiden",
					"bilde": "http://ap.mnocdn.no/incoming/article7127946.ece/ALTERNATES/w980c43/afp000483528-lIMlqXJQsy.jpg?updated=210220132244",
					"ingress": "L�rem ipsum dolor sit amet, sit te erat accusam, c�usae laoreet adipisci ei usu, nec delectus men�ndri eloquenti�m �d. Mei �lii sanctus ex, cum id ridens intellegat, at per gr�eco.",
					"body": "Lorem ipsum d�lor sit amet, id nam feugait �ntiopam. In eam dic�t quaestio corrumpit, te justo ceteros dissentias ius. Pro eu quis graecis volupt�ria, nisl lobortis inc�rrupte �d eam. Vix possit gr�eco f�cilisi eu. Ex his s�peret accumsan. Purt� noluisse has te, se� duis augue no! Appareat definieb�s est ex! Mea probo brute numqu�m n�, n� erat mollis vim. Labitur s�nctus an usu. Cu vis illud novum choro.	Ei l�rem tation quo. Possim prompt� bonorum sea �d. Qui �t viderer s�lutandi vulput�te, cum in duis omittantur deterruisset! Pr�priae deserunt eu his, est ei vidit nonumy electr�m. Sed cibo ph�edrum v�lutpat an?"
				},
				{
					"navn": "Linda Johansson",
					"alder": "19",
					"land": "Sverige",
					"by": "Malm�",
					"tittle": "- Jeg vet ikke hva jeg vil bli",
					"bilde": "http://ap.mnocdn.no/incoming/article7127192.ece/ALTERNATES/w980c43/vedkveld-KxlySm3ycr.jpg?updated=200220132324",
					"ingress": "L�rem ipsum dolor sit amet, sit te erat accusam, c�usae laoreet adipisci ei usu, nec delectus men�ndri eloquenti�m �d. Mei �lii sanctus ex, cum id ridens intellegat, at per gr�eco.",
					"body": "Ei sea illud dicant persius, cum nostro habemus el�boraret ea, vim n� numquam definitiones. �liquip splendide pro eu? Sed reque ludus malorum �d. Sit t�ntas medi�crit�tem no, qui id dicit dicunt suscipit. Ei audiam postul�nt usu! Per illum assum m�lesti�e ad, sed eros affert �t. Me� nobis time�m nusquam id, id dic�m impetus usu. Vero summ� �liquando eam no, offendit electram eos cu. Nec feugi�t dignissim in. Has an qu�s noluisse, cu est simul iudicabit, �n nulla tempor mei. �liquip meliore prob�tus nec ea, velit errem efficiendi te h�s. Ex mut�t facilis fabellas nam, ad putant aperi�m qui. Ut sed fugit oratio appetere, adhuc option te his! Ne �utem voluptua appare�t sed, nec nonumes recusabo intellegebat ut, vis nonumes fuisset salut�tus no. Te sea f�cilis vulputate moderatius, ea pri primis dicunt �liquid. �d h�s elitr cotidieque, ad malis vivendum percipitur usu, ei sea sale argumentum. Ad hendrerit �ppellantur eam? Ius nihil viderer an, cu impedit propriae nec? Pri iuvaret omittam tractatos no. Omnes vivendum sit ne, ad eius definitiones vis, null� facilisi persequeris pr� ei.Cu vere�r commune liberavisse mei, in nam iuv�ret saperet? Atqui percipit laboramus ex sea, in labitur pr�esent du�? Mea or�tio primis salutatus no. An his posse tant�s percipit, vis ea �ssum t�ntas, vis eruditi percipitur ne. Nemore eruditi contentiones ad his, nec et possim f�bellas."
				},
				{
					"navn": "Markusz Patlosjka",
					"alder": "32",
					"land": "Polen",
					"by": "Karakow",
					"tittle": "- Jeg tviholder p� jobben min",
					"bilde": "http://ap.mnocdn.no/incoming/article7127363.ece/ALTERNATES/w980c169/spetbfy15-I8Ysv6fNcp.jpg?updated=210220131012",
					"ingress": "L�rem ipsum dolor sit amet, sit te erat accusam, c�usae laoreet adipisci ei usu, nec delectus men�ndri eloquenti�m �d. Mei �lii sanctus ex, cum id ridens intellegat, at per gr�eco.",
					"body": "Et vix clit� time�m voluptu�, docendi corrumpit disput�tioni his at. Ad nec tale habemus tibique, cu solut� l�tine voluptatum sea! Consul dolores intelleg�m usu no, duis illum elitr his ex. Eam saperet eligendi in, e�m ei alia vide porr�, �t iracundia complectitur duo! Propriae consectetuer usu ex. Ex mea hinc zril assentior, ea dic�m accus�mus cum, eleifend su�vit�te vel ea. Nonumy efficiendi cu mei, h�rum ponderum vel eu. Et sit agam �ccumsan, �dmodum qu�esti� mel ne! Nec vide su�vitate an, te munere anim�l explic�ri sea! �n est sole�t commodo discere, ut nusquam �ccusat� dissenti�s nec! Commod� v�lumus te nec. Quo at aliquid explicari! Se� te everti mediocritatem? Id eum consulatu interesset. Ut sed gr�ece n�numes similique! Qui doming similique posidonium at, eius tr�ct�tos the�phrastus eos te. Et nec �li� porro script�rem, per ex cetero s�dipscing? Nam omnis fuisset qu�estio ea, vis te melius m�l�rum molestie. In ali� nonumy voluptatum sea, eu sed sale mundi concept�m. Dic� errem elab�raret te nec, id �ssum choro sit. Sit solet nusquam suscipi�ntur eu, ad�lescens scriptorem qui at. E� eum meis atqui diceret, ut ius brute zril eleifend, mel te utinam ubique dolores."
				},
				{
					"navn": "Virginie Helie",
					"alder": "30",
					"land": "Frankrike",
					"by": "Lyon",
					"tittle": "- Det blir vanskelig etter utdannelsen",
					"bilde": "http://ap.mnocdn.no/incoming/article7127302.ece/ALTERNATES/w980c169/anna+karenina.jpg?updated=210220130946",
					"ingress": "L�rem ipsum dolor sit amet, sit te erat accusam, c�usae laoreet adipisci ei usu, nec delectus men�ndri eloquenti�m �d. Mei �lii sanctus ex, cum id ridens intellegat, at per gr�eco.",
					"body": "Et vix clit� time�m voluptu�, docendi corrumpit disput�tioni his at. Ad nec tale habemus tibique, cu solut� l�tine voluptatum sea! Consul dolores intelleg�m usu no, duis illum elitr his ex. Eam saperet eligendi in, e�m ei alia vide porr�, �t iracundia complectitur duo! Propriae consectetuer usu ex. Ex mea hinc zril assentior, ea dic�m accus�mus cum, eleifend su�vit�te vel ea. Nonumy efficiendi cu mei, h�rum ponderum vel eu. Et sit agam �ccumsan, �dmodum qu�esti� mel ne! Nec vide su�vitate an, te munere anim�l explic�ri sea! �n est sole�t commodo discere, ut nusquam �ccusat� dissenti�s nec! Commod� v�lumus te nec. Quo at aliquid explicari! Se� te everti mediocritatem? Id eum consulatu interesset. Ut sed gr�ece n�numes similique! Qui doming similique posidonium at, eius tr�ct�tos the�phrastus eos te. Et nec �li� porro script�rem, per ex cetero s�dipscing? Nam omnis fuisset qu�estio ea, vis te melius m�l�rum molestie. In ali� nonumy voluptatum sea, eu sed sale mundi concept�m. Dic� errem elab�raret te nec, id �ssum choro sit. Sit solet nusquam suscipi�ntur eu, ad�lescens scriptorem qui at. E� eum meis atqui diceret, ut ius brute zril eleifend, mel te utinam ubique dolores."
				},
				{
					"navn": "Monica Suarez",
					"alder": "24",
					"land": "Spania",
					"by": "Madrid",
					"tittle": "- Fremtiden ligger i Nord-Europa",
					"bilde": "http://ap.mnocdn.no/incoming/article7128417.ece/ALTERNATES/w980cFree/afp000342368-B1i1GOv2cJ.jpg?updated=220220131255",
					"ingress": "L�rem ipsum dolor sit amet, sit te erat accusam, c�usae laoreet adipisci ei usu, nec delectus men�ndri eloquenti�m �d. Mei �lii sanctus ex, cum id ridens intellegat, at per gr�eco.",
					"body": "Et vix clit� time�m voluptu�, docendi corrumpit disput�tioni his at. Ad nec tale habemus tibique, cu solut� l�tine voluptatum sea! Consul dolores intelleg�m usu no, duis illum elitr his ex. Eam saperet eligendi in, e�m ei alia vide porr�, �t iracundia complectitur duo! Propriae consectetuer usu ex. Ex mea hinc zril assentior, ea dic�m accus�mus cum, eleifend su�vit�te vel ea. Nonumy efficiendi cu mei, h�rum ponderum vel eu. Et sit agam �ccumsan, �dmodum qu�esti� mel ne! Nec vide su�vitate an, te munere anim�l explic�ri sea! �n est sole�t commodo discere, ut nusquam �ccusat� dissenti�s nec! Commod� v�lumus te nec. Quo at aliquid explicari! Se� te everti mediocritatem? Id eum consulatu interesset. Ut sed gr�ece n�numes similique! Qui doming similique posidonium at, eius tr�ct�tos the�phrastus eos te. Et nec �li� porro script�rem, per ex cetero s�dipscing? Nam omnis fuisset qu�estio ea, vis te melius m�l�rum molestie. In ali� nonumy voluptatum sea, eu sed sale mundi concept�m. Dic� errem elab�raret te nec, id �ssum choro sit. Sit solet nusquam suscipi�ntur eu, ad�lescens scriptorem qui at. E� eum meis atqui diceret, ut ius brute zril eleifend, mel te utinam ubique dolores."
				},
				{
					"navn": "Marco Belafonte",
					"alder": "35",
					"land": "Italia",
					"by": "Roma",
					"tittle": "- Mamma gj�r alt for meg",
					"bilde": "http://ap.mnocdn.no/incoming/article7127541.ece/ALTERNATES/w980cFree/db1a3405242d8860583dd4b55abe616ad5ee9ce858ac4e0ae805c45d-_boZjoHPJl.jpg?updated=210220131147",
					"ingress": "Mel esse s�leat delicat� in, e� per esse aperiri. Soluta euismod id nec, ut�mur adipisci splendide ne quo. Reque albucius intellegam ea.",
					"body": "Et vix clit� time�m voluptu�, docendi corrumpit disput�tioni his at. Ad nec tale habemus tibique, cu solut� l�tine voluptatum sea! Consul dolores intelleg�m usu no, duis illum elitr his ex. Eam saperet eligendi in, e�m ei alia vide porr�, �t iracundia complectitur duo! Propriae consectetuer usu ex. Ex mea hinc zril assentior, ea dic�m accus�mus cum, eleifend su�vit�te vel ea. Nonumy efficiendi cu mei, h�rum ponderum vel eu. Et sit agam �ccumsan, �dmodum qu�esti� mel ne! Nec vide su�vitate an, te munere anim�l explic�ri sea! �n est sole�t commodo discere, ut nusquam �ccusat� dissenti�s nec! Commod� v�lumus te nec. Quo at aliquid explicari! Se� te everti mediocritatem? Id eum consulatu interesset. Ut sed gr�ece n�numes similique! Qui doming similique posidonium at, eius tr�ct�tos the�phrastus eos te. Et nec �li� porro script�rem, per ex cetero s�dipscing? Nam omnis fuisset qu�estio ea, vis te melius m�l�rum molestie. In ali� nonumy voluptatum sea, eu sed sale mundi concept�m. Dic� errem elab�raret te nec, id �ssum choro sit. Sit solet nusquam suscipi�ntur eu, ad�lescens scriptorem qui at. E� eum meis atqui diceret, ut ius brute zril eleifend, mel te utinam ubique dolores."
				},
				{
					"navn": "Vaclav Huarec",
					"alder": "25",
					"land": "Tsjekkia",
					"by": "Praha",
					"tittle": "- Turismen er alt vi har",
					"bilde": "http://ap.mnocdn.no/incoming/article7127373.ece/ALTERNATES/w980c43/afp000480850-_03KxmtgXA.jpg?updated=220220130800",
					"ingress": "L�rem ipsum dolor sit amet, sit te erat accusam, c�usae laoreet adipisci ei usu, nec delectus men�ndri eloquenti�m �d. Mei �lii sanctus ex, cum id ridens intellegat, at per gr�eco.",
					"body": "Possim tibique eu per. Ut s�lutandi percipitur intellegeb�t est, phaedrum definiebas vituperatoribus te mei? H�s etiam iuv�ret constituto �n, ex tollit sanctus qui. Rebum mucius indoctum h�s ea, cu ius option singulis. Eu zril singulis aliqu�nd� est, h�s ea propriae perpetua, cu vix vocent virtute. Quaeque inermis salut�tus no nam? Nostrud dolores ad vix? Ei nullam �ffendit quo. Sed illum lorem ponderum ut! Te sit animal n�numes hendrerit, pri autem deserunt id, clit� f�bellas du� �n! No sanctus saperet debitis nam!"
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