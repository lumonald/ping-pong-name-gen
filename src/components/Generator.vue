<template>
  <div class="container">
    <h1 class="title">Today, it shall be called...</h1>
    <b-message type="is-info" id="result" size="is-medium">
      <div id="result_text" class="has-text-centered">Ping Pong</div>
    </b-message>
    <button v-on:click="set_generated_name" class="button is-primary is-large is-fullwidth">
     {{ text }} 
     <font-awesome-icon icon="sync" fixed-width />
    </button>
  </div>
</template>

<script>
export default {
  name: 'Generator',
  data(){
    return {
      text: "Re-Generate",
      first_words: ['Table','Ping','Bat','Paddle','Surface-net','Wiff','Mini-tennis','Table-bat','Pingus','Table-top'],
      second_words: ['ball-bounce','boing-ball','tennis','pong','pongus','ball','waff','battle','bounce-bounce'],
    }
  },
  methods: {
    get_random_word(array=[]){
      return array[Math.floor(Math.random()*array.length)];
    },
    get_generated_name(){
      var random_1=this.get_random_word(this.first_words);
      var random_2=this.get_random_word(this.second_words);
      return random_1 + ' ' + random_2;
    },
    set_generated_name(){
      var result_target=document.getElementById('result_text');
      result_target.innerHTML= this.get_generated_name();
    }
  } 
}
</script>
