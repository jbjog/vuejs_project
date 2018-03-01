<template>
  <div id="controlpanel">
    <globalfilter></globalfilter>
    <columnfilter></columnfilter>
    <button id="multiple-delete-button" class="red" @click="multipleDelete">Supprimer</button>
    <button id="show-form-intervention" class="green" @click="showFormPanel">Ajouter</button>
    <select v-model="pageValue" @change="changePageSize">
      <option v-for="element in pageSizeList">{{element}}</option>
    </select>
  </div>
</template>


<script src="./ControlPanel.js"/>
<style src="./ControlPanel.css"/>
