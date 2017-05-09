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

    <participants-list :participants="savedParticipants"></participants-list>
  </div>
</template>

<script>
  import ParticipantsList from "./participants-list.vue";

  export default {
    components: {ParticipantsList},
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
