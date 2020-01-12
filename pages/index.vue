<template>
  <div>
    <ul>
      <li v-for="item in items" :key="item.sys.id">
        <a href="/post/1">{{ item.fields.title }}</a>
      </li>
    </ul>

    <!-- fetchEntriesとfetchPostsByTagIdの確認用 -->
    <!-- <pre>
      {{ items }}
    </pre>-->
  </div>
</template>

<script>
import { fetchEntries, fetchPostsByTagId } from "@/api";

export default {
  async asyncData() {
    let ret = await fetchEntries("blogPost");
    // let ret = await fetchPostsByTagId("blogPost", "javascript");

    // console.log(ret);

    return ret;
  }
};
</script>
