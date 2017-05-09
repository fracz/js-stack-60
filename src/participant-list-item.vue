<template>
  <div class="item">
    <h5>{{ participant }}</h5>
    <button @click="remove">Usuń</button>
  </div>
</template>

<script>
  export default {
    props: ['participant'],
    methods: {
      remove() {
        this.$emit('remove', this.participant);
      }
    }
  };
</script>

<style scoped>
  h5 {
    margin: 0;
    font-size: 1em;
  }

  .item {
    margin-bottom: 15px;
  }
</style>
