<template>
  <div>
    <h1>Interventions</h1>
    <controlpanel></controlpanel>
    <tableau></tableau>
  </div>
</template>


<script>
  import tableau from '@/components/Tableau/Tableau.vue'
  import controlpanel from '@/components/ControlPanel/ControlPanel.vue'

  export default {
    name: 'Home',
    components: {
      tableau,
      controlpanel
    }
  }
</script>
