// from https://github.com/vuejs/repl/blob/main/src/transform.ts

import { compileFile, ReplStore, File } from "@vue/repl";

const store = new ReplStore();

// const file = new File('Any.vue', `<template>
// <div class="count">
//   {{ count }}
//   <button @click="count++">Add</button>
// </div>
// </template>

// <!-- <script lang="ts" setup>
// import { ref } from "vue";
// const count = ref(0);
// </script> -->
// <script>
// import { ref } from "vue";
// export default {
// setup() {
//   const count = ref(0);
//   return {
//     count,
//   };
// },
// };
// </script>

// <style>
// .count {
// background: pink;
// }
// </style>
// `)

const file = new File(
  "Any.vue",
  `<template>
<div class="count">
  {{ count }}
  <button @click="count++">Add</button>
</div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const count = ref(0);
</script>

<style>
.count {
background: pink;
}
</style>
`
);

void (async function () {
  await compileFile(store, file);
  console.log(file.compiled);

  type Key = [keyof typeof file.compiled];

  const keys = Object.keys(file.compiled) as Key;
  for (const n of keys) {
    console.log(`${n}\r\n`);
    console.log(file.compiled[n]);
  }
})();
