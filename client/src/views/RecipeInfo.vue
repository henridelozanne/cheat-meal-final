<template>

  <b-container v-if="recipe">

    
    <b-row class="justify-content-md-center">
      <b-col col lg="8">
        <b-img class="addBorder" style="height:550px" :src=recipe.picture
          center width="900" height="400" blank-color="#bbb" alt="img" />
        <div class="recipeinfo">
          <h1>{{recipe.title}}</h1>
          
          <br>
        </div>
        <div class="firstLine">
        <div class="type">
          <div v-if="recipe.type == 'dessert'">
            Type :
            <img width="50px" height="50px" :src="dessert" alt="">
          </div>
          <div v-if="recipe.type == 'starter'">
            Type :
            <img width="50px" height="50px" src="../assets/starter2.png" alt="">
          </div>
          <div v-if="recipe.type == 'main'">
            Type :
            <img width="50px" height="50px" src="../assets/burger.png" alt="">
          </div>
        </div>
        <div class="difficulty">
          <span v-if="recipe.difficulty == 'easy'">
            Difficulty :
            <img class="food" src="../assets/plat1.png" alt="">
            <img class="food" src="../assets/food.png" alt="">
            <img class="food" src="../assets/food.png" alt="">

          </span>
          <div v-else-if="recipe.difficulty == 'medium'">
            Difficulty :
            <img class="food" src="../assets/plat1.png" alt="">
            <img class="food" src="../assets/plat1.png" alt="">
            <img class="food" src="../assets/food.png" alt="">

          </div>
          <div v-else-if="recipe.difficulty == 'hard'">
            Difficulty :
            <img class="food" src="../assets/plat1.png" alt="">
            <img class="food" src="../assets/plat1.png" alt="">
            <img class="food" src="../assets/plat1.png" alt="">

          </div>
        </div>
        <div class="budget">
          <span v-if="recipe.budget == 'cheap'">
            Budget :
            <img class="food" src="../assets/budget.png" alt="">
            <img class="food" src="../assets/budget1.png" alt="">
            <img class="food" src="../assets/budget1.png" alt="">

          </span>

          <span v-else-if="recipe.budget == 'medium'">
            Budget :
            <img class="food" src="../assets/budget.png" alt="">
            <img class="food" src="../assets/budget.png" alt="">
            <img class="food" src="../assets/budget1.png" alt="">

          </span>
          <span v-else-if="recipe.budget == 'expensive'">
            Budget :
            <img class="food" src="../assets/budget.png" alt="">
            <img class="food" src="../assets/budget.png" alt="">
            <img class="food" src="../assets/budget.png" alt="">

          </span>
        </div> <!-- budget-->
      </div>
       <br><br>
          <div class="ingredients">
            <h1 class="ingredientsheader">🌮 Ingredients</h1>
                <div v-for="(ingredient,i) in recipe.ingredients" class="stepsbody" :key="i">
             {{i + 1}} : {{ ingredient.name }} -  {{ingredient.quantity}} {{ingredient.unit}}
          </div>
          </div>
          <br><br>
          <div class="steps">
            <h1 class="stepsheader">👩🏻‍🍳 Steps</h1>
          <div v-for="(step,i) in recipe.steps" class="ingredientsbody" :key="i">
            <p>{{i + 1}} : {{ step }}</p>
          </div>
          

        </div>
        <div> <br><br>
<h3 class="recommendedDrink"> 🍺 Recommended drink</h3><div class="ingredientsbody">
{{recipe.advisedDrink}}</div>
        </div>

<br><br>




    <div class="recipeinfo">
          <h1>Add your comment here</h1>
          <star-rating style="float:right"></star-rating>
          <br><br>
    </div>
    <br>
    <comments :recipeId="recipe._id"></comments>
      </b-col>
        
    </b-row>
    <div v-if="recipe.creatorId == this.$root.user.id">

<update-recipe></update-recipe>
    </div>


    
    
  </b-container>






</template>



<script>
import api from "../api";
import Comments from "./Comments";
import StarRating from "./StarRating";
import UpdateRecipe from "./UpdateRecipe";

export default {
  data() {
    return {
      recipe: null,
      f: false,
      dessert:
        "http://icons.iconarchive.com/icons/mohsenfakharian/christmas/512/piece-of-cake-icon.png"
    };
  },
  components: { Comments, StarRating, UpdateRecipe },

  methods: {
    addStep() {
      this.steps.push("");
    },
    removeElement(index) {
      api.removeElement(this._id).then(() => {
        this.recipes.splice(index, 1);
      });
    },
    getRecipeInfo() {
      api.getSolo(this.$route.params.id).then(recipe => {
        this.recipe = recipe;
      });
    }
  },
  watch: {
    $route(to, from) {
      this.getRecipeInfo();
    }
  },
  created() {
    this.getRecipeInfo();
  }
};
</script>
<style scoped>
.firstLine {
  text-align: center;
}
.addBorder {
  padding: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background-color: white;
  margin-top: 85px;
}
.addBorder img {
  max-height: 400px !important;
}

h1 {
  font-size: 42px;
}

h3 {
  font-size: 32px;
}

.recipeinfo {
  text-align: center;
  padding-top: 35px;
  font-family: "Pacifico", cursive;
}
.recipeinfo h1 {
  font-size: 50px;
  padding-bottom: 15px;
  font-family: "Pacifico", cursive;
}
.stepsheader,
.ingredientsheader,
.recommendedDrink {
  font-size: 40px;
  padding-bottom: 15px;
  font-family: "Pacifico", cursive;
}

.food {
  width: 50px;
  height: 40px;
}
.type {
  border: 2px solid rgb(3, 97, 121);
  display: inline-block;
  padding: 5px 20px;
  border-radius: 35px 0 35px;
}
.difficulty {
  border: 2px solid rgb(107, 3, 121);
  display: inline-block;
  padding: 10px 20px;
  margin: 0 12px;
}
.budget {
  border: 2px solid rgb(167, 66, 7);
  display: inline-block;
  padding: 10px 20px;
  border-radius: 0 35px 0 35px;
}
.ingredientsbody,
.stepsbody {
  font-family: "Itim", cursive;
  font-size: 23px;
}

/* .steps {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.ingredients {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
} */
</style>