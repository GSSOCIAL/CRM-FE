<template>
  <div class="toastContainer">
    <ToastItem
      v-for="message in messages"
      :key="message.id"
      :message="message"
      @close="
        () => {
          removeMessage(message.id);
        }
      "
    />
  </div>
</template>

<script setup lang="ts">
import { makeid } from "~/helpers/functions";

const app = useNuxtApp();
const messages = ref([]);

app.hook("toast:message", (message) => {
  const id = makeid();
  const toast = {
    ...message,
    id: id,
  };
  messages.value = [...messages.value, toast];
  setTimeout(() => {
    removeMessage(id);
  }, toast.duration ?? 3000);
});

const removeMessage = (messageId: string) => {
  const index = messages.value.findIndex(({ id }) => id == messageId);
  if (index >= 0) {
    messages.value.splice(index, 1);
  }
};
</script>

<style lang="scss" scoped>
.toastContainer {
  position: fixed;
  left: 30px;
  right: 30px;
  bottom: 30px;
  height: 0;
  grid-gap: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  z-index: 140;
}
</style>
