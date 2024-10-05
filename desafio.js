/* 

Desenvolva um programa em JavaScript que permita ao usuário inserir os níveis de emissões de carbono de 
diferentes países (em toneladas por ano) e calcule o impacto cumulativo das emissões no aquecimento global. 
O programa deve:

1- Permitir a entrada do nome do país e das emissões anuais em toneladas de CO₂.

2- Continuar pedindo entradas até que o usuário digite "sair".

3- Exibir um relatório com a média das emissões de todos os países, o país com a maior e a menor emissão.

*/

// Função principal
/*function calcularEmissoesCarbono() {
    let paises = [];
    let emissoes = [];
    let totalEmissoes = 0;
  
    while (true) {
      let pais = prompt("Digite o nome do país (ou 'sair' para terminar):");
  
      if (pais.toLowerCase() === "sair") {
        break;
      }
  
      let emissao = parseFloat(prompt(`Digite as emissões de carbono de ${pais} em toneladas por ano:`));
  
      if (!isNaN(emissao)) {
        paises.push(pais);
        emissoes.push(emissao);
        totalEmissoes += emissao; 
      } else {
        alert("Por favor, insira um valor numérico válido para as emissões.");
      }
    }
  
    if (paises.length > 0) {
      let mediaEmissoes = totalEmissoes / emissoes.length;
  
      let maiorEmissao = emissoes[0];
      let menorEmissao = emissoes[0];
      let paisMaiorEmissao = paises[0];
      let paisMenorEmissao = paises[0];
  
      for (let i = 1; i < emissoes.length; i++) {
        if (emissoes[i] > maiorEmissao) {
          maiorEmissao = emissoes[i];
          paisMaiorEmissao = paises[i];
        }
        if (emissoes[i] < menorEmissao) {
          menorEmissao = emissoes[i];
          paisMenorEmissao = paises[i];
        }
      }
  
      alert(`Relatório de Emissões de Carbono:
      - Média de emissões: ${mediaEmissoes.toFixed(2)} toneladas/ano
      - País com maior emissão: ${paisMaiorEmissao} (${maiorEmissao} toneladas/ano)
      - País com menor emissão: ${paisMenorEmissao} (${menorEmissao} toneladas/ano)`);
    } else {
      alert("Nenhum dado de emissão foi inserido.");
    }
  }
  
  calcularEmissoesCarbono();
  */

  function calcularMedalhas() {
    let paises = [];
    let medalhas = [];
    let totalMedalhas = 0;
  
    while (true) {
      let pais = prompt("Digite o nome do país (ou 'sair' para terminar):");
  
      if (pais.toLowerCase() === "sair") {
        break;
      }
  
      let medalha = parseFloat(prompt(`Digite quantas medalhas ${pais} conquistou nas olimpíadas de 2024:`));
  
      if (!isNaN(medalhas)) {
        paises.push(pais);
        medalhas.push(medalha);
        totalMedalhas += medalha; 
      } else {
        alert("Por favor, insira um valor numérico inteiro para as medalhas.");
      }
    }
  
    if (paises.length > 0) {
      let mediaMedalhas= totalMedalhas / medalhas.length;
  
      let maiorMedalhas= medalhas[0];
      let menorMedalhas = medalhas[0];
      let paisMaiorMedalhas = paises[0];
      let paisMenorMedalhas = paises[0];
  
      for (let i = 1; i < medalhas.length; i++) {
        if (medalhas[i] > maiorMedalhas) {
          maiorMedalhas = medalhas[i];
          paisMaiorMedalhas = paises[i];
        }
        if (medalhas[i] < menorMedalhas) {
          menorMedalhas = medalhas[i];
          paisMenorMedalhas = paises[i];
        }
      }
  
      alert(`Relatório de Medalhas conquistadas nas olimpíadas:
      - País com maior número de medalhas: ${paisMaiorMedalhas} (${maiorMedalhas} toneladas/ano)
      - País com menor número de medalhas: ${paisMenorMedalhas} (${menorMedalhas} toneladas/ano)`);
    } else {
      alert("Nenhuma quantidade de medalha foi inserida.");
    }
  }

  calcularMedalhas();



  