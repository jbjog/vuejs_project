<template>
    <div  class="responsive-table-line">
      <table id="listeinterventions"  class="table table-bordered">
        <tfoot>
        <tr>
        </tr>
        </tfoot>
        <thead>

        <tr>
          <th>
          </th>
          <th>Titre</th>
          <th>Résumé</th>
          <th>Affectation</th>
          <th>Client</th>
          <th>Etat</th>
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
