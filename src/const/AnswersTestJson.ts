
export const AnswersTestJson = new Map<number, any[]>([
  [1, [{
    id: 1005,
    text: `Я так решил:
    let mytext = \`Давайте посмотрим, что такого особенного в JavaScript, почему именно он, 
    и какие еще технологии существуют, кроме JavaScript.
    Что такое JavaScript?
    JavaScript изначально создавался для того, чтобы сделать web-странички «живыми».\`
    
    function findWord(word, text) {
      let i = text.indexOf(word);
      if (i == -1) return;
      while (i !== -1) {
        console.log(word);
        i = text.indexOf(word, i + 1);
      }
    }
    
    findWord("JavaScript", mytext);`,
    author: 'Человек-паук',
    autorId: 2,
    datetime: 1561888300,
    rating: 1
  }]],
  [2, [
    {id: 1002,
    text: `Оу, как-то сложно, а это точно не на миддла задача? 
    Если бы только пробелы, я бы попробовал решить`,
    author: 'Леонид Агутин',
    autorId: 1,
    datetime: 1561835300,
    rating: 0
  }]],
  [3, [{id: 1000,
      text: `Мне кажется, что текст будет зеленым, green.`,
      author: 'Человек-паук',
      autorId: 2,
      datetime: 1561815300,
      rating: -1,
      comments: [{
        id: 1001,
        text: 'Не, ну как он может быть зеленым, там же !important на синем.',
        author: 'Леонид Агутин',
        autorId: 1,
        datetime: 1561825300,
        rating: 2
    }]
  }]],
  [4, []],
  [5, [{id: 1003,
    text: `Пипец, ну и задача! Только в далеких планах. Отмечусь, посмотрю.`,
    author: 'Леонид Агутин',
    autorId: 1,
    datetime: 1561837300,
    rating: 0
  },{id: 1004,
    text: `Ждем гения!)`,
    author: 'Человек-паук',
    autorId: 2,
    datetime: 1561838300,
    rating: 0
  }]],
])