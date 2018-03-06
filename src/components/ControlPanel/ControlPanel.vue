<template>
  <div id="controlpanel">
    <globalfilter></globalfilter>
    <columnfilter></columnfilter>
      <div id="buttons">
        <a class="button blue" download="export.json" v-bind:href="makeTextFile">Exporter</a>
        <button id="multiple-delete-button" class="red" @click="multipleDelete">Supprimer</button>
        <button id="show-form-intervention" class="green" @click="showFormPanel">Ajouter</button>
        <select v-model="pageValue" @change="changePageSize">
          <option v-for="element in pageSizeList">{{element}}</option>
        </select>
      </div>
      <div id="page">
        <button v-for="pageOcc in getPagesArray"
                :disabled="isActivePage(pageOcc)"
                :class="isActivePage(pageOcc)? 'activePage' : ''"
                @click="changePageNumber(pageOcc)">
          {{ pageOcc  }}
        </button>
      </div>
    <div>
     <span> {{ getDisplayMessagePagin }}</span>
    </div>
  </div>
</template>


<script src="./ControlPanel.js"/>
<style src="./ControlPanel.css"/>
