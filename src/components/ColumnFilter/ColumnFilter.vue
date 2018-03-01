<template>
  <div>

    <input v-on:keyup="catchSearch" type="text" v-model="filterValue"/>
    <select v-model="column" @change="catchSearch">
      <option v-for="columnName in columnList">{{columnName}}</option>
    </select>
  </div>

</template>

<script src="./ColumnFilter.js"/>
<style src="./ColumnFilter.css"/>
