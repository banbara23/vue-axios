// ./app.js
const NYTbaseUrl = "https://api.nytimes.com/svc/topstories/v2/";
const ApiKey = "637ccc32451647de87be2e19694bc59f";

function buildUrl(url) {
  return NYTbaseUrl + url + '.json?api-key=' + ApiKey;
}

const vm = new Vue({
  el: '#app',
  data: {
    results: []
  },
  mounted() {
    this.getPosts('home');
  },
  methods: {
    getPosts(section) {
      let url = buildUrl(section);
      axios.get(url).then((response) => {
        this.results = response.data.results;
      }).catch(error => { console.log(error); })
    }
  }
});