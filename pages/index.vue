<template>
  <div>
    <h1>ブログ一覧</h1>

    <ul>
      <li v-for="item in items" :key="item.sys.id">
        <a v-bind:href="'/post/' + item.sys.id">{{ item.fields.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { fetchblogs } from "@/api";

export default {
  async asyncData() {
    return await fetchblogs();
  }
};
</script>
