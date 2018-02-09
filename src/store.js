import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
  state:{
    //données brutes
    testValue:false,
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
    }
  },
  mutations:{
    //méthodes de MAJ à appeler depuis les 'actions'
    // param state obligatoire
    changeTestValue:function (state) {
      state.testValue = !state.testValue
    },
    // exemple avec paramètre (1 seul max)
    changeTestValueTo:function (state,value) {
      state.testValue = value
    },
  },
  actions:{
    //méthodes de MAJ à appeler via 'this.$store.dispatch' dans les composants
    // param context obligatoire
    changeTestValue:function (context) {
      context.commit('changeTestValue')
    },
    //exemple avec paramètre (1 seul max)
    changeTestValueTo:function (context,value) {
      context.commit('changeTestValueTo',value)
    }
  }
})
