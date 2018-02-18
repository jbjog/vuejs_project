export default {

  name: 'GlobalFilter',

  props: ['value'],
  data() {

    return {

      filterValue: ''

    }

  },
  methods: {

    catchSearch() {
      this.$store.dispatch('changeFilterValue', this.filterValue);
    }

  },


}
