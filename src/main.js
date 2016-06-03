var Vue = require('vue')
// require a *.vue component
var App = require('./components/App.vue')

// mount a root Vue instance
new Vue({
  el: 'body',
  components: {
    // include the required component
    // in the options
    app: App
  }
})