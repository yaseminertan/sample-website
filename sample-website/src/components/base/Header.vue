<template>
    
</template>

<script>
export default {
  name: "Header",
  computed: {
    isAuthenticated() {
      return this.$store.state.isAuthenticated;
    }
  }
}
</script>