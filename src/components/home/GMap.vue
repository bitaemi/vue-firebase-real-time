<template>
    <div class="map">
        <div class="google-map" id="map"></div>
    </div>
</template>
<script>
import firebase from 'firebase'
import db from '@/firebase/init'
export default {
    name: 'GMap',
    data() {
        return {
            lat: 44,
            lng: 26
        }
    },
    mounted() {
        //get user location
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(pos => {
                this.lat = pos.coords.latitude
                this.lng = pos.coords.longitude

                //find user record and then update coords
                db.collection('users').where('id', '==', user.uid).get()
                .then( snapshot => {
                    snapshot.forEach(doc => {
                        db.collection('users').doc(doc.id).update({
                            geolocation: {
                                lat: pos.coords.latitude,
                                lng: pos.coords.longitude
                            }
                        })
                    });
                    
                    }
            )
                this.renderMap()
            },
            (err) => {
                console.log(err)
                this.renderMap()
            },
            { maximumAge: 60000, timeout: 3000})
        } else {
            // position center by default values:
            this.renderMap()
        }
    },
    methods: {
        renderMap() {
            const map = new google.maps.Map(document.getElementById('map'), {
                center: { lat: this.lat, lng: this.lng },
                zoom: 2,
                maxZoom: 15,
                minZoom: 3,
                streetViewControl: false
            })

            db.collection('users').get().then(
                users => {
                    users.docs.forEach(doc =>
                    {
                        let data = doc.data()
                        if (data.geolocation) {
                            let marker = new google.maps.Marker({
                               position: {
                                // lat: data.geolocation.lat,
                                // lng: data.geolocation.lng
                                lat: 45,
                                lng: 24
                            },
                            map 
                            })
                            // add click event to marker:
                            marker.addListener('click', () => {
                                this.$router.push(
                                    {
                                        name: 'ViewProfile',
                                        params: {id: doc.id}
                                    })
                            })
                        }
                    })
                }
            )
        }
    }
}
</script>
<style>
.google-map {
    width: 1000%;
    height: 100%;
    position: absolute;
    z-index: -1;
}
</style>

