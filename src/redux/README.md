<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Build Setup](#build-setup)
- [Description](#description)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->
Redux Store in Vue - for small implementation (for large implementations use Vuex - State management pattern)
## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Description

We include the reduxState.js which contains:

- logger as result of createLogger from redux-logger as middleware
```JavaScript
var logger = createLogger({
  collapsed: true
})

```
- default state
- the game reducer
- store as result of createStore from redux with game as a reducer and  enhanced with applyMiddleware from redux on our redux logger:

```JavaScript
var store = createStore(game, applyMiddleware(logger));
```

There are major differences on how data is updated in React vs. Vue. In react you return a brand new copy of the entire state, every time the state is updated.
But in Vue, the parent state object stays the same, and Vue listens to see if any of that object's child properties change; 
In main.js we get the data from store for the entire Vue app like this:
```JavaScript
var reduxState = {
  fields: store.getState().fields
};
// The update should be done only for particular childs of the object (in unsub we update just those properties that we specificaly care about )
// and also subscribe to the data available in store (in order to get the updates):

var unsub = store.subscribe(function() {
  state = store.getState();
  // bindings
  reduxState.fields = state.fields;
})
// ...
  
    new Vue({
      el: '#app',
      router,
      components: { App },
      template: '<App/>',
      data: reduxState
    })

```

In the HTML template we access this 'data' from reduxState as following:
```HTML
 <template v-for="(field, index) in this.$root.$data.fields">
     <!-- render all the fields here ... -->
```