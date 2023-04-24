<template>
  <div>
    <div class="pt-5 space-y-6">
      <form action="
        ">
        <UIInput v-model="data.username" label="username" placeholder="username" />
        <UIInput v-model="data.password" label="password" placeholder="password" type="password" />

        <div>
          <button @click.prevent="handleLogin">Login</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from "@/stores/auth";
const { login } = useAuthStore();
const data = reactive({
  username: "",
  password: "",
  loading: false,
});

const handleLogin = async () => {
  data.loading = true;
  try {
    await login({
      username: data.username,
      password: data.password,
    });
  } catch (error) {
  } finally {
    data.loading = false;
  }
  console.log(data);
};
</script>

<style>
</style>