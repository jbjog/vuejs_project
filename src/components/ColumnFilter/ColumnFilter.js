export default {

  name: 'ColumnFilter',

  props: ['value'],
  data() {

    return {

      filterValue: '',
      columnList : [
        {value:'id',label:'Id'},
        {value:'titre',label:'Titre'},
        {value:'resumee',label:'Résumé'},
        {value:'affectation',label:'Affectation'},
        {value:'client',label:'Client'},
        {value:'etat',label:'Etat'}
      ],
      column: '',

    }

  },
  methods: {

    catchSearch() {

      this.$store.dispatch('changeValueColumnFilter', this.filterValue);
      this.$store.dispatch('changeNameColumnFilter', this.column);

    },
    clearFilter(){
      this.filterValue='';
      this.column='';
      this.$store.dispatch('changeValueColumnFilter', this.filterValue);
      this.$store.dispatch('changeNameColumnFilter', this.column);
    },



  },


}
