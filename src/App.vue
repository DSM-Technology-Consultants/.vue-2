<script>
export default {
  data() {
    return {
      appName: this.$parent.env.appName,
    };
  },

  created() {
    this.setTitle();
  },

  methods: {
    setTitle: function() {
      document.title = `${this.$route.name} - ${this.appName}`;
    },
  },

  watch: {
    $route(to) {
      document.title = `${to.name} - ${this.appName}`;
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
