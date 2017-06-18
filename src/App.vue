<template>
  <div id="app">
    <header>
      <top-menu></top-menu>
    </header>
    <main>
      <router-view></router-view>
      <player class="fixed-player"></player>
    </main>
  </div>
</template>

<script>
import Player from '@/components/Player'
import TopMenu from '@/components/TopMenu'

export default {
  name: 'app',
  components: {
    Player,
    TopMenu
  }
}
</script>

<style>
html, body {
  margin: 0;
  box-sizing: border-box;
}

*, *:after, *:before {
  box-sizing: inherit;
}

.fixed-player {
  position: fixed;
  bottom: 20px;
  right: 20px;
}
</style>
