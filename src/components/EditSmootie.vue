<template>
    <div class="edit-smootie container"  v-if="smootie">
        <h2>Edit {{ smootie.title }} </h2>
        <form @submit.prevent="EditSmootie">
            <div class="field title">
                <label for="text" name="title">
                    Smootie Title:
                </label>
                <input type="text" for="title" name="title" v-model="smootie.title" >
            </div>
            <div class="field" v-for="(ing, index) in smootie.ingredients" :key="index">
               <label for="ingredient">
                Ingredient
                </label> 
                <input type="text" v-model="smootie.ingredients[index]" />
                <i class="material-icons delete" @click="deleteIng(ing)">delete</i>
            </div>
            <div class="field add-ingredient">
                <label for="text" name="add-ingredient">
                    Add an ingredient:
                </label>
                <input type="text" for="add-ingredient" @keydown.tab.prevent="addIng" v-model="another">
            </div>
            <div class="field center-align">
                <p v-if="feedback" class="red-text">{{ feedback }}</p>
                <button class="btn pink">Update smootie</button>
            </div>
        </form>
    </div>
</template>
<script>
import db from '@/firebase/init'
import slugify from 'slugify'

export default {
    name: 'EditSmootie',
    data() {
        return {
            smootie: null,
            another: null,
            feedback: null,
            id: this.$route.params.id
        }
    },
    created() {
        let ref = db.collection('sooties').where('slug', '==', this.$route.params.slug);
        ref.get().then(snapshot => {
            return snapshot.forEach(doc => {
                this.smootie = doc.data();
                this.smootie.id = doc.id;
            })
        }).catch(err => console.log(err));
        // let ref = db.collection('sooties').doc(this.id);
        // ref.get().then(doc => {
        //         this.smootie = doc.data();
        //         this.smootie.id = doc.data().id;
        //         console.log(this.smootie);
        // }).catch(err => console.log(err));
        // console.log(ref);
    },
    methods: {
        EditSmootie() {
            if (this.smootie.title) {
                this.feedback = null
                this.smootie.slug = slugify(this.smootie.title, {
                    replacement: '-',
                    remove: /[$*_+¬.()'"!\-:@]/g,
                    lower:true
                })
                db.collection('sooties').doc(this.smootie.id).update({
                    title: this.smootie.title,
                    slug: this.smootie.slug,
                    ingredients: this.smootie.ingredients
                }).then(
                    () => this.$router.push({ name: 'Index' })
                ).catch( err => console.log(err))
            console.log(this.smootie.id)
            } else {
                this.feedback = ' You must enter a new title'
            }
        },
        addIng() {
            if (this.another) {
                this.smootie.ingredients.push(this.another)
                this.another = null
                this.feedback = null
            } else {
                this.feedback =  'Ýou must enter a value for ingredient'
            }
        },
        deleteIng(ing) {
            this.smootie.ingredients = this.smootie.ingredients.filter( ingredient => ingredient !== ing)
        }
    }
    
}
</script>

<style>
.edit-smootie {
    margin-top: 60px;
    padding: 20px;
    max-width: 500px;
}
.edit-smootie h2 {
    font-size: 2em;
    margin: 20px auto;
}
.edit-smootie .field {
    margin: 20px  auto;
    position: relative;
}
.edit-smootie .delete {
    position: absolute;
    right: 0;
    bottom:  16px;
    color: #aaa;
    font-size: 1.1em;
    cursor: pointer;
}
</style>