import intervention from '@/components/Intervention/Intervention.vue';
//import columnfilter from '@/components/ColumnFilter/ColumnFilter.vue'

export default {
  name: 'Tableau',
  data() {
    return {
      columnValueFilter :'',
      columnIndex: 0
    }
  },
  components: {
    intervention,
    //columnfilter
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
    filterColumn: function() {
        console.log('eyh')
        //this.$store.dispatch('changefilterColumnValue', this.columnValueFilter, this.columnIndex);


    },
    getSortedState:function () {
      return this.$store.getters.getSorted;
    },
  }
}
