<template>
  <div class="signup container">
    <form class="card-panel">
      <h2 class="center deep-purple-text">SignUp</h2>
      <div class="field">
        <label for="email">Email:</label>
        <input type="email" name="email" v-model="email">
      </div>
      <div class="field">
        <label for="username">Username:</label>
        <input type="text" name="username" v-model="username">
      </div>
      <div class="field">
        <label for="password">Password:</label>
        <input type="password" name="password" v-model="password">
      </div>
      <div class="field">
        <label for="alias">Alias:</label>
        <input type="text" name="alias" v-model="alias">
        <div v-if="feedback" class="feedback">{{ feedback }}</div>
      </div>
      <div class="field center" @click.prevent="signup">
        <button class="btn purple">Signup</button>
      </div>
    </form>
  </div>
</template>
<script>

import db from '@/firebase/init'
import slugify from 'slugify'
import firebase from 'firebase'

export default {
    name: 'SignUp',
    data() {
        return {
            email: null,
            username: null,
            password: null,
            alias: null,
            feedback: null
        }
    },
    methods: {
        signup(){
            if (this.alias && this.email && this.password) {
                this.slug = slugify(this.alias, 
                    {
                    replacement: '-',
                    remove: /[$*_+¬.()'"!\-:@]/g,
                    lower:true
                    })

                let usersRef = db.collection('users').doc(this.slug)
                usersRef.get().then(
                    doc => {
                        if (doc.exists) {
                            this.feedback = 'This alias already exists'
                        } else {
                            firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
                            .then(
                            cred => {
                                usersRef.set({
                                    alias: this.alias,
                                    geolocation: null,
                                    user_id: cred.user.uid,
                                    email: this.email,
                                    username: this.username,
                                    password: this.password
                                })
                            })
                            .then(() => this.$router.push({ name: 'GMap'}))
                            .catch( err => {
                                this.feedback = err.message;
                            })
                        }
                    }

                )
                // if (this.feedback === null) {
                // db.collection('users').add({
                //         id: this.slug,
                //         email: this.email,
                //         username: this.username,
                //         password: this.password
                //     })
                // }
            } else {
                this.feedback = 'You must you must provide email, pass, alias'
            }
        }
    }
}
</script>
<style>
.signup {
  max-width: 400px;
  margin-top: 60px;
}
.feedback {
  color: red;
  text-align: center;
}
</style>

