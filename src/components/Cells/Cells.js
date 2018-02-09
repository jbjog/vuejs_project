export default {
  props: ['cell_value','edit_type','value_type'],
  data() {
    return {
      edit:false,
      internal_value:this.cell_value,
      lists:{
        techniciens:['Pierre', 'Paul', 'Jacques'],
        etats:['En Attente','En cours','Terminé']
      }
    }
  },
  methods: {
    changeEdit() {
      if (this.edit_type!="none"){
        this.edit = !this.edit;
        setTimeout(()=>{
          this.$refs[this.edit_type].focus();
        },300);
      }

    },
    unedit() {
      this.edit = false;
    }

  },
  computed: {
    listData: function () {
      for(var key in this.$store.getters.getLists){
        if (key===this.value_type){
          return this.$store.getters.getLists[key];
        }
      }
      return [];
    }
  }
}
