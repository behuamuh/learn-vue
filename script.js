const app2 = new Vue({
  el: '#app2',
  data: {
    text: 'text'
  },
});

const app3 = new Vue({
  el: '#app3',
  data: {
    text: '<p>текст</p>',
  },
});

const app4 = new Vue({
  el: '#app4',
  data: {
    text1: '<p>текст1</p>',
    text2: '<p>текст2</p>',
  },
});

const app5 = new Vue({
  el: '#app5',
  data: {
    attr: 'block',
  },
});

const app6 = new Vue({
  el: '#app6',
  data: {
    str: 'block',
  },
});

const app7 = new Vue({
  el: '#app7',
  data: {
    style: {
      background: 'green',
      borderRadius: '30px',
    }
  },
});

const app8 = new Vue({
  el: '#app8',
  data: {
    show: true,
  },
});

const app9 = new Vue({
  el: '#app9',
  data: {
    letters: ['a', 'b', 'c', 'd', 'e'],
  },
});

const app10 = new Vue({
  el: '#app10',
  methods: {
    getText: () => '<p>текст</p>',
  },
});

const app11 = new Vue({
  el: '#app11',
  methods: {
    getNum1: () => 1,
    getNum2: () => 2,
  },
});

const app12 = new Vue({
  el: '#app12',
  data: {
    name: 'Иван',
    age: 25,
  },
});

const app13 = new Vue({
  el: '#app13',
  methods: {
    showMessage: () => {
      alert('hello!');
    },
  },
});

const app14 = new Vue({
  el: '#app14',
  data: {
    name: 'Иван',
    age: 25,
  },
  methods: {
    showName: function () {
      alert(this.name);
    },
  },
});

const app15 = new Vue({
  el: '#app15',
  data: {
    name: 'Иван',
    age: 25,
  },
  methods: {
    changeData: function () {
      this.name = 'Коля';
      this.age = 30;
    },
  },
});

const app16 = new Vue({
  el: '#app16',
  data: {
    name: 'Иван',
    show: true,
  },
  methods: {
    changeData: function () {
      this.show = !this.show;
    },
  },
});

const app17 = new Vue({
  el: '#app17',
  data: {
    name: 'Иван',
    age: 25,
    show: false,
  },
  methods: {
    changeData: function () {
      this.show = true;
    },
  },
});

const app18 = new Vue({
  el: '#app18',
  data: {
    name: 'Иван',
    age: 25,
    show: false,
  },
  methods: {
    changeData: function () {
      this.show = !this.show;
    },
  },
});

const app19 = new Vue({
  el: '#app19',
  data: {
    name: 'Иван',
    age: 25,
    show: false,
  },
  methods: {
    changeData: function () {
      this.show = !this.show;
    },
  },
});

const app20 = new Vue({
  el: '#app20',
  data: {
    names: ['Коля', 'Вася', 'Петя'],
  },
});

const app21 = new Vue({
  el: '#app21',
  data: {
    names: ['Коля', 'Вася', 'Петя'],
  },
});

const app22 = new Vue({
  el: '#app22',
  data: {
    hrefs: [
      { href: '1.html', text: 'ссылка 1' },
      { href: '2.html', text: 'ссылка 2' },
      { href: '3.html', text: 'ссылка 3' },
    ]
  },
});

const app23 = new Vue({
  el: '#app23',
  data: {
    names: ['Коля', 'Вася', 'Петя', 'Иван', 'Дима'],
  },
});

const app24 = new Vue({
  el: '#app24',
  data: {
    names: ['Коля', 'Вася', 'Петя', 'Иван', 'Дима'],
  },
  methods: {
    addItem: function() {
      this.names = [...this.names, 'Пункт'];
    },
  }
});

const app25 = new Vue({
  el: '#app25',
  data: {
    names: ['Коля', 'Вася', 'Петя', 'Иван', 'Дима'],
  },
  methods: {
    deleteItem: function() {
      this.names = this.names.slice(0, -1);
    },
  }
});

const app26 = new Vue({
  el: '#app26',
  data: {
    names: ['Коля', 'Вася', 'Петя', 'Иван', 'Дима'],
  },
  methods: {
    deleteItem: function(index) {
      this.names = this.names.filter((_, _index) => index !== _index);
    },
  }
});
