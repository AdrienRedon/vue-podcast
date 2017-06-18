<template>
  <div>
    <youtube :video-id="store.current" @ready="ready" @playing="playing" @paused="paused" :player-vars="{autoplay: 1}" v-if="store.current != null"></youtube>
  </div>
</template>

<script>
import store from '@/store'

export default {
  data () {
    return {
      store: store.state
    }
  },
  methods: {
    ready (player) {
      store.setPlayer(player)
    },
    playing (player) {
      // The player is playing a video.
      store.play(this.store.current)
    },
    paused (player) {
      store.pause()
    }
  }
}
</script>

<style scoped>

</style>
