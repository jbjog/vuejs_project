export default {
  name: 'ControlPanel',
  components: {

  },
  data() {
    return {

    }
  },
  methods: {
    showFormPanel:function () {
      this.$modal.show('form-intervention',{modify:false});
    }

  }
}
