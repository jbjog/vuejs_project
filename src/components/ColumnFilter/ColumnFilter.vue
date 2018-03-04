<template>
  <div id="columnFilterDiv">

    <fieldset>
      <legend>Recherche par colonne</legend>
      <div class="inputDiv">
        <input v-on:keyup="catchSearch" type="text" v-model="filterValue"/>
        <span @click="clearFilter" class="deleteFilter noselect">X</span>
      </div>
      <select v-model="column" @change="catchSearch">
        <option v-for="columnName in columnList" :value="columnName.value">{{columnName.label}}</option>
      </select>
    </fieldset>
  </div>

</template>

<script src="./ColumnFilter.js"/>
<style src="./ColumnFilter.css"/>
