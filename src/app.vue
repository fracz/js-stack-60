<template>
  <div>
    <h1>{{ title }}</h1>
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

    <ol>
      <li v-for="participant in savedParticipants">{{ participant }}</li>
    </ol>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: 'Epizody',
        newParticipant: '',
        savedParticipants: []
      }
    },
    methods: {
      saveMe() {
        if (this.newParticipant) {
          this.savedParticipants.push(this.newParticipant);
          this.newParticipant = '';
        } else {
          alert('You need to give us a name!');
        }
      }
    }
  };
</script>
