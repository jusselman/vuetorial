
new Vue ({
  el: '#app',
  data: {
    title: "Hello World!",
    link: 'https://www.google.com/',
    finishedLink: '<a href="http://google.com">Google</a>'
  },
  methods: {
    sayHello: function() {
    return this.title;
    }
  }
})
