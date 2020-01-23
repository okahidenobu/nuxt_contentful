<template class="bg-light">
  <div>
    <header class="masthead" style="background-image: url('~assets/images/home-bg.jpg')">
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-13 col-md-13 mx-auto">
            <div class="site-heading">
              <h1>{{ fields.title }}</h1>
              <p style="float:right">
                posted by
                <nuxt-link
                  v-bind:to="'/author/' + fields.author.sys.id"
                >{{fields.author.fields.name }}</nuxt-link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <div v-html="$md.render(fields.body)"></div>
      <p>タグ</p>
      <ul>
        <li v-for="tag in fields.tags">
          <nuxt-link v-bind:to="'/tag/' + tag">{{ tag }}</nuxt-link>
        </li>
      </ul>

      <nuxt-link to="/">トップに戻る</nuxt-link>
    </div>
  </div>
</template>

<script>
import { fetchEntryByentryId } from "@/api";

export default {
  async asyncData({ params }) {
    let ret = await fetchEntryByentryId(params.id);

    // console.log(ret.fields);

    return ret;
  }
};
</script>
