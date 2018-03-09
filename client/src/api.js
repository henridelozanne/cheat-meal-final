import axios from "axios";

const service = axios.create({
  baseURL:
    process.env.NODE_ENV === "production" ? "/api" : "http://localhost:3000/api"
});

const errHandler = err => {
  console.error(err.response.data);
  throw err.response.data;
};

export default {
  signup(userInfo) {
    return service
      .post("/signup", userInfo)
      .then(res => res.data)
      .catch(errHandler);
  },

  login(username, password) {
    return service
      .post("/login", {
        username,
        password
      })
      .then(res => {
        const { data } = res;
        localStorage.setItem("user", JSON.stringify(data));
        axios.defaults.headers.common["Authorization"] = "Bearer " + data.token;
        return data;
      })
      .catch(errHandler);
  },

  getSecret() {
    return service
      .get("/secret")
      .then(res => res.data)
      .catch(errHandler);
  },
  getRecipe() {
    return service
      .get("/recipe")
      .then(res => res.data)
      .catch(errHandler);
  },

  logout() {
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("user");
  },

  loadUser() {
    const userData = localStorage.getItem("user");
    if (!userData) return false;
    const user = JSON.parse(userData);
    if (user.token && user.name) {
      axios.defaults.headers.common["Authorization"] = "Bearer " + user.token;
      return user;
    }
    return false;
  },
  submitRecipe(recipeInfo) {
    const formData = new FormData();
    Object.keys(recipeInfo).forEach(key => {
      if (key == "ingredients" || key == "steps") {
        return;
      }
      formData.append(key, recipeInfo[key]);
    });
    recipeInfo.ingredients.forEach((ingredient, i) => {
      formData.append(`ingredients[${i}][name]`, ingredient.name);
      formData.append(`ingredients[${i}][quantity]`, ingredient.quantity);
      formData.append(`ingredients[${i}][unit]`, ingredient.unit);
    });
    recipeInfo.steps.forEach((step, i) => {
      formData.append(`steps[]`, step);
    });
    return service
      .post("/recipe", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      .then(res => res.data)
      .catch(errHandler);
  },
  // submitRecipe(recipeInfo) {
  //   return service
  //     .post("/recipe", recipeInfo)
  //     .then(res => res.data)
  //     .catch(errHandler);
  // },
  getRecipe() {
    return service
      .get("/recipe")
      .then(res => res.data)
      .catch(errHandler);
  },
  getSolo(id) {
    return service
      .get(`/recipe/${id}`)
      .then(res => res.data)
      .catch(errHandler);
  },
  updateItem(id, item) {
    return service
      .post(`/recipe/${id}`, item)
      .then(res => res.data)
      .catch(errHandler);
  },
  removeElement(id) {
    return service
      .delete(`/profile/${id}`)
      .then(res => res.data)
      .catch(errHandler);
  },
  showComments() {
    return service
      .get("/comments")
      .then(res => res.data)
      .catch(errHandler);
  },
  postComment(comment, recipeId) {
    return service
      .post("/comments", { comment, recipeId })
      .then(res => res.data)
      .catch(errHandler);
  },
  showCommentsForRecipe(recipeId) {
    return service
      .get(`/comments/${recipeId}`)
      .then(res => res.data)
      .catch(errHandler);
  },
  showOwnRecipes(creatorId) {
    return service
      .get(`/profile?creatorId=${creatorId}`)
      .then(res => res.data)
      .catch(errHandler);
  }
};
