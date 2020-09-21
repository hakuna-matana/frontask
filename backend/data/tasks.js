const Tasks = [{
  id: 1,
  title: 'Задача на поиск вхождений',
  description: 'Есть текст, нужно найти все вхождения слова "javascript" и вывести console.log на каждое вхождение',
  author: 'Человек-паук',
  autorId: 2,
  countAnswers: 1,
  category: ['javascript', 'algorithms'],
  level: 'junior',
  rating: 0,
  answeredAt: 1561815268,
  createDate: 1561815268,
  selfRating: 1
},{
  id: 2,
  title: 'Посчитай количество слов',
  description: 'Дается текст, нужно вывести количество слов. В тексте могут быть пробелы, запятые, точки.',
  author: 'Человек-паук',
  autorId: 2,
  countAnswers: 1,
  category: ['javascript', 'algorithms'],
  level: 'junior',
  rating: 2,
  createDate: 1561815268,
  selfRating: 0
},{
  id: 3,
  title: 'Какого цвета будет текст',
  description: `Есть тег 
    <p class='blue' id='red' style={color:green}>Текст</p>
    Содержимое style.css:
    #red {color:red}
    p.blue {color:blue !important}
    Какой цвет внутри тега p будет в итоге?
    `,
  author: 'Леонид Агутин',
  autorId: 1,
  countAnswers: 1,
  category: ['css', 'html'],
  level: 'junior',
  rating: -2,
  createDate: 1561815268,
  selfRating: -1
},{
  id: 4,
  title: 'Отсортировать массив',
  description: 'Дан числовой массив, элементы массива могут повторяться. Напиши свою реализацию сортировки, старый массив не должен измениться.',
  author: 'Человек-паук',
  autorId: 2,
  countAnswers: 0,
  category: ['algorithms'],
  level: 'junior',
  rating: 0,
  answeredAt: 1561815268,
  createDate: 1561815268,
  selfRating: 0
},{
  id: 5,
  title: 'Создать глубокий клон объекта',
  description: 'Дан объект или массив, нужно сделать его клубокий клон. Он может содержать другие объекты, массивы или простые типы данных.',
  author: 'Человек-паук',
  autorId: 2,
  countAnswers: 2,
  category: ['javascript', 'algorithms'],
  level: 'middle',
  rating: 0,
  createDate: 1561815268,
  selfRating: 0
}];

module.exports = Tasks;