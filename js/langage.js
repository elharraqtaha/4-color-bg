

var langage = [];
var selectedLangage = "en";


$.ajax({
		url : selectedLangage + ".json",
		success : function( data ) {
			langage = data;
		},
		async:false
 });
 