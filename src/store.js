import Vue from 'vue'
import Vuex from 'vuex'
import data from './assets/data.json';

Vue.use(Vuex)


export default new Vuex.Store({
  state:{
    //données brutes

    interventions:data.interventions,
    filterValue:'',
    resultInterventions:[],

    lists:{
      techniciens:data.techniciens,
      etats:data.techniciens
    },
    selected:[],
    sortState:{
      id:"",
      titre:"",
      resumee:"",
      affectation:"",
      client:"",
      etat:""
    },

  },

  getters:{
    //méthodes de récupération de données à appeler via 'this.$store.getters' dans les composants
    //retourne les listes des données fixes
    getLists:function (state) {
      return state.lists
    },
    //retourne la liste des interventions
    getInterventions:function (state, getters) {


      state.resultInterventions = state.interventions;

      state.resultInterventions = getters.getFilteredIntervention;

      state.resultInterventions = getters.getFilteredColumnInterventions;

      state.resultInterventions = getters.getSortedInterventions;

      state.resultInterventions = getters.getPageInterventions;

      return state.resultInterventions;
    },



    //retourne la liste des interventions sélectionnées
    getSelected:function (state) {
      return state.selected
    },
    getSorted:function (state) {
      return state.sortState
    },

    getSortedInterventions: function (state) {
      return state.resultInterventions ;
    },

    getPageInterventions: function(state) {
      return state.resultInterventions;
    },

    getFilteredColumnInterventions: function(state) {
      return state.resultInterventions;
    },

    getFilteredIntervention: function(state) {
      let filteredArray = [];
      let expr = new RegExp(state.filterValue, "i");
      for (let i = 0; i < state.resultInterventions.length; i++) {
        let test = false;
        (Object.values(state.resultInterventions[i])).forEach(function (item, index) {
          if (expr.test(item) &&(test === false)) {
            filteredArray.push(state.resultInterventions[i]);
            test = true;
          }
        })
      }
      return filteredArray;
    }
  },
  mutations:{
    //méthodes de MAJ à appeler depuis les 'actions'
    //ajoute une intervention à la liste
    addIntervention:function (state,intervention) {
      state.interventions.push(intervention)
    },

    //suppression d'une intervention
    deleteIntervention:function (state,id) {
      let index = -1;
      //récupération de l'index grace à son id
      for (let i = 0; i < state.interventions.length; i++) {
        if (state.interventions[i].id === id) {
          index = i;
          break;
        }
      }
      //MAJ du tableau
      if (index !== -1)
        state.interventions.splice(index, 1);
    },
    //MAJ de l'état de sélection d'une intervention
    setSelected:function (state,payload){
      if(payload.selected)
        state.selected.push(payload.id);
      else{
        state.selected.splice(state.selected.indexOf(payload.id),1)
      }
    },
    //initialisation des interventions sélectionnées
    initSelected:function (state){
      state.selected = [];

    },
    changeFilterValue:function (state, filtervalue) {
      state.filterValue = filtervalue;
    },
    changeSortValue:function (state, column) {
      for(let key in state.sortState){
        if (key===column){
          if (state.sortState[key]==="a")
            state.sortState[key] = "d";
          else
            state.sortState[key] = "a";
        }else
          state.sortState[key] = "";
      }
    },
    sortInterventions:function () {

    },



  },
  actions:{
    //méthodes de MAJ à appeler via 'this.$store.dispatch' dans les composants
    //ajoute une intervention à la liste
    addIntervention:function (context,intervention) {
      context.commit('addIntervention',intervention)
    },
    //suppression d'une intervention
    deleteIntervention:function (context,id) {
      context.commit('deleteIntervention',id)
    },
    //MAJ de l'état de sélection d'une intervention
    setSelected:function (context,payload){
      context.commit('setSelected',payload);
    },
    //initialisation des interventions sélectionnées
    initSelected:function (context) {
      context.commit('initSelected');
    },
    changeTestValue:function (context) {
      context.commit('changeTestValue')
    },
    changeFilterValue:function(context, filterValue) {
      context.commit('changeFilterValue', filterValue);
    },
    changeSortValue:function(context, column) {
      context.commit('changeSortValue', column);
    }
  }
})
