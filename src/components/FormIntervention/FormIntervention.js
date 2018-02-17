export default {
  name: 'FormIntervention',
  data() {
    return {
      updateState:false,
      inputValues:{}
    }
  },
  methods: {
    beforeOpen(event) {
      this.updateState = event.params.modify;
      if (!this.updateState){
        this.initValues()
      }else{
        this.inputValues = event.params.intervention;
      }
    },
    initValues:function () {
      this.inputValues = {
        id: this.getNextId,
        titre: '',
        resumee: '',
        affectation: '',
        client: '',
        etat: ''
      }
    },
    close: function () {
      this.$modal.hide('form-intervention');
    },
    addIntervention: function () {
      this.$store.dispatch('addIntervention',this.inputValues);
      this.$modal.hide('form-intervention');
    },
    cancel: function () {
      this.$modal.hide('form-intervention');
    },
  },
  computed: {
    //retourne la liste des techniciens
    techniciensList:function () {
      return this.$store.getters.getLists['techniciens'];
    },
    //retourne la lists des etats
    etatsList:function () {
      return this.$store.getters.getLists['etats'];
    },
    //determine le prochain id
    getNextId:function () {
      let tab =this.$store.getters.getInterventions;
      let max=Number.NEGATIVE_INFINITY;
      tab.forEach(function(element) {
        max = Math.max(max,element.id)
      });
      return max + 1;
    },
  }

}
