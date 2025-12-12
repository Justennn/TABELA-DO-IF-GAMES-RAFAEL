// pega os valores no navegador
var entradas = JSON.parse(localStorage.getItem('entradas')) || [];

// coloca cada turma como zerada
var totalAdm1_1 = 0;
var totalAdm1_2 = 0;
var totalAdm2 = 0;
var totalAdm3 = 0;
var totalAdm4 = 0;
var totalInf1 = 0;
var totalInf2 = 0;
var totalInf3 = 0;

// Calcula somas percorrendo as entradas
entradas.forEach(function(entrada) {
    totalAdm1_1 += parseInt(entrada.adm1_1) || 0;
    totalAdm1_2 += parseInt(entrada.adm1_2) || 0;
    totalAdm2 += parseInt(entrada.adm2) || 0;
    totalAdm3 += parseInt(entrada.adm3) || 0;
    totalAdm4 += parseInt(entrada.adm4) || 0;
    totalInf1 += parseInt(entrada.inf1) || 0;
    totalInf2 += parseInt(entrada.inf2) || 0;
    totalInf3 += parseInt(entrada.inf3) || 0;
});


var tabelaHTML = `
    <table>
        <tr>
            <th>Jogo</th>
            <th>1° ADM1</th>
            <th>1° ADM2</th>
            <th>2° ADM</th>
            <th>3° ADM</th>
            <th>4° ADM</th>
            <th>1° INF</th>
            <th>2° INF</th>
            <th>3° INF</th>
        </tr>
`;


entradas.forEach(function(entrada) {
    tabelaHTML += `
        <tr>    
            <td>${entrada.jogo}</td>
            <td>${entrada.adm1_1}</td>
            <td>${entrada.adm1_2}</td>
            <td>${entrada.adm2}</td>
            <td>${entrada.adm3}</td>
            <td>${entrada.adm4}</td>
            <td>${entrada.inf1}</td>
            <td>${entrada.inf2}</td>
            <td>${entrada.inf3}</td>
        </tr>
    `;
});


tabelaHTML += `
    <tr style="background-color: #e9ecef; font-weight: bold;">
        <td>Total</td>
        <td>${totalAdm1_1}</td>
        <td>${totalAdm1_2}</td>
        <td>${totalAdm2}</td>
        <td>${totalAdm3}</td>
        <td>${totalAdm4}</td>
        <td>${totalInf1}</td>
        <td>${totalInf2}</td>
        <td>${totalInf3}</td>
    </tr>
`;

tabelaHTML += '</table>';


document.getElementById('tabela').innerHTML = tabelaHTML;

function gerarPDF()
{
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    doc.text("Resultado do if Games", 10, 10);
    const tabelaHTML =  document.querySelector("#tabela table");

doc.autoTable({
    html: tabelaHTML,
    startY: 20
});
doc.save("pontuacao.pdf");
}