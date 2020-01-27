<template>
  <div class="bg-light">
    <div>
      <!-- Page Header -->
      <header class="masthead" style="background-image: url('~assets/images/home-bg.jpg')">
        <div class="overlay"></div>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-md-10 mx-auto">
              <div class="site-heading">
                <h1>{{ this.$route.params.id }} タグを含むブログ一覧</h1>
              </div>
            </div>
          </div>
        </div>
      </header>

      <!-- カード -->
      <div class="container my-5">
        <div class="row">
          <div v-for="item in items" :key="item.sys.id" class="col-sm-6 col-lg-4 mb-4">
            <div class="card h-100">
              <img
                class="bd-placeholder-img card-img-top"
                v-bind:src="item.fields.heroImage.fields.file.url"
              />
              <div class="card-body">
                <h5 class="card-title">{{ item.fields.title }}</h5>
                <div class="card-text" style="margin-bottom: 55px">
                  {{ removeHtml($md.render(item.fields.body)) }}
                  ...
                </div>
                <div style="position:absolute;bottom:20px;">
                  <nuxt-link v-bind:to="'/post/' + item.sys.id" class="btn btn-primary mt-2">ページを開く</nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nuxt-link to="/">トップに戻る</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { fetchPostsByTagId } from "@/api";

const striptags = require("striptags");

export default {
  methods: {
    removeHtml(baseHtml) {
      return striptags(baseHtml).substring(0, 150);
    }
  },
  async asyncData({ params }) {
    let ret = await fetchPostsByTagId(params.id);

    // console.log(ret);

    return ret;
  }
};
</script>
