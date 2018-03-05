<template>
  <div>
    <div id="logo" >
      <img src="./../assets/logo.png"/>
    </div>
    <h1>Interventions</h1>

    <formintervention></formintervention>

    <controlpanel></controlpanel>
    <tableau></tableau>

  </div>
</template>


<script>
  import tableau from '@/components/Tableau/InterventionTable.vue'
  import controlpanel from '@/components/ControlPanel/ControlPanel.vue'
  import formintervention from '@/components/FormIntervention/FormIntervention.vue'


  export default {
    name: 'Home',
    components: {
      tableau,
      controlpanel,
      formintervention,

    }
  }
</script>
