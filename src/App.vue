<template>
  <v-app class="web-bg">
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  })
}
</script>

<style>

  .web-bg {
    background: #c5c6c9 !important;
  }

</style>
