export default {
  props: ['value'],
  methods: {

    catchSearch() {
      console.log(this.demo);
      //this.$emit('newSearchValue', this.demo)

    }

  },

  data() {

    return {

      demo: ''

    }

  },
}
