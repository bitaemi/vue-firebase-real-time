<template>
    <nav>
        <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Contact</a></li>
            <li><a href="">About</a></li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'Navbar',
    data() {
        return {

        }
    }
}
</script>

<style scoped>
nav {
    text-align: center;
}
nav ul {
    padding: 0;
}
nav li {
    display: inline-block;
    list-style-type: none;
    margin: 0;
}
</style>
