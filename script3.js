const app1 = new Vue({
  el: '#app1',
  data: {
    text: '',
  },
});

const app2 = new Vue({
  el: '#app2',
  data: {
    checked: false,
  },
});

const app3 = new Vue({
  el: '#app3',
  data: {
    checked: false,
  },
});

const app4 = new Vue({
  el: '#app4',
  data: {
    selected: '',
  },
});

const app5 = new Vue({
  el: '#app5',
  data: {
    selected: 1,
    cities: [
      'Абакан',
      'Азов',
      'Александров',
      'Алексин',
      'Альметьевск',
      'Анапа',
      'Ангарск',
    ],
  },
});

const app6 = new Vue({
  el: '#app6',
  data: {
    selected: '',
  },
});

const app7 = new Vue({
  el: '#app7',
  data: {
    input: '',
    texts: [],
  },
  methods: {
    addText: function() {
      this.texts = [...this.texts, this.input];
      this.input = '';
    }
  }
});

const app8 = new Vue({
  el: '#app8',
  data: {
    colors: ['red', 'yellow', 'green', 'blue'],
    selected: 0,
  },
});

const app9 = new Vue({
  el: '#app9',
  data: {
    checked: '',
  },
  computed: {
    checkbox: function() {
      return this.checked === 'checked';
    }
  }
});
