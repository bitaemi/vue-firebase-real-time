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

```JavaScript
<p>I earn {{ wage }} pounds per hour</p>
<button v-on:click="wage++">Increase wage by 1$</button>
<button v-on:click="changeWage(-1)">Decrease wage by 1$</button>
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

Delete a friend from data:

```JavaScript
    methods: {
        unfriend(friend) {
            this.$emit('delete', { name });
        }
    }
```
Listen at the emitted  event in the components call:



# 17. Life-cycle Hooks

# 18. Making Requests with Axious





