<template>
    <div class="add-smootie container">
        <h2 class="center indigo-text">
            Add New Smootie
        </h2>
        <form @submit.prevent="AddSmootie">
            <div class="field title">
                <label for="text" name="title">
                    Smootie Title:
                </label>
                <input type="text" for="title" name="title" v-model="title" >
            </div>
            <div v-for="(ing, index) in ingredients" :key="index">
               <label for="ingredient">
                Ingredient
                </label> 
                <input type="text" v-model="ingredients[index]" />
            </div>
            <div class="field add-ingredient">
                <label for="text" name="add-ingredient">
                    Add an ingredient:
                </label>
                <input type="text" for="add-ingredient" @keydown.tab.prevent="addIng" v-model="another">
            </div>
            <div class="field center-align">
                <p v-if="feedback" class="red-text">{{ feedback }}</p>
            <button class="btn pink">Add smootie</button>
            </div>
        </form>
    </div>
</template>
<script>
import slugify from 'slugify'
import db from '@/firebase/init'

export default {
    name: 'AddSmootie',
    data() {
        return {
            title: null,
            another: null,
            ingredients: [],
            feedback: ''
        }
    },
    methods: {
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
        addIng() {
            if (this.another) {
                this.ingredients.push(this.another)
                this.another = null
                this.feedback = null
            } else {
                this.feedback =  'Ýou must enter a value for ingredient'
            }
        }
    }
}
</script>
<style>
.add-smootie {
    margin-top: 60px;
    padding: 20px;
    max-width: 500px;
}
.add-smootie h2 {
    font-size: 2em;
    margin: 20px auto;
}
.add-smootie .field {
    margin: 20px  auto;
}
</style>

