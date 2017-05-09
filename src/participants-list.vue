<template>
  <div>
    <h1>Zapisane osoby ({{ participants.length }})</h1>
    <ol>
      <li v-for="participant in participants">{{ participant }}</li>
    </ol>
    <div class="empty" v-if="participants.length == 0">Brak zapisanych osób</div>
  </div>
</template>

<script>
  export default {
    props: ['participants']
  };
</script>

<style scoped>
  h1 {
    color: green;
  }

  .empty {
    color: red;
  }
</style>
