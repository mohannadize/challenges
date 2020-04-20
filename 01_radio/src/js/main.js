Vue.component('app-component', {
  props: ['app'],
  template: '<li>{{ app }}</li>'
})

new Vue({
  el: '#app',
  data: {
    app: "cool"
  }
})
