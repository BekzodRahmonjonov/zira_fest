<template>
  <div>
    <h1>Hello World</h1>
    <app></app>
  </div>
</template>

<script>
import app from '../components/app'

export default {
  components: { app },
  data() {
    return {
      app: false,

    }
  },
  mounted() {
  },
  methods: {

  }
}
</script>
