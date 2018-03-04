<template>
  <div id="globalFilterDiv">

    <fieldset>
      <legend>Recherche par mot clé</legend>
      <div class="inputDiv">
        <input v-on:keyup="catchSearch" type="text" v-model="filterValue"/>
        <span @click="clearFilter" class="deleteFilter noselect">X</span>
      </div>
    </fieldset>
  </div>

</template>

<script src="./Global_Filter.js"/>
<style src="./Global_Filter.css"/>
