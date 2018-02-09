<template>
  <div>
    <h1>Interventions</h1>
    <div  class="responsive-table-line">
      <table id="listeinterventions"  class="table table-bordered">
        <thead>
        <tr>
          <th>Id</th>
          <th>Titre</th>
          <th>Résumé</th>
          <th>Affectation</th>
          <th>Client</th>
          <th>Etat</th>
        </tr>
        </thead>
        <interventions></interventions>
      </table>
    </div>
  </div>
</template>

<script>
  import interventions from '@/components/Interventions/Interventions.vue'

  export default {
    name: 'InterventionsList',
    components: {
      interventions
    }
  }
</script>
