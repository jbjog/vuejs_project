<template>
  <div>
    <h1>Interventions</h1>
    <formintervention></formintervention>
    <interventionslist></interventionslist>
  </div>
</template>


<script>
  import interventionslist from '@/components/Interventions/InterventionsList.vue'
  import formintervention from '@/components/FormPanel/FormPanel.vue'

  export default {
    name: 'Home',
    components: {
      interventionslist,
      formintervention
    }
  }
</script>
