const app1 = new Vue({
  el: '#app1',
  data: {
    input: '',
  }
});

const app2 = new Vue({
  el: '#app2',
  data: {
    input: '',
  }
});

const app3 = new Vue({
  el: '#app3',
  data: {
    input: 0,
  },
  computed: {
    year: function() {
      return new Date().getFullYear() - this.input;
    },
  },
});

const app4 = new Vue({
  el: '#app4',
  data: {
    input: '',
  },
  computed: {
    user: function() {
      const user = ['', '', ''];
      this.input
        .split(' ')
        .forEach((item, index) => {
          user[index] = item;
        });

      return user;
    },
  },
});

const app5 = new Vue({
  el: '#app5',
  data: {
    input: '',
    value: '',
  },

  methods: {
    setValue: function(event) {
      event.preventDefault();
      this.value = this.input;
      this.input = '';
    },
  },
});

const app6 = new Vue({
  el: '#app6',
  data: {
    num1: 0,
    num2: 0,
    summ: 0,
  },

  methods: {
    getSumm: function(event) {
      event.preventDefault();
      this.summ = parseInt(this.num1) + parseInt(this.num2);
      this.num1 = this.num2 = 0;
    },
  },
});

const app7 = new Vue({
  el: '#app7',
  data: {
    first: '',
    second: '',
    third: '',
    fullName: '',
  },

  methods: {
    getFullName: function(event) {
      event.preventDefault();
      this.fullName = `${this.first} ${this.second} ${this.third}`;
      this.first = this.second = this.third = '';
    },
  },
});

const app8 = new Vue({
  el: '#app8',
  data: {
    names: ['Коля', 'Вася', 'Петя', 'Иван', 'Дима'],
    input: '',
  },
  methods: {
    addItem: function() {
      this.names = [...this.names, this.input];
      this.input = '';
    },
  }
});

const app9 = new Vue({
  el: '#app9',
  data: {
    names: ['Коля', 'Вася', 'Петя', 'Иван', 'Дима'],
    input: '',
  },
  methods: {
    addItem: function() {
      this.names = [...this.names, this.input];
      this.input = '';
    },
    deleteItem: function(index) {
      this.names = this.names.filter((_, _index) => index !== _index);
    }
  }
});

const app10 = new Vue({
  el: '#app10',
  data: {
    hrefs: [
      {href: '1.html', text: 'ссылка 1'},
      {href: '2.html', text: 'ссылка 2'},
      {href: '3.html', text: 'ссылка 3'},
    ],
    href: '',
    text: '',
  },
  methods: {
    addItem: function() {
      this.hrefs = [...this.hrefs, {
          href: this.href,
          text: this.text,
        },
      ];
      this.href = this.text = '';
    },
  }
});

const app11 = new Vue({
  el: '#app11',
  data: {
    names: ['Коля', 'Вася', 'Петя', 'Иван', 'Дима'],
    input: '',
  },
  methods: {
    deleteItem: function() {
      const index = parseInt(this.input) - 1;
      this.names = this.names.filter((_, _index) => _index !== index);
      this.input = '';
    },
  }
});

const app12 = new Vue({
  el: '#app12',
  data: {
    users: [
      {name: 'Коля', age: 30},
      {name: 'Вася', age: 40},
      {name: 'Петя', age: 50},
    ],
    name: '',
    age: '',
  },
  methods: {
    addUser: function() {
      const { name, age } = this;
      console.log(name, age)
      this.users = [...this.users, { name, age }];
      this.name = this.age = '';
    }
  }
});