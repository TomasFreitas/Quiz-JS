const perguntas = [
  {
    pergunta: "Qual é o nome completo do jogador Cristiano Ronaldo?",
    respostas: [
      "Cristiano Ronaldo dos Santos Aveiro",
      "Cristiano Ronaldo de Lima",
      "Cristiano Ronaldo da Silva",
    ],
    correta: 0
  },
  {
    pergunta: "Em que país Cristiano Ronaldo nasceu?",
    respostas: [
      "Portugal",
      "Brasil",
      "Espanha",
    ],
    correta: 0
  },
  {
    pergunta: "Quantas vezes Cristiano Ronaldo ganhou a Bola de Ouro?",
    respostas: [
      "3 vezes",
      "6 vezes",
      "5 vezes",
    ],
    correta: 2
  },
  {
    pergunta: "Qual clube Cristiano Ronaldo jogou antes de se transferir para o Real Madrid?",
    respostas: [
      "Manchester United",
      "Sporting de Portugal",
      "Inter de Milão",
    ],
    correta: 0
  },
  {
    pergunta: "Quantos gols Cristiano Ronaldo marcou na Copa do Mundo de 2018?",
    respostas: [
      "3 gols",
      "6 gols",
      "4 gols",
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o recorde de gols marcados por Cristiano Ronaldo em uma única temporada da UEFA Champions League?",
    respostas: [
      "12 gols",
      "17 gols",
      "15 gols",
    ],
    correta: 1
  },
  {
    pergunta: "Aonde nasceu Cristiano Ronaldo?",
    respostas: [
      "Porto",
      "Ilha da madeira",
      "Bragança",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a altura aproximada de Cristiano Ronaldo?",
    respostas: [
      "1,82m",
      "1,91m",
      "1,87m",
    ],
    correta: 2
  },
  {
    pergunta: "Quantos filhos Cristiano Ronaldo tem?",
    respostas: [
      "2 filhos",
      "3 filhos",
      "5 filhos",
    ],
    correta: 2
  },
  {
    pergunta: "Em que ano Cristiano Ronaldo se transferiu para a Juventus?",
    respostas: [
      "2020",
      "2019",
      "2018",
    ],
    correta: 2
  },
];

  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  //loop para repetir as perguntas
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    //loop para repetir as alternativas
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true) 
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta =  event.target.value == item.correta
        corretas.delete(item)
        if (estaCorreta) {
          corretas.add(item)
        }
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
      
      quizItem.querySelector('dl').appendChild(dt)
    }
    
    quizItem.querySelector('dl dt').remove()
  
    //colocar pergunta na tela
    quiz.appendChild(quizItem)
  }