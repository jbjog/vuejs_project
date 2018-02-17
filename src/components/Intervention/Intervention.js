export default {
  props: ['elt'],
  data() {
    return {
      internal_value:this.elt,
      edit:{
        titre:false,
        resumee:false,
        affectation:false,
        client :false,
        etat :false
      }
    }
  },
  methods: {
    changeEdit(field) {
      for(let key in this.edit){
        if (key===field){
          this.edit[key]= true;
          setTimeout(()=>{
            this.$refs[key].focus();
          },300);
        }
      }
    },
    unedit(field) {
      for(let key in this.edit){
        if (key===field){
          this.edit[key]= false;
        }
      }
    },
    showModifPanel() {
      this.$modal.show('form-intervention',{modify:true,intervention:this.internal_value});
    }
  }
}
