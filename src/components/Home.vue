<template>
  <div>
    <img id="logo" src="./../assets/logo.png"/>
    <h1>Interventions</h1>
    <formintervention></formintervention>
    <controlpanel></controlpanel>
    <tableau></tableau>
  </div>
</template>


<script>
  import tableau from '@/components/Tableau/Tableau.vue'
  import controlpanel from '@/components/ControlPanel/ControlPanel.vue'
  import formintervention from '@/components/FormIntervention/FormIntervention.vue'

  export default {
    name: 'Home',
    components: {
      tableau,
      controlpanel,
      formintervention
    }
  }
</script>
