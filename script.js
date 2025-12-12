function enviar() {
    
    var jogo = document.getElementById('jogo').value;
    var adm1_1 = document.getElementById('adm1_1').value || '0';
    var adm1_2 = document.getElementById('adm1_2').value || '0';
    var adm2 = document.getElementById('adm2').value || '0';
    var adm3 = document.getElementById('adm3').value || '0';
    var adm4 = document.getElementById('adm4').value || '0';
    var inf1 = document.getElementById('inf1').value || '0';
    var inf2 = document.getElementById('inf2').value || '0';
    var inf3 = document.getElementById('inf3').value || '0';
    
    // cria o objeto com os dados
    var novaEntrada = {
        jogo: jogo,
        adm1_1: adm1_1,
        adm1_2: adm1_2,
        adm2: adm2,
        adm3: adm3,
        adm4: adm4,
        inf1: inf1,
        inf2: inf2,
        inf3: inf3
    };
    
    // pega do navegador
    var entradas = JSON.parse(localStorage.getItem('entradas')) || [];
    
 
    entradas.push(novaEntrada);
    
    // salva no navegador
    localStorage.setItem('entradas', JSON.stringify(entradas));
    
    // manda para a tabela
    window.location.href = 'index2.html';
}