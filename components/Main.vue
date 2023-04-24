<template>
  <div :class="{'dark': darkMode}">
    <div class="bg-white dark:bg-dim-900">
      <!-- App -->
      <div v-if="user" class="min-h-full">
        <div class="grid grid-cols-12 mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:gap-5">
          <!-- left sidebar -->
          <div class="md:block xs:col-span-1 xl:col-span-2">
            <div class="sticky top-0">
              <SidebarLeft />
            </div>
          </div>

          <!-- Main Content  -->
          <main class="col-span-12 md:col-span-8 xl:col-span-6">
            {{ user }}
            <router-view />
          </main>

          <!-- Right side bar -->
          <div class="md:block md:col-span-3 xl:col-span-4">
            <div class="sticky top-0">
              <SidebarRight />
            </div>
          </div>
        </div>
      </div>

      <!-- Auth page -->
      <AuthPage v-else />
    </div>
  </div>
</template>
  
  <script setup>
import { useAuthStore } from "@/stores/auth";

let store = useAuthStore();

const user = computed(() => store.user);

// watchEffect(() => {
//   console.log("User:", user);
//   // alert(user);
//   // re-render the page when the user state changes
//   console.log("User state changed:", user);
// });

const darkMode = ref(false);
</script>