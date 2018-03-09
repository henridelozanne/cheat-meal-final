<template>
<nav class="navbar" style="background:darkred">
  <div class="navbar-brand">
    <img id="logo" style="height:50px" src="http://res.cloudinary.com/dcirj0x5j/image/upload/v1520521812/Cheat-Meal_Logo.png" alt="">
    <router-link class="navbar-item logo" to="/">
    
    <h1 >Cheat Meal</h1>
    </router-link>
    <div
      class="navbar-burger burger"
      :class="{ 'is-active': isActive }"
      @click="isActive = !isActive"
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
  <div class="navbar-menu" :class="{ 'is-active': isActive }">
    <div class="navbar-start">
      
    </div>
    <div class="navbar-end">
      <div class="navbar-item">
        <div class="field is-grouped" v-if="!$root.user">
          <p class="control">
            <router-link
              class="navbar-item" to="/login"
              @click.native="isActive = false"
            >
              Login
            </router-link>
          </p>
          <p class="control">
            <router-link
              class="navbar-item" to="/signup"
              @click.native="isActive = false"
            >
              Signup
            </router-link>
          </p>
          
        </div>
        <div class="field is-grouped" v-else>
          <p class="control ">
            <router-link
              class="navbar-item" to="/recipe"
              @click.native="isActive = false"
            >
            Submit a recipe
            </router-link>
          </p>
          
          <p class="control">
            <a
              class="navbar-item" 
              @click="handleClick"
            >
            Random recipe ️
            </a>
          </p>
          <p class="control">
            <router-link
              class="navbar-item" to="/profile"
              @click.native="isActive = false"
            >
             My recipes
            </router-link>
          </p>
          <!-- <p class="control navbar-item">
            Hi {{ $root.user.name }}
          </p> -->
          <p class="control">
            <a
              class="navbar-item"
              @click="logout"
            >
              Logout
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</nav>
</template>
<script>
import api from "../api";
export default {
  data() {
    return {
      isActive: false,
      allrecipes: [
        "5aa1217768d7ea5bfe2c2742",
        "5aa1210468d7ea5bfe2c2740",
        "5aa11f003e3ee75b9f876668",
        "5a9feaa0c6f3c24b656264c4"
      ]
    };
  },
  methods: {
    handleClick() {
      this.isActive = false;
      this.navigateToRandomRecipe();
    },
    logout() {
      api.logout();
      this.$root.user = null;
      this.$router.push("/login");
    },
    navigateToRandomRecipe() {
      const param = `${
        this.allrecipes[Math.floor(Math.random() * this.allrecipes.length)]
      }`;
      this.$router.push({ name: "recipeInfo", params: { id: param } });
    }
  }
};
</script>
<style scoped>
.navbar {
  /* font-family: "Pacifico", cursive;
   */
  font-family: "Coiny", cursive;
  position: fixed;
  z-index: 2;
  width: 100%;
}
.navbar a {
  font-size: 35;
}

.navbar-end a {
  font-size: 22px;
}
.navbar-end a:hover {
  background: none;
  text-decoration: none;
  color: yellow;
}
.navbar-item {
  color: white;
}
.logo {
  font-size: 35px;
}
.logo:hover {
  background: none !important;
  text-decoration: none;
  color: yellow;
}
</style>