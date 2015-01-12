function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

var langage = [];
var selectedLangage = "en";
if(getParameterByName('lang')=='ar' && getParameterByName('lang') != null){
		selectedLangage = 'ar';
		
}



console.log(sessionStorage.getItem('lang'));

$.ajax({
		url : selectedLangage + ".json",
		success : function( data ) {
			langage = data;
		},
		async:false
 });
 
 
 