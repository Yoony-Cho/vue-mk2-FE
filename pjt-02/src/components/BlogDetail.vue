<template>
  $route.params.id
  <div>
    <h4>상세페이지</h4>
    <h5>{{ blogDesc[$route.params.id].title }}</h5>
    <p>{{ blogDesc[$route.params.id].content }}</p>
  </div>
</template>

<script>
export default {
    name: 'BlogDetail',
    props : {
        blogDesc : Array,
    }
}
</script>

<style>

</style>