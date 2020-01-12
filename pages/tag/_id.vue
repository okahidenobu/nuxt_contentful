<template>
  <div>
    <h1>{{ this.$route.params.id }} タグを含むブログ一覧</h1>

    <ul>
      <li v-for="item in items" :key="item.sys.id">
        <a v-bind:href="'/post/' + item.sys.id">{{ item.fields.title }}</a>
      </li>
    </ul>
    <a href="/">トップに戻る</a>
  </div>
</template>

<script>
import { fetchPostsByTagId } from "@/api";

export default {
  async asyncData({ params }) {
    let ret = await fetchPostsByTagId(params.id);

    console.log(ret);

    return ret;
  }
};
</script>
