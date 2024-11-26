<template>
    <div>
      <Child @text-sent="updateText" />
      <p>Texto recibido: {{ receivedText }}</p>
    </div>
  </template>
  
  <script>
  import Child from './Child.vue';
  
  export default {
    components: { Child },
    data() {
      return {
        receivedText: '',
      };
    },
    methods: {
      updateText(text) {
        this.receivedText = text;
      },
    },
  };
  </script>
  