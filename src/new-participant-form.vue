<template>
  <form @submit.prevent="saveMe()">
    <fieldset>
      <legend>Zarejestruj się tutaj</legend>
      <div>
        <label>Imię i nazwisko</label>
        <input type="text" v-model="newParticipant">
      </div>
      <div>
        <button>Zapisz mnie</button>
      </div>
    </fieldset>
  </form>
</template>

<script>
  export default {
    data() {
      return {
        newParticipant: ''
      };
    },
    methods: {
      saveMe() {
        if (this.newParticipant) {
          this.$emit('saved', this.newParticipant);
          this.newParticipant = '';
        } else {
          alert('You need to give us a name!');
        }
      }
    }
  };
</script>
