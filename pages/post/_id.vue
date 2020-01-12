<template>
  <div>
    <h1>{{ fields.title }} のブログページ</h1>

    <p>著者</p>
    <a v-bind:href="'/author/' + fields.author.sys.id">{{
      fields.author.fields.name
    }}</a>
    <pre>{{ fields.author }}</pre>

    <p>タグ</p>
    <ul>
      <li v-for="tag in fields.tags">
        <a v-bind:href="'/tag/' + tag">{{ tag }}</a>
      </li>
    </ul>
    <pre>entryId : {{ this.$route.params.id }}</pre>
  </div>
</template>

<script>
import { fetchEntryByentryId } from "@/api";

export default {
  async asyncData({ params }) {
    let ret = await fetchEntryByentryId(params.id);

    console.log(ret);

    return ret;
  }
};
</script>
