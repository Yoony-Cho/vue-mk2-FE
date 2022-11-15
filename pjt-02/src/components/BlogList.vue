<template>
  <div v-for="data in blogDesc" :key="data">
    <h5>{{ data.title }}</h5>
    <p>{{data.content}}</p>
    <p>{{data.date}}</p>
  </div>
</template>

<script>
export default {
  name: 'BlogList',
  props : {
    blogDesc : Array,
  }
}
</script>

<style>

</style>