<template>
  <div>
    <ul>
      <li v-for="item in items" :key="item.sys.id">
        <a v-bind:href="'/author/' + item.sys.id">{{ item.fields.name }}</a>
        <!-- <pre>{{ item }}</pre> -->
      </li>
    </ul>
  </div>
</template>

<script>
import { fetchAuthors } from "@/api";

export default {
  async asyncData() {
    return await fetchAuthors();
  }
};
</script>
