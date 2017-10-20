<template>
  <div class="hello">
    <h2>Liste des vidéos</h2>
    <ul>
      <li v-for="video in store.videos">
        <a @click="play(video.id)">{{video.title}}</a>
        <a v-if="video.id == store.current && !store.pause" @click="pause()">⏸</a>
        <a v-else @click="play(video.id)">▶️</a>
      </li>
    </ul>
  </div>
</template>

<script>
import store from '@/store'
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA',
      store: store.state
    }
  },
  methods: {
      pause (id) {
          store.pause()
      },
      play (id) {
          store.play(id)
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
