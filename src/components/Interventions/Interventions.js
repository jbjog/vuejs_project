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
