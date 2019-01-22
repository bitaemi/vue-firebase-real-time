<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [1. Dinamically bind data using `v-bind` directive](#1-dinamically-bind-data-using-v-bind-directive)
- [2. React to events with v-on directive](#2-react-to-events-with-v-on-directive)
- [3. React to double click events with v-on directive](#3-react-to-double-click-events-with-v-on-directive)
- [4. The Event Object](#4-the-event-object)
- [5. KeyBoard Events](#5-keyboard-events)
- [6. Two Way Data Binding](#6-two-way-data-binding)
- [7. Event and Key Modifiers](#7-event-and-key-modifiers)
- [8. Conditional Output with v-if](#8-conditional-output-with-v-if)
- [9. Looping with v-for](#9-looping-with-v-for)
- [10. The Vue CLI](#10-the-vue-cli)
- [11. Components and Vue files](#11-components-and-vue-files)
- [12. The data() function](#12-the-data-function)
- [13. Nesting components](#13-nesting-components)
- [14. Scoped CSS - not as efficient](#14-scoped-css---not-as-efficient)
- [15. Passing Data with Props](#15-passing-data-with-props)
- [16. Custom Events](#16-custom-events)
- [17. Life-cycle Hooks](#17-life-cycle-hooks)
- [18. Making Requests with Axious](#18-making-requests-with-axious)
- [19. Filters](#19-filters)
- [20. Computed Properties(custom search box)](#20-computed-propertiescustom-search-box)
- [21. What is the Vue Router](#21-what-is-the-vue-router)
- [22. Setting up Routes](#22-setting-up-routes)
- [23. Router Links](#23-router-links)
- [24. Route Parameters](#24-route-parameters)
- [25. Watching the $route Object](#25-watching-the-route-object)
- [26. More on Router Links](#26-more-on-router-links)
- [27. Programmatically Redirecting Users](#27-programmatically-redirecting-users)
- [28. Hash vs History Mode](#28-hash-vs-history-mode)
- [29. Styling Active Links](#29-styling-active-links)
- [30. Project Preview & Setup](#30-project-preview--setup)
- [31. Project Structure](#31-project-structure)
- [32. Material Design](#32-material-design)
- [33. Navbar Component](#33-navbar-component)
- [34. Index Component](#34-index-component)
- [35. Deleting (local) Data](#35-deleting-local-data)
- [36. Introduction to Firebase](#36-introduction-to-firebase)
- [37. Setting up Firestore](#37-setting-up-firestore)
- [38. Installing Firebase](#38-installing-firebase)
- [39. Retrieving Firestore Data](#39-retrieving-firestore-data)
- [40. Deleting Firestore Data](#40-deleting-firestore-data)
- [41. Add Smoothie Component](#41-add-smoothie-component)
- [42. Adding Ingredients](#42-adding-ingredients)
- [43. Outputting Ingredients](#43-outputting-ingredients)
- [45. Saving Records to Firestore](#45-saving-records-to-firestore)
- [46. Deleting Ingredients](#46-deleting-ingredients)
- [47. Edit Smoothie Route](#47-edit-smoothie-route)
- [48. Firestore Queries](#48-firestore-queries)
- [49. Edit Smoothie Form](#49-edit-smoothie-form)
- [50. Updating Firestore Records](#50-updating-firestore-records)
- [51. Deploying to Firebase](#51-deploying-to-firebase)
- [52. Chat Project Overview & Setup](#52-chat-project-overview--setup)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

VSC pugins: Live Server, Monokai++, Vetur

Vue:

 - front-end JS framework  used for web SPAs or widgets

 - very small compared to Angular or React

# 1. Dinamically bind data using `v-bind` directive

    `<a v-bind:href="url">Youtube</a>`

    or shorter:

    `<a v-bind:href="url">Youtube</a>`

# 2. React to events with v-on directive

An event object is created;

```HTML
<p>I earn {{ wage }} pounds per hour</p>
<button v-on:click="wage++">Increase wage by 1$ </button>
<button v-on:click="changeWage(-1)">Decrease wage by 1$ </button>
```
# 3. React to double click events with v-on directive

``<button v-on:dblclick="changeWage(-4)">Decrease wage by 4$</button>``
# 4. The Event Object

```HTML
    <button @click="logEvent">Log Event info</button>
    <div class="canvas" @mouseMove="logCoords">{{ coords.x }},{{ coords.y }}</div>
```
```TypeScript
new Vue({
    el: '#app',
    data: {

    },
    methods: {
        logEvent(e){
            console.log(e);
        },
        logCoords(e){
            this.coords.x = e.offsetX;
            this.coords.y = e.offsetY;

            console.log(screenX, screenY);
        }
    }
});
```

# 5. KeyBoard Events

```HTML
<p>My name is {{ name }}</p>
<input type="text" @keyup="updateName">
```

```TypeScript
// ...
   updateName(e) {
            // console.log(e.target.value);
            this.name = e.target.value;

    }
```

# 6. Two Way Data Binding

```HTML
<p>Two way data-binding for title {{ title }}:</p>
<input type="text" v-model="title">
```

# 7. Event and Key Modifiers

Modify how we listen to click or key events using the `.` like this:

```HTML
<button @click.alt="eventModifiers">Test alt-click event key modifier</button>
<button @click.alt="eventModifiers">Test shift-click event key modifier</button>
```
runs eventModifiers method if Alt key, respectivly Shift is pressed when mouse clicking.
``
<a href="google.com" @click.prevent="eventModifiers">Google</a>
``
prevents default behaviour.

# 8. Conditional Output with v-if

`v-if` and `v-else-if` directives

```HTML
<p v-if="!loggedIn"> v-if show 'Login' for logged in {{ showName }}:
    <button @click="login">Login</button>
</p>
<p v-else-if="showName"> v-else-if show 'Hi, {{ name }}' for knowned loggedin user: {{ showName }}
    <button @click="logout">Logout </button>
</p>
```
# 9. Looping with v-for

```HTML
<div v-for="(ninja, index) in ninjas">
    <p>
        {{ index }}.{{ ninja.name }} is {{ ninja.age }} years old and has a {{ ninja.belt }}
    </p>
</div>
```
 where ninjas is an array of objects.

# 10. The Vue CLI

`npm i -g vue-cli`
`vue init webpack-simple vueproject`
...

Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

# 11. Components and Vue files

```TypeScript
new Vue({
  el: '#app',
  render: h => h(App)
})
```
because we want this instance to control the #app element.

Each Vue object/instance has a corresponding component (e.g. App.vue - the main component) with a template containing one main div(<div id="app">) identified by the value of 'el' (#app) object property.

# 12. The data() function

```JavaScript
data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
```
The data() function from each component is required to protect the data and make it unique (if if had been just an object,

data wouldn't be protected because it would be shared between components).

# 13. Nesting components

```JavaScript
import Nav from './Navbar';
// ..
export default {
  name: 'app',
  components: {
    Nav,
    // ..
  },
```
# 14. Scoped CSS - not as efficient

Vue.js automatically applies the `<style>` from a component side-wide( to all components imported into main component), not oly to that component.

- for scopeded CSS (available just for that component) we have to apply use scoped keyword `<style scoped>`,

but preferably, don't use it because is not so efficient - but rather add classes to elements.

Ctrl+Shift+R - hard refresh page to see changes after this CSS change.

# 15. Passing Data with Props

is the @Input from Angular - here we bind data using `:` in front of the property added in the component in the props array:

```HTML
    <OnlineFriends :friends="friends"/>
```
also add :

```JavaScript
export default {
    name: 'OnlineFriends',
    props: ['friends'],
   // ..
}
```

where friends is data inside the main component.

# 16. Custom Events

Delete a friend from data.

We use the `$emit` method to emit custom events (here delete) from the child component to main component:

```JavaScript
    methods: {
        unfriend(friend) {
            this.$emit('delete', { name : friend });
        }
    }
```
Parent component listens at the emitted  event in the component's call:

```<AllFriends :friends="friends" @delete="deleteFriend"/>``` (use `v-on:` or `@`)

and has the deleteFriends method:

```JavaScript
  methods: {
    deleteFriend(payload) {
      this.friends = this.friends.filter(
        friend =>  friend.name !== payload.name
      )
    }
    // ..
```

# 17. Life-cycle Hooks


- beforeCreate

- created ( load any data here)

- beforeMount (before compoment loads into the DOM)

- mounted

- beforeUpdated

- updated

- beforeDestroy

- destroyed (here any required cleanup after the component has been destroyed)

# 18. Making Requests with Axious

`npm i axios`

```JavaScript
    console.log('created hook');
    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
        console.log(response);
        this.posts = response.data;
    })
    .catch(error => console.log(error))
```
# 19. Filters

Add the snippet filter in main.js

```JavaScript
Vue.filter('snippet', val => {
  if(!val || typeof(val) != 'string') {
    return ' ';
  }
  val = val.slice(0, 50);
  return val + '...';
});
```
apply the filter(pipe from Angular) using the pipe:

```HTML
    <p>{{ post.body | snippet }}</p>
```
# 20. Computed Properties(custom search box)

Add the `computed` property in component's export:

```JavaScript
export default {
    name: 'Blogs',
    data() {
        return {
            // ..
            posts: [],
            searchTerm: '',
            // ..
        }
    },
    computed: {
        filterPosts() {
            return this.posts.filter(
                posts => posts.title.match(this.searchTerm)
            );
        }
    },
    // ..
```
Iterate through the return of computed object (filterPosts() object), instead of all posts:

```HTML
    <div v-for="post in filterPosts" :key="post.id">
        <h3>{{ post.title }}</h3>
        <p>{{ post.body | snippet }}</p>
    </div>
```
# 21. What is the Vue Router

`vue init webpack vuerouting`

to generate a new project with router

# 22. Setting up Routes

in main component we have : `<router-view/>` tag wich will load

all components added inside the Router object from index.js.

```JavaScript
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/profile/:user_id',
      name: 'View Profile',
      component: ViewProfile
    }
  ]
  // ...
```
access the about page: http://localhost:8080/#/about

# 23. Router Links

We do not use `<a href=''>`, instead we use `<router-link to=''>` or `<router-link :to={}>`:

```HTML
    <li><router-link to="/">Home</router-link></li>
    <li><router-link :to="{ name: 'About' }">About</router-link></li>
```

# 24. Route Parameters

read the param from route:

```JavaScript
  data() {
      return {
          userId: this.$route.params.user_id
      }
      // ..
```

# 25. Watching the $route Object

```JavaScript
    methods: {
        updateId() {
            this.userId = this.$route.params.user_id;
        }
    },
    watch: {
        $route: 'updateId'
    }
```
when we have the watch property, the updateId will run and update data with the new route parameter;

# 26. More on Router Links

```HTML
    <li v-for="(id,index) in userIds" :key="index">
        <router-link :to="{name: 'ViewProfile', params: { user_id: id}}">
            <span>User Profile {{ id }}</span>
        </router-link>
    </li>
```
# 27. Programmatically Redirecting Users

`this.$router` keeps track of all routes, versus: `this.$route` that refers to the current route;

```JavaScript
    goHome() {
        this.$router.push({name: 'Home'});
    },
    goBack() {
        this.$router.go(-1);
    },
    goForward() {
        this.$router.go(1);
    }
```

```HTML
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
```

# 28. Hash vs History Mode

The `#` symbol in links is required to be there to prevent a new call to the server, when accessing a new page.

**On local server**, to hide the hash, we set the `mode` property of the browser to 'history':

```JavaScript
  export default new Router({
  mode: 'history',
  routes: [
      // ..
```

# 29. Styling Active Links

```CSS
.router-link-exact-active {
  color: blue
}
```

# 30. Project Preview & Setup

Use Firestore = a real time noSQL database provided by Firebase.

# 31. Project Structure

# 32. Material Design

use Material CSS library

# 33. Navbar Component

```HTML
<div class="navbar">
    <nav class="nav-extended indigo darken-2">
        <div class="nav-content">
            <router-link to="">
                <span class="nav-title">Ninja Smooties</span>
            </router-link>
            <a href="" class="btn-floating btn-small halfway-fab pink">
                <router-link to=""><i class="material-icons">add</i></router-link>
            </a>
        </div>
    </nav>
</div>
```

# 34. Index Component

```HTML
<div class="index container">
<div class="card" v-for="smootie in smooties" :key="smootie.id">
    <div class="card-content">
    <h2 class="indigo-text"> {{ smootie.title }}</h2>
    <ul class="ingredients">
        <li v-for="(ing, index) in smootie.ingredients" :key="index">
        <span class="chip">
            {{ ing }}
        </span>
        </li>
    </ul>
    <i class="material-icons delete" @click="deleteItem(smootie.id)">delete</i>
    </div>
</div>
</div>
```
# 35. Deleting (local) Data

```JavaScript
deleteItem(id) {
    this.smooties = this.smooties.filter(
    smootie => smootie.id !== id
    )
```

# 36. Introduction to Firebase

Use Firestore :

- a real time noSQL database provided by Firebase

- authentication

- app deployment

# 37. Setting up Firestore

Google Firebase -> Go to Dashboard


# 38. Installing Firebase

``npm i firebase``

Project Overview and click on: </> to copy the config object

# 39. Retrieving Firestore Data

```JavaScript
import firebase from 'firebase';

//initialize Firebase
var config = {
    apiKey: "AIzaSyCOUsS6YQrqcFLNWzSV-vzq-fNTVjmir5I",
    authDomain: "ninja-smooties-97572.firebaseapp.com",
    databaseURL: "https://ninja-smooties-97572.firebaseio.com",
    projectId: "ninja-smooties-97572",
    storageBucket: "ninja-smooties-97572.appspot.com",
    messagingSenderId: "291122468448"
  };

const firebaseApp = firebase.initializeApp(config);

// firebaseApp.firestore().settings({timestampsInSnapshot: true});

export default firebaseApp.firestore();
```
 and in the created life cicle hook:

 ```TypeScript
   created() {
      db.collection('sooties').get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          // console.log(doc.data(), doc.id);
          let smootie = doc.data()
          smootie.id = doc.id
          this.sooties.push(smootie)
        })
      }).catch(err => console.log(err))

  },
```

# 40. Deleting Firestore Data

```TypeScript
    deleteItem(id) {

    db.collection('sooties').doc(id).delete()
        .then(() => {
        this.sooties = this.sooties.filter(
            smootie => smootie.id !== id
        )
        })
    }
```        

# 41. Add Smoothie Component

Prevent the defalt behaviour of the submit event(refresh page), using the prevent modifier:

```HTML
<form @submit.prevent="AddSmootie">
```

``<input type="text" for="title" name="title" v-model="title" >``

# 42. Adding Ingredients

After entering an ingredient, and pressing tab the defalt event of passing to the following field is prevented

and addIng method is executed:

```HTML
    <div class="field add-ingredient">
        <label for="text" name="add-ingredient">
            Add an ingredient:
        </label>
        <input type="text" for="add-ingredient" @keydown.tab.prevent="addIng" v-model="another">
    </div>
```
# 43. Outputting Ingredients

```HTML
    <div v-for="(ing, index) in ingredients" :key="index">
            <label for="ingredient">
            Ingredient:
            </label> 
            <input type="text" v-model="ingredients[index]" />
    </div>
```            

# 45. Saving Records to Firestore

`npm i slugify --save` to import a llibrary to generate slugs

```JavaScript
    AddSmootie() {
        if (this.title) {
            this.feedback = null
            this.slug = slugify(this.title, {
                replacement: '-',
                remove: /[$*_+¬.()'"!\-:@]/g,
                lower:true
            })
            db.collection('sooties').add({
                title: this.title,
                slug: this.slug,
                ingredients: this.ingredients
            }).then(
                () => this.$router.push({ name: 'Index' })
            ).catch( err => console.log(err))
        } else {
            feedback = ' You must enter a new title'
        }

    },
```

# 46. Deleting Ingredients

Delete an ingredient localy, before saving into database:

```HTML
    <div class="field" v-for="(ing, index) in ingredients" :key="index">
        <label for="ingredient">
        Ingredient
        </label> 
        <input type="text" v-model="ingredients[index]" />
        <i class="material-icons delete" @click="deleteIng(ing)">delete</i>
    </div>
```

```JavaScript
    deleteIng(ing) {
            this.ingredients = this.ingredients.filter( ingredient => ingredient !== ing)
    }
```        
# 47. Edit Smoothie Route

```JavaScript
    {
      path: '/edit-smootie/:slug',
      name: 'EditSmootie',
      component: EditSmootie
    }
```

# 48. Firestore Queries

collection is like a table in database, doc is like an entry in the table

db.collection.doc.update // similar to update a row from tb

db.collection.doc.add // add a row in table

db.collection.where('row', 'comparison operator', 'value for the entry to be returned') // is a select whit where clause

// ..

# 49. Edit Smoothie Form

is like the add form, but this time we specify input values using v-model directive with `smootie` object obtained in the `created()` 

lifecycle hook.


# 50. Updating Firestore Records

Done like this, but is not correct to get the doc id from slug if slug is not unique.

```JavaScript
    created() {
        let ref = db.collection('sooties').where('slug', '==', this.$route.params.slug);
        ref.get().then(snapshot => {
            return snapshot.forEach(doc => {
                this.smootie = doc.data();
                this.smootie.id = doc.id;
            })
        }).catch(err => console.log(err));
```
but rather use the id, or even don't make a new http requet to get data, use local data!:

```JavaScript
    let ref = db.collection('sooties').doc(this.id);
    ref.get().then(doc => {
            this.smootie = doc.data();
            this.smootie.id = doc.data().id;
            console.log(this.smootie);
    }).catch(err => console.log(err));
    console.log(ref);
```

```JavaScript
db.collection('sooties').doc(this.smootie.id).update({
    // ..
```
# 51. Deploying to Firebase

access firebase  prj console: `https://console.firebase.google.com/project/myprojid/overview`

`npm i -g firebase-tools --save`

`firebase login`

`firebase init` and here:

-  navigate with the arrow to hosting and select it by pressing space

- press enter

- select the defalt project ( jour prj name)

- select as public folder the dist folder

-select spa

`npm run build` ?? have to build the project before deploy, otherwise  you'll have an empty index filed - deployed project:

at https://myprojid.firebaseapp.com/

`firebase deploy`


# 52. Chat Project Overview & Setup

Use REAL-TIME DATA update TECHIQUE





