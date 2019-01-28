<template>
    <div class="login container">
        <form class="card-panel">
            <h2 class="center deep-purple-text">Login</h2>
           
            <div class="field">
                <label for="email">Email:</label>
                <input type="text" name="email" v-model="email">
            </div>
            <div class="field">
                <label for="password">Password:</label>
                <input type="password" name="password" v-model="password">
            </div>
            <div v-if="feedback" class="red-texrt center">{{ feedback }}</div>

            <div class="field center" @click.prevent="login">
                <button class="btn purple">LOGIN</button>
            </div>
        </form>
    </div>
</template>
<script>
import firebase from 'firebase'
export default {
    name: 'Login',
    data() {
        return {
            feedback: null,
            email: null,
            password: null,
        }
    },
    methods: {
        login() {
            if (this.email && this.password) {
                firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                .then(
                    cred => {
                        console.log(cred.user)
                    this.$router.push({name: 'ViewProfile', params: {id: cred.user.id}})
                    }
                )
                .catch(err => err.err)
                this.feedback = null
            } else {
                this.feedback = 'Pease fill in both fiels'
            }
        }
    }
}
</script>
