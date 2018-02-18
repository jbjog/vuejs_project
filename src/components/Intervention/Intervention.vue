<template>
  <tr>
    <td class="col1" >{{ internal_value.id }}</td>

    <td @dblclick="changeEdit('titre')" class="col2">
      <input ref="titre" @blur="unedit('titre')" v-show="edit.titre" type="text" v-model="internal_value.titre"/>
      <span v-show="!edit.titre">{{ internal_value.titre }}</span>
    </td>

    <td @dblclick="changeEdit('resumee')" class="col3">
      <textarea ref="resumee" @blur="unedit('resumee')" v-show="edit.resumee" v-model="internal_value.resumee" rows="2">
        {{ internal_value.resumee }}
      </textarea>
      <span v-show="!edit.resumee">{{ internal_value.resumee }}</span>
    </td>

    <td @dblclick="changeEdit('affectation')" class="col4">
      <select ref="affectation" @blur="unedit('affectation')" v-show="edit.affectation" v-model="internal_value.affectation">
        <option v-for="element in this.$store.getters.getLists['techniciens']">{{element}}</option>
      </select>
      <span v-show="!edit.affectation">{{ internal_value.affectation }}</span>
    </td>

    <td @dblclick="changeEdit('client')" class="col5">
      <input ref="client" @blur="unedit('client')" v-show="edit.client" type="text" v-model="internal_value.client"/>
      <span v-show="!edit.client">{{ internal_value.client }}</span>
    </td>

    <td @dblclick="changeEdit('etat')" class="col6">
      <select ref="etat" @blur="unedit('etat')" v-show="edit.etat" v-model="internal_value.etat">
        <option v-for="element in this.$store.getters.getLists['etats']">{{element}}</option>
      </select>
      <span v-show="!edit.etat">{{ internal_value.etat }}</span>
    </td>

    <td class="col7">
      <button id="show-modif-intervention" class="blue" @click="showModifPanel">Modifier</button>
      <button id="delete-intervention" class="red" @click="deleteIntervention">Supprimer</button>
    </td>
  </tr>
</template>

<script src="./Intervention.js"/>
<style src="./Intervention.css"/>
