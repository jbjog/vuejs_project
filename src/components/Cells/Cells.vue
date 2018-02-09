<template>
  <td @dblclick="changeEdit" >
    <input ref="text" @blur="unedit" v-show="edit && edit_type=='text'" type="text" v-model="internal_value"/>
    <select ref="select" @blur="unedit" v-show="edit && edit_type=='select'" v-model="internal_value">
      <option v-for="tech in listData">{{tech}}</option>
    </select>
    <span v-show="!edit">{{ internal_value }}</span>
  </td>
</template>

<script src="./Cells.js"/>
<style src="./Cells.css"/>
