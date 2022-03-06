<script lang="ts" setup>
const props = defineProps({
    tabList: { type: Array, required: true }
})

const activeTab = ref(1)

const emit = defineEmits(["update:modelValue"]);

watch(activeTab, () => {
   emit("update:modelValue", activeTab.value - 1);
});
</script>

<template>
  <div class="border-1 border-teal-500  rounded-sm overflow-hidden">
    <ul class="w-full list-none h-full bg-[#fff] p-1 text-center flex items-center">
      <li
        v-for="(tab, index) in props.tabList"
        :key="index"
        class="w-full py-1 px-5px rounded-sm mx-5px cursor-pointer transition-colors duration-300"
        :class="[index + 1 == activeTab ? 'text-white font-medium bg-teal-500' : 'text-black bg-[#f5f7f9] hover:bg-[#dddfe1]']"
        @click="activeTab = index + 1"
      > {{tab}} </li>
    </ul>
  </div>
</template>