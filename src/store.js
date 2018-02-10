import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
  state:{
    //données brutes
    testValue:false,
    interventions:[
      {
        id:1,
        titre: 'ma première tâche',
        resumee: 'description',
        affectation: 'Pierre',
        client: 'CESI',
        etat: 'Terminé'
      },
      {
        id:2,
        titre: 'ma deuxième tâche',
        resumee: 'description',
        affectation: 'Paul',
        client: 'Mairie',
        etat: 'En cours'
      },
    ],
    lists:{
      techniciens:['Pierre', 'Paul', 'Jacques'],
      etats:['En Attente','En cours','Terminé']
    }
  },
  getters:{
    //méthodes de récupération de données à appeler via 'this.$store.getters' dans les composants
    // param state obligatoire
    getTestValue:function (state) {
      return state.testValue
    },
    getLists:function (state) {
      return state.lists
    },
    getInterventions:function (state) {
      return state.interventions
    }
  },
  mutations:{
    //méthodes de MAJ à appeler depuis les 'actions'
    // param state obligatoire
    addIntervention:function (state,intervention) {
      state.interventions.push(intervention)
    },
    changeTestValue:function (state) {
      state.testValue = !state.testValue
    },
    // exemple avec paramètre (1 seul max)
    changeTestValueTo:function (state,value) {
      state.testValue = value
    },
    changeTestValueTo:function (state,value) {
      state.testValue = value
    },
  },
  actions:{
    //méthodes de MAJ à appeler via 'this.$store.dispatch' dans les composants
    // param context obligatoire
    addIntervention:function (context,intervention) {
      context.commit('addIntervention',intervention)
    },
    changeTestValue:function (context) {
      context.commit('changeTestValue')
    },
    //exemple avec paramètre (1 seul max)
    changeTestValueTo:function (context,value) {
      context.commit('changeTestValueTo',value)
    },
  }
})
