<template>
  <div id="app">
    <NavBar/>
    <section class="section">
      <router-view/>
    </section>
    <footer class="footers" style="background:darkred">
     
        <div class="content1">
          <p>
            Cheat-Meal Corporation<br><br>33 rue Lafayette<br> 75009 Paris<br>France</p>
            <p></p>
        </div>
        <div class="content2">
          <p>Follow us on:<br><br><a class='social-links' href="#"><img src="https://image.flaticon.com/icons/svg/145/145802.svg"> Facebook</a><br><img src="https://image.flaticon.com/icons/svg/145/145812.svg"><a class='social-links' href="#">  Twitter</a><br><img src="https://image.flaticon.com/icons/svg/69/69366.svg"><a class='social-links' href="#">  Instagram</a></p>
        </div>
        
     
    </footer>
  </div>
</template>
<script>
import NavBar from "./components/NavBar";
import api from "./api";
export default {
  components: { NavBar },
  created() {
    const user = api.loadUser();
    if (user) this.$root.user = user;
  }
};
</script>
<style scoped>
.footers {
  font-family: "Coiny", cursive;
  background-color: darkred;
  width: 100%;
  height: 200px;
  padding-top: 40px;
  color: white;
}
.content1,
.content2 {
  float: left;
  width: 50%;
  box-sizing: border-box;
  padding-left: 20%;
}
.social-links {
  padding-bottom: 3px;
  color: white !important;
  text-decoration: underline;
}
img {
  width: 24px;
}
</style>

