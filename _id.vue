<template>
  <div>
    <p>{{ fields.title }}</p>
    <!-- <pre>
      {{ this.$route.params.id }}
    </pre> -->
  </div>
</template>

<script>
import { fetchEntries, fetchEntry, fetchPostsByTagId } from "@/api";

export default {
  async asyncData() {
    let ret = await fetchEntry(this.$route.params.id);

    console.log(ret);

    return ret;
  }
};
</script>
