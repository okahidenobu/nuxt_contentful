<template>
  <div>
    <!-- <ul>
      <li v-for="item in items" :key="item.sys.id">{{ item.fields.title }}</li>
    </ul>-->

    <!-- fetchEntriesとfetchPostsByTagIdの確認用 -->
    <!-- <pre>
      {{ items }}
    </pre>-->

    <!-- fetchEntryの確認用 -->
    <pre>
      {{ fields }}
    </pre>
  </div>
</template>

<script>
import { fetchEntries, fetchEntry, fetchPostsByTagId } from "@/api";

export default {
  async asyncData() {
    // let ret = await fetchEntries("blogPost");
    let ret = await fetchEntry("6BSvwCHUSVUyyMohbJq2Wb");
    // let ret = await fetchPostsByTagId("blogPost", "javascript");

    console.log(ret);

    return ret;
  }
};
</script>
