<template>
  <div class="bg-light">
    <!-- Page Header -->
    <header class="masthead" style="background-image: url('~assets/images/home-bg.jpg')">
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <div class="site-heading">
              <h1>{{ items[0].fields.author.fields.name }} が著者のブログ一覧</h1>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- カード -->
    <div class="container my-5">
      <div class="row">
        <div v-for="item in items" :key="item.sys.id" class="card col-4">
          <!-- <svg
            class="bd-placeholder-img card-img-top"
            width="100%"
            height="180"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
            role="img"
            aria-label="Placeholder: Image cap"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#868e96" />
            <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text>
          </svg>-->

          <div class="card-body">
            <img
              class="bd-placeholder-img card-img-top"
              v-bind:src="item.fields.heroImage.fields.file.url"
            />
            <h5 class="card-title">{{ item.fields.title }}</h5>
            <div class="card-text">
              {{ removeHtml($md.render(item.fields.body)) }}
              ...
            </div>
            <nuxt-link v-bind:to="'/post/' + item.sys.id" class="btn btn-primary mt-2">ページを開く</nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <nuxt-link to="/">トップに戻る</nuxt-link>
  </div>
</template>

<script>
import { fetchPostsByAthorId } from "@/api";

const striptags = require("striptags");

export default {
  methods: {
    removeHtml(baseHtml) {
      return striptags(baseHtml).substring(0, 150);
    }
  },
  async asyncData({ params }) {
    let ret = await fetchPostsByAthorId(params.id);

    // console.log(ret)

    return ret;
  }
};
</script>
