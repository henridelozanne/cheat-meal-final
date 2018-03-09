<template>
	<div>
  <textarea
    class="textarea"
    v-model="newComment"
    placeholder="Add comment"
    v-on:keyup.enter="createComment"
    rows="4"
  ></textarea>
    <div class="comments" v-for="(comment, i) in comments" :key="i">
      <div class="commentsinfo">

      Added by: <b style="color:blue">{{ $root.user.name }}</b> 

      <span>2 months ago</span>

      </div>
      <div class="description">

       {{comment.description}} 

      </div>
    
      
      </div>
    
  


</div>
</template>

<script>
import api from "../api";
export default {
  props: ["recipeId"],
  data() {
    return {
      comments: [],
      newComment: ""
    };
  },
  methods: {
    createComment() {
      api.postComment(this.newComment, this.recipeId).then(comment => {
        console.log(comment);
        this.comments.push({
          description: comment.description
        });
        this.newComment = "";
      });
    }
  },
  created() {
    api.showCommentsForRecipe(this.recipeId).then(comments => {
      console.log(comments);
      this.comments = comments;
    });
  }
};
</script>
<style scoped>
.textarea {
  border: none;
  background-color: transparent;

  resize: none;
  outline: none;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.comments {
  box-sizing: border-box;
  width: 100%;
  padding: 30px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.commentsinfo {
  border-bottom: 1px solid rgb(81, 71, 138);
  margin-bottom: 25px;
}
.description {
  background-color: rgb(246, 247, 248);
  padding: 20px;
}
.divs {
  margin: 0 auto;
}
</style>
