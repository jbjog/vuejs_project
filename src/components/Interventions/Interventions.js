import intervention from '@/components/Intervention/Intervention.vue'

export default {
  name: 'Interventions',
  components: {
    intervention
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
