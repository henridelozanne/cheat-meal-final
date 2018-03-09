 <template>
   
 <button v-on:click="removeElements(i)">remove</button>
 </template>
 <script>
export default {
  methods: {
    removeElements(index) {
      api.removeElement(this.recipes[index]._id).then(() => {
        this.recipes.splice(index, 1);
      });
    }
  }
};
</script>
 s