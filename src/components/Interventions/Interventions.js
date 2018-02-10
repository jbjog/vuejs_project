import cells from '@/components/Cells/Cells.vue'

export default {
  name: 'Interventions',
  components: {
    cells
  },
  data() {
    return {

    }
  },
  computed: {
    getInterventions: function () {
      return this.$store.getters.getInterventions;
    }
  }
}
