<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Liste des vidéos</h2>
    <ul>
      <li v-for="i in nb">Lien vers la vidéo {{i}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA',
      nb: 200
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
