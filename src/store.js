import Vue from 'vue'
import Vuex from 'vuex'
import data from './assets/data.json';

Vue.use(Vuex)


export default new Vuex.Store({
  state:{
    //données brutes

    interventions:data.interventions,
    filterValue:'',
    filterValueColumn: '',
    filterColumnName: '',
    resultInterventions:[],
    pagedInterventions:[],

    lists:{
      techniciens:data.techniciens,
      etats:data.etats
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
    pageSize:0,
    pageNumber:1,
  },



  getters:{
    getAll:function (state) {
      return state.interventions;
    },
    //méthodes de récupération de données à appeler via 'this.$store.getters' dans les composants
    //retourne les listes des données fixes
    getLists:function (state) {
      return state.lists
    },
    //retourne la liste des interventions
    getInterventions:function (state, getters) {

      state.selected = [];
      state.resultInterventions = state.interventions;

      state.resultInterventions = getters.getFilteredIntervention;

      state.resultInterventions = getters.getFilteredColumnInterventions;

      state.resultInterventions = getters.getSortedInterventions;

      state.pagedInterventions = getters.getPageInterventions;

      return state.pagedInterventions;
    },



    //retourne la liste des interventions sélectionnées
    getSelected:function (state) {
      return state.selected
    },
    getSorted:function (state) {
      return state.sortState
    },
    getPageNumber:function (state) {
      return state.pageNumber
    },
    getPageOccurrences: function (state) {
      if (state.pageSize ===0)
        return 1;
      if (state.resultInterventions.length % state.pageSize === 0)
        return Math.floor(state.resultInterventions.length / state.pageSize);
      else
        return Math.floor(state.resultInterventions.length / state.pageSize) +1;
    },
    getSortedInterventions: function (state) {
      for(let key in state.sortState){
        if (state.sortState[key]==="a")
          return state.resultInterventions.sort((a, b) => {
            if (a[key] < b[key])
              return -1;
            if (a[key] > b[key])
              return 1;
            return 0;
          });
        if (state.sortState[key]==="d")
          return state.resultInterventions.sort((a, b) => {
            if (a[key] < b[key])
              return 1;
            if (a[key] > b[key])
              return -1;
            return 0;
          });
      }
      return state.resultInterventions ;
    },

    getPageInterventions: function(state) {
      if (state.pageSize===0)
        return state.resultInterventions;
      else{
        let startIndex = (state.pageNumber-1) * state.pageSize;
        let endIndex = state.pageNumber * state.pageSize;
        return state.resultInterventions.slice(startIndex,endIndex);
      }
    },

    getFilteredColumnInterventions: function(state) {
      let filteredArray = [];
      let expr = new RegExp(state.filterValueColumn, "i");
      for (let i = 0; i < state.resultInterventions.length; i++) {
        let test = false;
        (Object.values(state.resultInterventions[i])).forEach(function (item, index) {
          if ((Object.keys(state.resultInterventions[i])[index]) === state.filterColumnName) {
            if (expr.test(item) &&(test === false)) {
              filteredArray.push(state.resultInterventions[i]);
              test = true;
            }
          }else if(state.filterColumnName === "" &&(test === false) ) {
            filteredArray.push(state.resultInterventions[i]);
            test = true;
          }

        })
      }
      return filteredArray;
    },

    getFilteredIntervention: function(state) {
      let filteredArray = [];
      let expr = new RegExp(state.filterValue, "i");
      for (let i = 0; i < state.resultInterventions.length; i++) {
        let test = false;
        (Object.values(state.resultInterventions[i])).forEach(function (item) {
          if (expr.test(item) &&(test === false)) {
            filteredArray.push(state.resultInterventions[i]);
            test = true;
          }
        })
      }
      return filteredArray;
    },

    getDisplayMessagePagin: function(state) {

      let interventionsLength = state.interventions.length;
      let resultLength = state.resultInterventions.length;
      let startIndex = ((state.pageNumber-1) * state.pageSize) +1;
      let endIndex = state.pageNumber * (state.pageSize == 0? resultLength : state.pageSize)  ;
      let messageDisplay = ' Affichage de '+ startIndex + ' - ' + endIndex + ' de ' + resultLength + ' entrées (filtrées de ' + interventionsLength  + ' entrées)';
      return messageDisplay;
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
          else if (state.sortState[key]==="d")
            state.sortState[key] = "";
          else
            state.sortState[key] = "a";
        }else
          state.sortState[key] = "";
      }
    },
    changePageSize:function(state, pageSize) {
      state.pageSize = pageSize;
      state.pageNumber = 1;
    },
    changePageNumber:function(state, pageNumber) {
      state.pageNumber = pageNumber;
    },

    changeValueColumnFilter:function(state, filterValueColumn) {
      state.filterValueColumn = filterValueColumn;
    },

    changeNameColumnFilter:function(state, filterColumnName) {
      state.filterColumnName = filterColumnName;
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
    },
    changePageSize:function(context, pageSize) {
      context.commit('changePageSize', pageSize);
    },
    changePageNumber:function(context, pageNumber) {
      context.commit('changePageNumber', pageNumber);
    },

    changeValueColumnFilter:function(context, filterValueColumn) {
      context.commit('changeValueColumnFilter', filterValueColumn);
    },

    changeNameColumnFilter:function(context, filterNameColumn) {
      context.commit('changeNameColumnFilter', filterNameColumn);
    },
  }
})
