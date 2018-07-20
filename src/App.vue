<template>
  <div id="app">
    <div class="section">
      <Generator />
    </div>
    <div class="section has-text-centered">
      <Gif />
    </div>
  </div>
</template>

<script>
import Generator from './components/Generator.vue'
import Gif from './components/Gif.vue'

export default {
  name: 'app',
  components: {
    Generator,
    Gif
  }
}
</script>
