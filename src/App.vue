<template>
  <div>
    <router-view/>
    <FooterNav v-if="$route.meta.showFooterNav"/>
  </div>
</template>

<script>
  import FooterNav from './components/FooterNav/FooterNav'
  export default {
    components:{
      FooterNav
    },
  }
</script>

<style scoped>

</style>
