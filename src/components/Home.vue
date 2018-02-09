<template>
  <div>
    <h1>Interventions</h1>
    <tableau></tableau>
  </div>
</template>


<script>
  import tableau from '@/components/Tableau/Tableau.vue'

  export default {
    name: 'Home',
    components: {
      tableau,
    }
  }
</script>
