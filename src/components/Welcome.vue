<template>
  <div class="welcome container"><div class="card">
    <div class="card-content center-align">
      <h2 class="teal-text">Welcome</h2>
      <form @submit.prevent="enterChat">
        <label for="name">Enter your name:</label>
        <input for="name" type="text" v-model="name">
        <button class="btn teal">Enter Chat</button>
      </form>
    </div>
  </div>

  </div>
</template>

<script>
export default {
  name: 'Welcome',
  data () {
    return {
      name: null,
      feedback : null,
    }
  },
  methods: {
    enterChat() {
      if (this.name) {
      this.$router.push({ name: 'Chat', params: { name: this.name }})
      
      } else {
        this.feedback = 'You must enter a name'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  margin-top: 30px;
}
</style>
