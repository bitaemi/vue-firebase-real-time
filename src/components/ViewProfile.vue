<template>
    <div class="view-profile">
        <h2>View Profile for {{ userId }}</h2>
        <div>
            <button @click="goHome">
            Redirect to home
            </button>
            <button @click="goBack">
            Go back
            </button>
            <button @click="goForward">
            Go forward
            </button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ViewProfile',
    data() {
        return {
            userId: this.$route.params.user_id
        }
    },
    methods: {
        updateId() {
            this.userId = this.$route.params.user_id;
        },
        goHome() {
            this.$router.push({name: 'Home'});
        },
        goBack() {
            this.$router.go(-1);
        },
        goForward() {
            this.$router.go(1);
        }
    },
    watch: {
        $route: 'updateId'
    }
}
</script>

