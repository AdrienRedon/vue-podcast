export default {
  state: {
    current: null,
    player: null,
    pause: false,
    videos: [
      {
        title: 'WTC 1',
        id: 'OsAT9DPNC4Q'
      },
      {
        title: 'WTC 2',
        id: 'n2MCSxZh_9Y'
      },
      {
        title: 'WTC 3',
        id: 'ivxwp4pY3ZQ'
      }
    ]
  },

  setCurrent(id) {
    this.state.current = id
    this.state.pause = false
  },
  setPlayer(player) {
    this.state.player = player
  },
  pause() {
    console.log('paused')
    if (this.state.player) {
      this.state.player.pauseVideo()
      this.state.pause = true
    }
  },
  play(id) {
    console.log('play')    
    this.state.current = id
    if (this.state.player) {
      this.state.player.playVideo()
      this.state.pause = false
    }
  }
}