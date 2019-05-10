const app1 = new Vue({
  el: '#app1',
  data: {
    checked: [],
    list: [1, 2, 3, 4, 5],
  },
});

const app2 = new Vue({
  el: '#app2',
  data: {
    users: [
      {name: 'Коля', surname: 'Иванов', salary: 30, checked: true},
      {name: 'Вася', surname: 'Петров', salary: 40, checked: true},
      {name: 'Петя', surname: 'Сидоров', salary: 50, checked: true},
    ],
  },
  computed: {
    salarySumm: function() {
      return this.users.reduce((sum, user) => {
        return user.checked
          ? sum + user.salary
          : sum;
      }, 0);
    },
  },
});

const app3 = new Vue({
  el: '#app3',
  data: {
    list: [1, 2, 3, 4, 5],
    checked: [],
  },
  created: function() {
    this.checked = this.list.map(_ => true);
  }
});

const app4 = new Vue({
  el: '#app4',
  data: {
    users: [
      {name: 'Коля', surname: 'Иванов', age: 30},
      {name: 'Вася', surname: 'Петров', age: 40},
      {name: 'Петя', surname: 'Сидоров', age: 50},
    ],
    checked: [],
  },
  created: function() {
    this.checked = this.users.map(_ => true);
  }
});

const app5 = new Vue({
  el: '#app5',
  data: {
    list: [1, 2, 3, 4, 5],
    checked: [],
  },
  methods: {
    setActive: function(index) {
      this.checked = this.checked.map((item, _index) => {
        return index === _index
          ? true
          : item;
      });
    },
    unsetActive: function(index) {
      this.checked = this.checked.map((item, _index) => {
        return index === _index
          ? false
          : item;
      });
    },
  },
  created: function() {
    this.checked = this.list.map(_ => false);
  },
});

const app6 = new Vue({
  el: '#app6',
  data: {
    users: [
      {name: 'Коля', age: 30},
      {name: 'Вася', age: 40},
      {name: 'Петя', age: 50},
    ],
    checked: [
      {name: false, age: false},
      {name: false, age: false},
      {name: false, age: false},
    ],
  },
  methods: {
    toggleActive: function(index, prop) {
      this.checked = this.checked.map((item, _index) => {
        return index === _index
          ? {...item, [prop]: !item[prop]}
          : item ;
      })
    },
  },
});
