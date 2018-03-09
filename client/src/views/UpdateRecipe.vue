<template>
  <div v-if="solo">
<form v-if="f" @submit.prevent="update">

    



     

    
   
    
  <label for="title">Recipe title:</label>
    <input v-model="solo.title" type="text" name="title">

    <br><br>

    <label for="type">Type</label>
    <select name="type" form="type" v-model="solo.type">
    <option value="starter">starter</option>
    <option value="main">main</option>
    <option value="dessert">dessert</option>
    </select>

    <br><br>

    <label for="difficulty">Difficulty</label>
    <select name="difficulty" form="difficulty" v-model="solo.difficulty">
    <option value="very easy">very easy</option>
    <option value="easy">easy</option>
    <option value="medium">medium</option>
    <option value="hard">hard</option>
    </select>

    <br><br>

    <label for="budget">Budget</label>
    <select name="budget" form="budget" v-model="solo.budget">
    <option value="cheap">cheap</option>
    <option value="medium">medium</option>
    <option value="expensive">expensive</option>
    </select>
    <br><br>

     <!-- <button id="more_fields" @click="addStep" value="Add More">Add another step</button> -->
     <a id="more_fields" @click="addStep" value="Add More">Add another step</a>

    <div id="step-wrapper">
    
    <span>Preparation:</span>
 
  <label v-for="(step, i) in steps" :key="i" >Step {{ i + 1}}:
      <input v-model="solo.steps[i]" type="text">
      <br>
    </label>


    </div>

    <br><br>

    <label for="advisedDrink">Advised drink:</label>
    <input v-model="solo.advisedDrink" type="text" name="advisedDrink">

    <br><br>

    <button class="button is-primary">Submit recipe</button>









    </form>
  <button @click="f = !f">Update Recipe</button>

  </div>



  <p v-else>Loading</p>


</template>

<script>
import api from "../api";

export default {
  data() {
    return {
      solo: [],
      f: false,
      steps: ["", ""]
    };
  },

  methods: {
    update() {
      this.error = null;
      api
        .updateItem(this.$route.params.id, this.solo)
        .then(solo => {
          this.solo = solo;
          this.$router.push("/");
        })
        .catch(err => {
          this.error = err;
        });
    },
    addStep() {
      this.steps.push("");
    }
  },
  created() {
    api.getSolo(this.$route.params.id).then(solo => {
      this.solo = solo;
    });
  }
};
</script>