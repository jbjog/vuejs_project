<template>
  <tbody>
    <tr v-for="task in toto">
      <cells class="col1" v-bind:cell_value="task.id" edit_type="none"></cells>
      <cells class="col2" v-bind:cell_value="task.titre" edit_type="text"></cells>
      <cells class="col3" v-bind:cell_value="task.resumee" edit_type="text"></cells>
      <cells class="col4" v-bind:cell_value="task.affectation" edit_type="select" value_type="techniciens"></cells>
      <cells class="col5" v-bind:cell_value="task.client" edit_type="text"></cells>
      <cells class="col6" v-bind:cell_value="task.etat" edit_type="select"  value_type="etats"></cells>
    </tr>
  </tbody>
</template>

<script>
  import cells from '@/components/Cells/Cells.vue'

  export default {
    name: 'Interventions',
    components: {
      cells
    },
    data() {
      return {
        toto: [
          {
            id:1,
            titre: 'ma première tâche',
            resumee: 'description',
            affectation: 'Pierre',
            client: 'CESI',
            etat: 'Terminé'
          },
          {
            id:2,
            titre: 'ma deuxième tâche',
            resumee: 'description',
            affectation: 'Paul',
            client: 'Mairie',
            etat: 'En cours'
          },
        ]
      }
    }
  }
</script>
