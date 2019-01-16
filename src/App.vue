<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <Navbar />
    <AllFriends :friends="friends" @delete="deleteFriend"/>
    <OnlineFriends :friends="friends"/>
    <Blogs />
  </div>
</template>

<script>
import Navbar from './Navbar';
import AllFriends from './AllFriends';
import OnlineFriends from './OnlineFriends';
import Blogs from './Blogs';

export default {
  name: 'app',
  components: {
    Navbar,
    AllFriends,
    OnlineFriends,
    Blogs
  },
  data () {
    return {
      title: 'Welcome to Your Vue.js App',
      friends: [
                { name: 'Cris', online: true },
                { name: 'Katy', online: false },
                { name: 'Ana', online: true },
                { name: 'Dan', online: true },
            ]
    }
  },
  methods: {
    deleteFriend(payload) {
      this.friends = this.friends.filter(
        friend =>  friend.name !== payload.name
      )
    }
  }
}
</script>

<style>
h1{
  color: #444;
  text-align: center;
}
</style>
