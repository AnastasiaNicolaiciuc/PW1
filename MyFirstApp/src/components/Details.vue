<template>
  <div v-if="user" class="list">
    <div>Name: {{ user.name }}</div>
    <div>Phone: {{ user.phone }}</div>
    <div>Email: {{ user.email }}</div>
  </div>
</template>

<script>
export default {
  name: "CDetails",
  props: {
    user: Object,
  },
};
</script>

<style scoped>
.list {
  padding: 12px;
  width: 50%;
  border: 1px solid white;
}
</style>
