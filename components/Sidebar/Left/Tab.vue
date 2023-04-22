<template>
  <NuxtLink
    to="#"
    class="flex items-center p-3 w-min hover:bg-gray-200 rounded-full dark:hover:bg-dim-200 text-black dark:text-white"
    :class="defaultTransition"
  >
    <div class="w-6 h-6 text-dark" :class="defaultTransition">
      <slot name="icon"></slot>
    </div>
    <div class="hidden ml-4 text-xl xl:block" :class="labelClasses">
      <slot name="name"></slot>
    </div>
    <!-- <slot /> -->
  </NuxtLink>
</template>
<script setup>
const { defaultTransition } = useTailwindConfig();
const props = defineProps({
  active: {
    type: Boolean,
    default: false,
  },
});

const labelClasses = computed(() =>
  props.active ? "font-semibold" : "font-normal"
);
</script>