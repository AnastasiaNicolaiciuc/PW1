<template>
  <ul class="list">
    <li
      @click="$emit('input', item)"
      :key="index"
      v-for="(item, index) in list"
    >
      {{ item.name }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "CList",

  props: {
    list: {
      type: Array,
    },
  },
};
</script>

<style scoped>
.list {
  width: 50%;
}

ul {
  padding: 12px;
  border: 1px solid white;
}

li {
  cursor: pointer;
}

@media (hover: hover) {
  li:hover {
    color: rgb(29, 117, 29);
    font-size: 18px;
  }
}

</style>
