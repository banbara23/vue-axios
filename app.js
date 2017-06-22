// ./app.js
const vm = new Vue({
  el: '#app',
  data: {
    results: []
  },
  mounted() {
    axios.get("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=637ccc32451647de87be2e19694bc59f")
      .then(response => { this.results = response.data.results })
  }
});