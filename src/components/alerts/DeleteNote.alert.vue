<template>
  <Teleport to="body">
    <div class="infoContainer">
      <div class="warning">
          <warning-filled :style="{fontSize: '22px', color: 'white', margin: 'auto', width:'42px'}"/>
          <p>Do you want to delete these notes?</p>
          <a-button ghost class="alertButtons" @click="emitButtonAction(false)">No</a-button>
          <a-button danger class="alertButtons" @click="emitButtonAction(true)">Yes</a-button>
      </div>
    </div>
  </Teleport>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { WarningFilled } from '@ant-design/icons-vue';

export default defineComponent({
  components: {
    WarningFilled
  },
  setup(props, context) {
    const emitButtonAction = (buttonActionContinue: boolean) => {
      context.emit('buttonAction', buttonActionContinue);
    }
    return {
      emitButtonAction,
    }
  }
});
</script>

<style scoped>
.infoContainer {
  position: fixed;
  bottom:0%;
  width: 100%;
}
.warning {
  background-color: red;
  width: 40%;
  display: flex;
  text-align: left;
  border-radius: 5px;
  margin: auto;
  margin-bottom: 5px;
}
p {
  flex-grow: 1;
  margin: auto;
  color: white;
}
.alertButtons {
  margin: auto;
  margin: 5px;
  width: 6em;
  border-radius: 5px;
}
</style>