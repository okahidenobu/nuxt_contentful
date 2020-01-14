<template>
  <div>
    <h1>{{ fields.title }} のブログページ</h1>

    <p>著者</p>
    <a v-bind:href="'/author/' + fields.author.sys.id">
      {{ fields.author.fields.name }}
    </a>

    <div v-html="$md.render(fields.body)"></div>
    <p>タグ</p>
    <ul>
      <li v-for="tag in fields.tags">
        <a v-bind:href="'/tag/' + tag">{{ tag }}</a>
      </li>
    </ul>

    <a href="/">トップに戻る</a>
  </div>
</template>

<script>
import { fetchEntryByentryId } from "@/api";

export default {
  async asyncData({ params }) {
    let ret = await fetchEntryByentryId(params.id);

    console.log(ret.fields);

    return ret;
  }
};
</script>
