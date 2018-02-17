<template>
  <modal name="form-intervention" @before-open="beforeOpen"
         height="auto" :scrollable="true" :clickToClose="false">
      <div>
        <div id="form-header">
          <h2 v-if="updateState">Modification</h2>
          <h2 v-else>Nouvelle Intervention</h2>
          <label>id : {{ inputValues.id }}</label>
        </div>
        <form>

          <label for="form-titre">Titre : </label>
          <input id="form-titre" name="titre" type="text" placeHolder="Titre" v-model="inputValues.titre">

          <label for="form-client">Client : </label>
          <input id="form-client" name="client" type="text" placeHolder="Client" v-model="inputValues.client">

          <label for="form-technicien">Technicien : </label>
          <select id="form-technicien" v-model="inputValues.affectation">
            <option disabled selected>--Technicien--</option>
            <option v-for="tech in techniciensList">{{tech}}</option>
          </select>

          <label for="form-desc">Description : </label>
          <textarea id="form-desc" name="desc" placeHolder="Description" v-model="inputValues.resumee">{{inputValues.resumee}}</textarea>

          <label for="form-etat">Etat : </label>
          <select id="form-etat" v-model="inputValues.etat">
            <option disabled selected>--Etat--</option>
            <option v-for="etat in etatsList">{{etat}}</option>
          </select>

          <div id="form-buttons">
            <input v-if="!updateState" type="button" @click="cancel" value="Annuler"/>
            <input v-if="updateState" type="button" @click="close" value="Fermer"/>
            <input v-else type="button" @click="addIntervention" value="Ajouter"/>
          </div>
        </form>
      </div>
  </modal>
</template>


<script src="./FormIntervention.js"></script>
<style src="./FormIntervention.css"></style>
