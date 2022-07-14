<script setup>
import { ref } from "vue";

// const msg = ref("Hello World!");
// const v = "";
const header = ref("Shopping List App");
</script>

<template>
  <!--  <h1>{{ msg }}</h1>-->
  <!--  <h1>{{ msg.toLocaleUpperCase() }}</h1>-->

  <!--  <h1>{{ v || "hello jerry" }}</h1>-->
  <!--  <h1>{{ !v ? "v is null" : "hello jerry" }}</h1>-->
  <!--  <input v-model="msg" />-->
  <h1>{{ header }}</h1>
</template>
