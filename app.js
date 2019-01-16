new Vue({
    el: '#app',
    data: {
        title: 'Becoming a Vue Ninja',
        wage: 10,
        name: 'Ryu',
        url: 'youtube.com',
        classes: ['one', 'two'],
        coords: {
            x: 0,
            y: 0
        },
        loggedIn: false,
        showName: false,
        items: ['grape', 'banana', 'strawberry', 'apple'],
        ninjas: [
            { name: 'Cris', age: 23, belt: 'Black'},
            { name: 'Mart', age: 33, belt: 'Red'},
            { name: 'Dan', age: 27, belt: 'Black'},
            { name: 'John', age: 28, belt: 'White'},
            { name: 'Cory', age: 25, belt: 'Orange'}
        ]
    },
    methods: {
        greet(time) {
            return `Hello and good ${time}, ${this.name}`
        },

        changeWage(amount) {
            this.wage = this.wage + amount;
        },
        logEvent(e){
            console.log(e);
        },
        logCoords(e){
            this.coords.x = e.offsetX;
            this.coords.y = e.offsetY;

            console.log(screenX, screenY);
        },
        updateName(e) {
            // console.log(e.target.value);
            this.name = e.target.value;

        },
        eventModifiers() {
            console.log('Event modifiers');
        },
        toggleName() {
            this.showName = !this.showName;
        },
        login() {
            this.loggedIn = true;
            this.showName = true;
        },
        logout() {
            this.loggedIn = false;
        }
    }
});



