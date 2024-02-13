const perguntas = [
    {
      pergunta: "Qual é o operador de comparação estrita em JavaScript?",
      respostas: [
        "==",
        "===",
        "!=",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a maneira correta de declarar uma variável em JavaScript?",
      respostas: [
        "var",
        "let",
        "const",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a sintaxe correta para um comentário de uma linha em JavaScript?",
      respostas: [
        "//",
        "/*",
        "*/",
      ],
      correta: 0
    },
    {
      pergunta: "Qual método é usado para adicionar um elemento ao final de um array em JavaScript?",
      respostas: [
        "push()",
        "append()",
        "addToEnd()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função de `console.log()` em JavaScript?",
      respostas: [
        "Exibir uma mensagem de alerta",
        "Registrar informações no console",
        "Executar uma função",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o resultado da expressão `5 + '5'` em JavaScript?",
      respostas: [
        "10",
        "55",
        "Error",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função de `document.getElementById()` em JavaScript?",
      respostas: [
        "Selecionar um elemento pelo nome da classe",
        "Selecionar um elemento pelo ID",
        "Selecionar um elemento pelo nome da tag",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o resultado da expressão `typeof([])` em JavaScript?",
      respostas: [
        "array",
        "object",
        "undefined",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a maneira correta de escrever um loop `for` em JavaScript?",
      respostas: [
        "for (i = 0; i < 5; i++)",
        "for (i < 5; i++)",
        "for (var i = 0; i < 5; i++)",
      ],
      correta: 2
    },
    {
      pergunta: "Qual método é usado para remover o último elemento de um array em JavaScript?",
      respostas: [
        "pop()",
        "remove()",
        "delete()",
      ],
      correta: 0
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // loop de repetição
  
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'perguna-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
  
        corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item)
        }
  
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
  
      quizItem.querySelector('dl').appendChild(dt)
    }
  
  // para ocultar a resposta
    quizItem.querySelector('dl dt').remove()
  
    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }