<template>
    <div  class="responsive-table-line">
      <table id="listeinterventions"  class="table table-bordered">
        <tfoot>
        <tr>
        </tr>
        </tfoot>
        <thead>

        <tr>
          <th @click="sortByColumn('id')" >
            Id
            <img v-show="isAscending('id')" src="./../../assets/sorta.png"/>
            <img v-show="isDescending('id')" src="./../../assets/sortd.png"/>
          </th>
          <th @click="sortByColumn('titre')">
            Titre
            <img v-show="isAscending('titre')" src="./../../assets/sorta.png"/>
            <img v-show="isDescending('titre')" src="./../../assets/sortd.png"/>
          </th>
          <th @click="sortByColumn('resumee')">
            Résumé
            <img v-show="isAscending('resumee')" src="./../../assets/sorta.png"/>
            <img v-show="isDescending('resumee')" src="./../../assets/sortd.png"/>
          </th>
          <th @click="sortByColumn('affectation')">
            Affectation
            <img v-show="isAscending('affectation')" src="./../../assets/sorta.png"/>
            <img v-show="isDescending('affectation')" src="./../../assets/sortd.png"/>
          </th>
          <th @click="sortByColumn('client')">
            Client
            <img v-show="isAscending('client')" src="./../../assets/sorta.png"/>
            <img v-show="isDescending('client')" src="./../../assets/sortd.png"/>
          </th>
          <th @click="sortByColumn('etat')">
            Etat
            <img v-show="isAscending('etat')" src="./../../assets/sorta.png"/>
            <img v-show="isDescending('etat')" src="./../../assets/sortd.png"/>
          </th>
          <th>Actions</th>
        </tr>
        </thead>
        <tbody>
          <intervention v-for="task in getInterventions" :key="task.id" v-bind:elt="task"></intervention>
        </tbody>
      </table>
    </div>
</template>

<script src="./Tableau.js"/>
<style src="./Tableau.css"/>
