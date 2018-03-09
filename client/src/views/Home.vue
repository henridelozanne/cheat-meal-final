<template>
  <b-container>
     
   

    
      
      <input type="text" class="searchInput" v-model="search" placeholder="Search here your calories"/>
      <br><br><br>
      
    <b-card-group columns>
      
      <ul> 
         <li v-for="recipe in filteredRecipes" :key="recipe._id">
         
        
   
          
        <b-card
                :img-src=recipe.picture
                img-fluid
                img-alt="image"
                img-top>
                

              <h1>{{recipe.title}}</h1>
              

              <p>Added by :{{recipe.creator }}</p>
              
              
             
             
           <br>

          <!-- <remove-recipe></remove-recipe> -->
           
            <router-link class="homeCards" :to="`recipe/${recipe._id}`">More info</router-link> <br>
           
        </b-card>
         </li>
        
          </ul>
         </b-card-group>
     
</b-container>


</template>

<script>
import api from "../api";

export default {
  data() {
    return {
      recipes: [],
      search: ""
    };
  },

  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    }
  },

  created() {
    api.getRecipe().then(recipes => {
      this.recipes = recipes;
    });
    api.showComments().then(comments => {
      this.comments = comments;
    });
  },

  computed: {
    filteredRecipes() {
      var self = this;
      return this.recipes.filter(function(cust) {
        return cust.title.toLowerCase().indexOf(self.search.toLowerCase()) >= 0;
      });
      return this.customers;
    }
  }
};
</script>

<style scoped>
li {
  list-style-type: none;
}
.searchInput {
  width: 70%;
  margin-left: 14%;
  padding: 12px 15px 12px 40px;
  font-size: 25px;
  border: none;
  background-color: transparent;
  margin-top: 85px;
  outline: none;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

h1 {
  font-size: 42px;
  text-align: center;
}
p {
  text-align: center;
}
.homeCards {
  background: darkred;
  text-align: center;
  padding: 6px 17px;
  color: floralwhite;
  border-radius: 23px 0 23px 0;
  font-size: 16px;
  width: 30%;
  margin-left: 33%;
}
/* When the input field gets focus, change its width to 100% */
</style>
