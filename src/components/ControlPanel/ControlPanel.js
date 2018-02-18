export default {
  name: 'ControlPanel',
  components: {

  },
  data() {
    return {

    }
  },
  methods: {
    showFormPanel() {
      this.$modal.show('form-intervention',{modify:false});
    },
    multipleDelete(){
      for(let i =0;i<this.$store.getters.getSelected.length;i++){
        this.$store.dispatch('deleteIntervention',this.$store.getters.getSelected[i]);
      }
      this.$store.dispatch('initSelected');
    }
  }
}
