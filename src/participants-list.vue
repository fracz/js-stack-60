<template>
  <div>
    <h1>Zapisane osoby ({{ participants.length }})</h1>
    <ol>
      <li v-for="participant in participants">
        <participant-list-item :participant="participant" @remove="removeParticipant"></participant-list-item>
      </li>
    </ol>
    <div class="empty" v-if="participants.length == 0">Brak zapisanych osób</div>
  </div>
</template>

<script>
  import ParticipantListItem from "./participant-list-item.vue";

  export default {
    props: ['participants'],
    components: {ParticipantListItem},
    methods: {
      removeParticipant(participant) {
        let indexToRemove = this.participants.indexOf(participant);
        this.participants.splice(indexToRemove, 1);
      }
    }
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
