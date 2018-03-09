<template>
<div>
  
  <div class="userRecipes">
 
         <li v-for="(profileRecipe,i) in recipes" :key="'profile' + i">
         
        
   
          
        <b-card
                :img-src=profileRecipe.picture
                img-fluid
                img-alt="image"
                img-top>

              <h1>{{profileRecipe.title}}</h1>
              

              
             
             <p> {{profileRecipe.type}}</p> {{profileRecipe.dificulty}}
           <br>

            <router-link class="homeCards" :to="`recipe/${profileRecipe._id}`">More info</router-link> <br>
                   <button v-on:click="removeElements(i)">remove</button>
        </b-card>
         </li>

          
          </div>
  </div>
</template>

<script>
import api from "../api";

export default {
  data() {
    return {
      recipes: []
    };
  },
  methods: {
    removeElements(index) {
      api.removeElement(this.recipes[index]._id).then(() => {
        this.recipes.splice(index, 1);
      });
    }
  },
  created() {
    api.showOwnRecipes(this.$root.user.id).then(recipes => {
      this.recipes = recipes;
    });
  }
};
</script>

<style scoped>
.userRecipes {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap !important;
}
.userRecipes li {
  width: 200px;
  height: 400px;
  list-style-type: none;
  margin-bottom: 30px;
  margin-top: 85px;
}
</style>

