/*

Desafio Contagem de Medalhas
//Crie um programa que receba o número de medalhas de ouro, prata e bronze de um país nas Olimpíadas e calcule o total de medalhas. 
//Quando escrever 'sair', o programa deverá encerrar e mostrar na tela o ranking de medalhas no formato:
Exemplo: #Ranking de medalhas:
#Brasil: 7 medalhas
#França: 6 medalhas
#Argentina: 3 medalhas

Link de entrega da atividade: https://docs.google.com/forms/d/e/1FAIpQLSfSeGhSF6641-IgBnyY7IxTZAUcTAE_fL9NeToPUOWrVd3qfg/closedform

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

  /*
Boa tarde, meninas!
Deixo aqui uma explicação do que tentei fazer.
Eu usei como base a lógica aplicada no exercício de emissão de carbono. Vejo como uma "cópia", mas a minha tentativa foi 
compreender a lógica porque não estava conseguindo partir para a estuturação inicial do código - é uma dificuldade que tenho
e com o olho no relógio,travei mais ainda- então fui tentando adaptar ao contexto do exercício proposto.
Ele está com um bug após a inserção do terceiro país e inserção de valor correto (mostra alerta indicando que o valor não é válido,
não consegui consertar).

  */

