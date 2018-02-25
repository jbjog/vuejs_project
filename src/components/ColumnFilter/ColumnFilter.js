
export default {

  name: 'ColumnFilter',

  props: ['value'],
  data() {

    return {

      filterValue: ''

    }

  },
  methods: {

    catchSearch() {
      this.$store.dispatch('changeColumnFilter', this.filterValue);
    }

  },


}
