<script>
export default {
  created() {
    this.setTitle();
  },

  methods: {
    setTitle: function() {
      document.title = `${this.$route.name} - ${this.$app.name}`;
    },
  },

  watch: {
    $route(to) {
      document.title = `${to.name} - ${this.$app.name}`;
    },
  },
};
</script>

<template>
  <div>
    <router-view id="site-content" class="container"/>
  </div>
</template>

<style></style>
