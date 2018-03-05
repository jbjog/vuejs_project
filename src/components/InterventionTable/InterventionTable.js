import intervention from '@/components/Intervention/Intervention.vue';

export default {
  name: 'InterventionTable',
  data() {
    return {
      columnValueFilter :'',
      columnIndex: 0
    }
  },
  components: {
    intervention
  },
  methods: {
    sortByColumn:function (column) {
      this.$store.dispatch('changeSortValue',column);
    },
    isAscending:function (column) {
      return this.$store.getters.getSorted[column] ==="a";
    },
    isDescending:function (column) {
      return this.$store.getters.getSorted[column] ==="d";
    },
  },
  computed: {
    getInterventions: function () {
      return this.$store.getters.getInterventions;
    },
    getSortedState:function () {
      return this.$store.getters.getSorted;
    },
  }
}
