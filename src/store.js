import Vue from 'vue'
import Vuex from 'vuex'
import data from './assets/data.json';

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
    //retourne les listes des données fixes
    getLists:function (state) {
      return state.lists
    },
    //retourne la liste des interventions
    getInterventions:function (state) {
      return state.interventions
    }
  },
  mutations:{
    //méthodes de MAJ à appeler depuis les 'actions'
    //ajoute une intervention à la liste
    addIntervention:function (state,intervention) {
      state.interventions.push(intervention)
    },
    //suppression d'une intervention
    deleteIntervention:function (state,intervention) {
      let index = -1;
      //récupération de l'index grace à son id
      for (let i = 0; i < state.interventions.length; i++) {
        if (state.interventions[i].id === intervention.id) {
          index = i;
          break;
        }
      }
      //MAJ du tableau
      if (index !== -1)
        state.interventions.splice(index, 1);
    },
  },
  actions:{
    //méthodes de MAJ à appeler via 'this.$store.dispatch' dans les composants
    //ajoute une intervention à la liste
    addIntervention:function (context,intervention) {
      context.commit('addIntervention',intervention)
    },
    //suppression d'une intervention
    deleteIntervention:function (context) {
      context.commit('deleteIntervention')
    }
  }
})
