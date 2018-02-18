import intervention from '@/components/Intervention/Intervention.vue'

export default {
  name: 'Tableau',
  components: {
    intervention
  },
  computed: {
    getInterventions: function () {
      return this.$store.getters.getInterventions;
    }
  }
}
