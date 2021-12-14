
$.getJSON('https://servicodados.ibge.gov.br/api/v1/localidades/estados/', function (json) {
 
        var options = '<option value="">Selecionar um tipo</option>';
 
        for (var i = 0; i < json.length; i++) {
 
            options += '<option data-id="' + json[i].id + '" value="' + json[i].nome + '" >' + json[i].nome + '</option>';
 
        }
 
        $("select[name='estado']").html(options);
 
    });
 
 
   