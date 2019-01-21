<template>
  <div class="index container">
    <div class="card" v-for="smootie in sooties" :key="smootie.id">
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
</template>

<script>;
import db from '@/firebase/init';
export default {
  name: 'HelloWorld',
  data () {
    return {
      sooties: []
    }
  },
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
  methods: {
      deleteItem(id) {

        db.collection('sooties').doc(id).delete()
            .then(() => {
            this.sooties = this.sooties.filter(
                smootie => smootie.id !== id
            )
            })
        }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.index {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  margin-top: 30px;
}
.index h2{
  font-size: 18px;
  text-align: center;
  margin-top: 20px;
}
.index .ingredients {
  margin: 30px auto;
}
.index .ingredients li{
  display: inline-block;
}
.index .delete {
  position:absolute;
  top: 4px;
  right: 4px;
  cursor: pointer;
  color: #ddd;
}
</style>
