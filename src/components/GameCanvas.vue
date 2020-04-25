<template>
  <div>
    <button class="clearButton" @click="handleRestart">Clear</button>

    <div class="fieldContainer">
      <template v-for="(field, index) in this.$root.$data.fields">
        <template v-if="field === false">
          <div @click="handlePlay(index)" v-bind:key=index class="field empty">&nbsp;</div>
        </template>
        <template v-else>
          <div class="field" v-bind:key=index>{{field | uppercase}}</div>
        </template>
      </template>
    </div>

  </div>
</template>

<script>
import store from '../reduxState.js';


export default {
  name: 'GameCanvas',
  methods: {
    handlePlay: function(index) {
      store.dispatch({type:'MARK_FIELD', data:{fieldIndex: index}});
    },
    handleRestart: function(event) {
      store.dispatch({type:'RESET_FIELDS'});
    }
  },
  filters: {
    uppercase: function(value) {
      if (!value) return '';
      return value.toUpperCase();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/* Tic Tac Toe board */
.fieldContainer {
  width: 312px;
}

.field {
  /* background-color: red; */
  border: 1px #eee solid;
  display: inline-block;
  font-size: 72px;
  line-height: 98px;
  text-align: center;
  height: 100px;
  width: 100px;
}

.empty:hover {
  background-color: #fbfbfb;
}

.clearButton{
  margin-bottom: 15px;
}
</style>
