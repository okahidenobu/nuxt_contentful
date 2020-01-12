<template>
  <div>
    <h1>{{ items[0].fields.author.fields.name }} の著者ページ</h1>
    <ul>
      <li v-for="item in items" :key="item.sys.id">
        <a v-bind:href="'/post/' + item.sys.id"
          >{{ item.fields.title }}(著者:{{ item.fields.author.fields.name }})</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
import { fetchPostsByAthorId } from "@/api";

export default {
  async asyncData({ params }) {
    let ret = await fetchPostsByAthorId(params.id);

    console.log(ret);

    return ret;
  }
};
</script>
