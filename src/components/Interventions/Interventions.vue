<template>
  <tbody>
    <intervention v-for="task in getInterventions" :key="task.id" v-bind:elt="task"></intervention>
  </tbody>
</template>


<script src="./Interventions.js"/>
<style src="./Interventions.css"/>
