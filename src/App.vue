<template>
  <div id="app">
    <message>Hello There</message>
    <message>Hello There, Part Deux</message>
  </div>
</template>

<script>
  // 11. Command that imports component(s) from other Vue files
  import Message from './components/Message.vue';

  export default {
    name: 'app',
    // 12. Specifies what the child components of the root component are
    components: { Message },
    data () {
      return {
        
      }
    }
  }
</script>

<style>

</style>
