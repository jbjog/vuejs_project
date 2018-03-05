<template>
  <div>
    <div id="logo" >
      <img src="./../assets/logo.png"/>
    </div>
    <h1>Interventions</h1>

    <formintervention></formintervention>

    <controlpanel></controlpanel>
    <interventionTable></interventionTable>

  </div>
</template>


<script>
  import interventionTable from '@/components/InterventionTable/InterventionTable.vue'
  import controlpanel from '@/components/ControlPanel/ControlPanel.vue'
  import formintervention from '@/components/FormIntervention/FormIntervention.vue'


  export default {
    name: 'Home',
    components: {
      interventionTable,
      controlpanel,
      formintervention,

    }
  }
</script>
