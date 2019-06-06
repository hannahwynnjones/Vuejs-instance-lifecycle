// Put this in the script section in JSFiddle
// In a local setup, you need to merge this and the index.html file into one file
console.log('hello');

new Vue({
	el: '#app',
	data: {
    title: 'A nice title'
	},
  beforeCreate: function() {
    console.log('BeforeCreate()');
  },
  created: function() {
    console.log('created()');
  },
  beforeMount: function() {
    console.log('beforeMount()');
  },
  mounted: function() {
    console.log('mounted()');
  },
  beforeUpdate: function() {
    console.log('beforeUpdate()');
  },
  updated: function() {
    console.log('updated()');
  },
  beforeDestroy: function() {
    console.log('beforeDestroy()');
  },
  destroyed: function() {
    console.log('destroyed()');
  },
  methods: {
    destroy: function() {
      this.$destroy()
      console.log('Destroyed!!');
    }
  }
})
