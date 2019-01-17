<template>
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
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      smooties: [
        { title: 'Vanilla Smooties', slug: 'ninja-brew', ingredients: ['bananas', 'vanilla', 'milk'], id: '1'},
        { title: 'Moorning Mood', slug: 'moorning-mood', ingredients: ['cofee', 'milk', 'chocholate'], id: '2'},
      ]
    }
  },
  methods: {
      deleteItem(id) {
      this.smooties = this.smooties.filter(
        smootie => smootie.id !== id
      )

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
