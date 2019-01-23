<template>
    <div class="chat container">
        <h2 class="teal-text center">Vue Chat</h2>
        <div class="card">
            <div class="card-content">
                <ul class="messages">
                    <li v-for="(message, index) in messages" :key="index">
                        <span class="teal-text">{{ message.name }}: </span>
                        <span class="grey-text text-darken-3">{{ message.content }}</span>
                        <span class="grey-text time">{{ message.timestamp }}</span>
                    </li>
                </ul>
            </div>
            <div class="card-action">
                <NewMessage :name="name"/>
            </div>
        </div>
    </div>
</template>
<script>
import NewMessage from './NewMessage'
import db from '@/firebase/init'
import moment from 'moment'

export default {
    name: 'Chat',
    props: ['name'],
    components: {
        NewMessage
    },
    data() {
        return {
            messages: []
        }
    },
    created() {
        let ref = db.collection('messages').orderBy('timestamp')
        ref.onSnapshot(snapshot => {
            snapshot.docChanges().forEach(change => {
                if (change.type == 'added') {
                    let doc = change.doc
                    this.messages.push({
                        id: doc.id,
                        name: doc.data().name,
                        content: doc.data().content,
                        timestamp: moment(doc.data().timestamp).format('lll'),

                    })
                }
                
            });
        }
        )
    },
}
</script>
<style>
.chat h2 {
    font-size: 2.6em;
    margin-bottom: 40px;
}
.chat span {
    font-size: 1.4em;
    text-align: left;
}
.chat .time {
    display: block;
    font-size:  0.6em;
}
.messages {
    text-align: left;
}
</style>
