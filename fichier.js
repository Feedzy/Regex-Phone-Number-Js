$(function(){
     var regex = /^\+(?:[0-9]?){6,14}[0-9]$/; 
    $("#Valider").click(function (e) { 
        if (regex.test($("#Regex").val())) {
            $("#Regex").css('border-color','green');
            $("#helpId").css('visibility','hidden');
        }
        else{
            alert('Veillez Saisir un numero de telephone');
            $("#Regex").css('border-color','red');
            $("#helpId").css('visibility','visible');
        }
    });
})();