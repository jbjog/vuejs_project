<template>
  <td @dblclick="change">
    <input v-show="edit && edit_type=='text'" type="text" v-model="cell_value"/>
    <select v-show="edit && edit_type=='select'" v-model="cell_value">
      <option v-for="tech in listData">{{tech}}</option>
    </select>
    <span v-show="!edit">{{ cell_value }}</span>
  </td>
</template>

<script>
  //import tasks from '@/components/Tasks/Tasks.vue'

  export default {
    props: ['cell_value','edit_type','value_type'],
    data() {
      return {
          edit:false,
          lists:{
            techniciens:['Pierre', 'Paul', 'Jacques'],
            etats:['En Attente','En cours','Terminé']
          }
      }
    },
    methods: {
      change() {
        if (this.edit_type!="none")
          this.edit = !this.edit
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
  /*
  Vue.component('cells', {
    props: ['cell_value'],
    template: '<p>Mon nom est {{cell_value}}</p>',
    data() {
      return {
        bool:true
      }
    }
  });*/
</script>
