<template>
  <Teleport to="body">
    <a-modal v-model:visible="visible" title="Add Note" footer="">
        <a-form >
            <a-form-item v-bind="validateInfos.title">
                <a-input v-model:value="modelRef.title" />
            </a-form-item>
            <a-form-item v-bind="validateInfos.content">
                <a-textarea v-model:value="modelRef.content" />
            </a-form-item>
            <a-form-item>
                <a-button :loading="store.loadingState" type="primary" @click.prevent="onSubmit">Save</a-button>
                <a-button :disabled="store.loadingState" type="text" class="cancel" @click="onCancel">Cancel</a-button>
            </a-form-item>
        </a-form>
    </a-modal>
  </Teleport>
  <a-button type="primary" @click="onShow" class="footerButton">Add Note</a-button>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
import { Form } from 'ant-design-vue';
import { useNotesStore } from '@/store/notes.store';
const useForm = Form.useForm;

export default defineComponent({
  setup() {
    const store = useNotesStore();
    const visible = ref(false);
    const modelRef = reactive({
      title: '',
      content: '',
    });
    // Validations - inputs cant be empty
    const { validate, validateInfos } = useForm(
      modelRef,
      reactive({
        title: [
          {
              required: true,
              message: 'Please input title',
          },
        ],
        content: [
          {
              required: true,
              message: 'Please input content',
          },
        ],
      }),
    );
    const onCancel = () => {
      visible.value = false;
    };
    const onSubmit = () => {
      validate()
        .then(async (res: {title: string, content: string}) => {
          console.log("here: ", store.addNewNote)
          await store.addNewNote(res.title, res.content);
          console.log(res, modelRef);
        })
        .then(() => {
          visible.value = false;
        })
        .catch(err => {
          console.log('error', err);
        });
    };
    const onShow = () => {
      visible.value = true;
    };

    return {
      validateInfos,
      onSubmit,
      modelRef,
      onCancel,
      visible,
      onShow,
      store
    };
  },
});
</script>

<style scoped>
.cancel {
  margin-left: 10px;
  color: var(--button-background);
}
.footerButton {
  display: block;
  margin-left: auto;
}
</style>
  