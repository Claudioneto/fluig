var DigitoCPF = SuperWidget.extend({
    //BIND de eventos
    bindings: {
        local: {
            'gerar-digitos': ['click_gerarDigito']
        },
        global: {}
    },
 
    gerarDigito: function(){
        var numerosCPF = $('#cpf').val();

        var soma = 0;
        for (i = 10; i > 1; i--)
            soma += numerosCPF.charAt(10 - i) * i;

        var resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;

        numerosCPF += resultado.toString();

        soma = 0;
        
        for (i = 11; i > 1; i--)
            soma += numerosCPF.charAt(11 - i) * i;

        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;

        numerosCPF += resultado.toString();

        $('#cpfCompleto').val(numerosCPF);
    }

});

