<template>
  <div id="globalFilterDiv">

    <fieldset>
      <legend>Recherche par mot clé</legend>
      <input v-on:keyup="catchSearch" type="text" v-model="filterValue"/>
    </fieldset>
  </div>

</template>

<script src="./Global_Filter.js"/>
<style src="./Global_Filter.css"/>
