<template>
    <div id="all-friends">
        <h2>All friends</h2>
        <div v-for="(friend, index) in friends" :key="index">
            <span>
            {{ friend.name }}
            </span>
            <span click='unfriend(friend.name)'>Unfriend</span>
        </div>
        </div>
</template>

<script>
export default {
    name: 'AllFriends',
    props: ['friends'],
    data() {
        return {

        }
    },
    methods: {
        unfriend(friend) {
            this.$emit('delete', { name });
        }
    }
}
</script>

<style>

</style>
