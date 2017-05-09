<template>
  <div>
    <h1>{{ title }}</h1>
    <new-participant-form @saved="addNewParticipant"></new-participant-form>
    <participants-list :participants="savedParticipants"></participants-list>
  </div>
</template>

<script>
  import ParticipantsList from "./participants-list.vue";
  import NewParticipantForm from "./new-participant-form.vue";

  export default {
    components: {ParticipantsList, NewParticipantForm},
    data() {
      return {
        title: 'Epizody',
        savedParticipants: []
      }
    },
    methods: {
      addNewParticipant(newParticipant) {
        this.savedParticipants.push(newParticipant);
      }
    }
  };
</script>
