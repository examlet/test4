<script setup lang="ts">
interface Props {
  modelValue?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
});

const emit = defineEmits(["update:modelValue"]);

const popup = ref<HTMLElement>();

watchEffect(() => {
  if (props.modelValue) focusAtPopup();
});

function closePopup(): void {
  emit("update:modelValue", false);
}

function focusAtPopup(): void {
  setTimeout(() => {
    if (popup.value) popup.value.focus();
  }, 100);
}

onMounted(() => {
  if (props.modelValue) focusAtPopup();
});
</script>

<template>
  <div v-if="props.modelValue" class="ui-popup-block" @mousedown="closePopup">
    <div @mousedown.stop @keydown.esc="closePopup" class="ui-popup" ref="popup" tabindex="0">
      <button @click="closePopup" class="ui-popup-close">×</button>
      <slot />
    </div>
  </div>
</template>

<style scoped>
.ui-popup-block {
  background-color: rgba(0, 0, 0, 0.281);
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ui-popup {
  position: relative;
  background-color: #fff;
  padding: 32px 64px;
  max-width: 60%;
  border-radius: 8px;
  box-shadow: 0px 0px 8px -2px #000;
  outline: none;
}

.ui-popup-close {
  position: absolute;
  border: none;
  background-color: gray;
  top: 16px;
  right: 16px;
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 24px;
  font-weight: 700;
  cursor: pointer;
  transition-duration: 300ms;
}

.ui-popup-close:hover {
  background-color: var(--color-gray);
}
</style>