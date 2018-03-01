import globalfilter from '@/components/Global_Filter/Global_Filter.vue'

export default {
  name: 'ControlPanel',
  components: {
    globalfilter
  },
  data() {
    return {
      pageValue:"Tout",
      pageSizeList:["Tout","5","10","15","20","50","100"]
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
    },
    changePageSize(){
      if (this.pageValue===this.pageSizeList[0]){
        this.$store.dispatch('changePageSize',0);
      }else{
        this.$store.dispatch('changePageSize', parseInt( this.pageValue));
      }
    },
  }
}
