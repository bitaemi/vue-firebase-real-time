<template>
    <div class="navbar">
        <nav class="deep-purple darken-1">
            <div class="container">
                <router-link :to="{name: 'GMap'}" class="brand-logo left">ChatApp</router-link>
                <ul>
                    <li><router-link :to="{name: 'GMap'}">GMap</router-link></li>
                    <li v-if="!user"><router-link :to="{name: 'SignUp'}">Signup</router-link></li>
                    <li v-if="user" ><a href=""  @click.prevent="logout">Logout</a></li>
                    <li v-if="user" >{{ user.email }}</li>
                    <li v-if="!user"><router-link :to="{name: 'Login'}">Login</router-link></li>
                </ul>
            </div>
        </nav>
    </div>
</template>
<script>
import firebase from 'firebase'
export default {
    name: 'Navbar',
    data() {
        return {
            user: null
        }
    },
    created() {
        // let user = firebase.auth().currentUser
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.user = user
            } else {
                this.user = null
            }

        })
    },
    methods: {
        logout() {
            firebase.auth().signOut().then(
                () => {
                    this.$router.push({name: 'Login'})
                }
            )
        }
    }
}
</script>
<style>
.navbar {
  position: absolute;
  top: 0;
  width: 100%;
}
.navbar ul {
    float: right;
    margin-left: 30px;
}
</style>

