const perguntas = [
    {
      pergunta: "O que é JavaScript?",
      respostas: [
        "Uma linguagem de programação para estilizar páginas web.",
        "Uma linguagem de programação para interação do lado do servidor.",
        "Uma linguagem de programação para tornar páginas web dinâmicas.",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a função do operador '===' em JavaScript?",
      respostas: [
        "Comparação estrita de valores e tipos.",
        "Comparação de valores, ignorando os tipos.",
        "Atribuição de valores.",
      ],
      correta: 0
    },
    {
      pergunta: "O que é um closure em JavaScript?",
      respostas: [
        "Uma função que não tem acesso ao escopo global.",
        "Um objeto que contém métodos relacionados.",
        "Uma função que tem acesso ao escopo onde foi criada, mesmo após sair desse escopo.",
      ],
      correta: 2
    },
    {
      pergunta: "Como declarar uma variável em JavaScript?",
      respostas: [
        "var myVar;",
        "let myVar;",
        "const myVar;",
      ],
      correta: 2
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Uma linguagem de marcação para criar páginas web.",
        "Um objeto que representa a estrutura da página web e permite sua manipulação.",
        "Uma biblioteca JavaScript para criação de gráficos interativos.",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a finalidade do método 'addEventListener' em JavaScript?",
      respostas: [
        "Para adicionar estilos a elementos HTML.",
        "Para adicionar um evento a um elemento HTML.",
        "Para criar uma nova variável.",
      ],
      correta: 1
    },
    {
      pergunta: "O que é JSON em JavaScript?",
      respostas: [
        "Uma linguagem de programação para manipulação de banco de dados.",
        "Uma forma de representar dados estruturados em formato de texto.",
        "Um método para declarar variáveis.",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a diferença entre 'let' e 'const' na declaração de variáveis?",
      respostas: [
        "Ambos são usados para declarar variáveis, sem diferença significativa.",
        "let é usado para variáveis mutáveis, enquanto const é usado para variáveis imutáveis.",
        "const é usado para variáveis mutáveis, enquanto let é usado para variáveis imutáveis.",
      ],
      correta: 1
    },
    {
      pergunta: "O que é o AJAX em JavaScript?",
      respostas: [
        "Uma biblioteca para criar animações em páginas web.",
        "Uma técnica que permite atualizar partes de uma página sem recarregá-la completamente.",
        "Um método para criar alertas em JavaScript.",
      ],
      correta: 1
    },
    {
      pergunta: "Como se realiza uma iteração em um array em JavaScript?",
      respostas: [
        "Com a estrutura 'if...else'.",
        "Com o loop 'while'.",
        "Com o loop 'for'.",
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