<template>
    <div class="blogs">
        <h2>{{blogTitle}}</h2>
        <button @click="changeTitle">changeTitle</button>
        <input type="text" v-model="searchTerm">
        <div v-for="post in filterPosts" :key="post.id">
            <h3>{{ post.title }}</h3>
            <p>{{ post.body | snippet }}</p>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: 'Blogs',
    data() {
        return {
            blogTitle: 'Life cicle hooks',
            posts: [],
            searchTerm: ''
        }
    },
    computed: {
        filterPosts() {
            return this.posts.filter(
                posts => posts.title.match(this.searchTerm)
            );
        }
    },
    beforeCreate() {
        console.log('before create hook');
    },
    created() {
        console.log('created hook');
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            console.log(response);
            this.posts = response.data;
        })
        .catch(error => console.log(error));
    },
    beforeUpdate() {
        console.log('before create hook');
    },
    methods: {
        changeTitle() {
            this.blogTitle = this.blogTitle + ' beforeUpdate() hook is executed';
        }
    }

}
</script>
