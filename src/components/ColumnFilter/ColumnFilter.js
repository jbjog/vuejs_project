export default {

  name: 'ColumnFilter',

  props: ['value'],
  data() {

    return {

      filterValue: '',
      columnList : ['id', 'titre', 'resumee', 'affectation', 'client', 'etat'],
      column: '',

    }

  },
  methods: {

    catchSearch() {

      this.$store.dispatch('changeValueColumnFilter', this.filterValue);
      this.$store.dispatch('changeNameColumnFilter', this.column);

    }



  },


}
