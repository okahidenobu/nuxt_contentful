<template>
  <div>
    <p>{{ fields.title }}</p>
    <pre>entryId : {{ this.$route.params.id }}</pre>
  </div>
</template>

<script>
import { fetchEntries, fetchEntry, fetchPostsByTagId } from "@/api";

export default {
  async asyncData({ params }) {
    let ret = await fetchEntry(params.id);

    console.log(ret);

    return ret;
  }
};
</script>
