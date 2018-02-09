<template>
  <td @dblclick="changeEdit" >
    <input ref="text" @blur="unedit" v-show="edit && edit_type=='text'" type="text" v-model="internal_value"/>
    <select ref="select" @blur="unedit" v-show="edit && edit_type=='select'" v-model="internal_value">
      <option v-for="tech in listData">{{tech}}</option>
    </select>
    <span v-show="!edit">{{ internal_value }}</span>
  </td>
</template>

<script>
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
        for(var key in this.lists){
          if (key===this.value_type){
            return this.lists[key];
          }
        }
        return [];
      }
    }
  }
</script>
