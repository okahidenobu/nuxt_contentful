<template>
  <div class="bg-light">
    <!-- Page Header -->
    <header class="masthead" style="background-image: url('~assets/images/home-bg.jpg')">
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <div class="site-heading">
              <h1>ブログ一覧</h1>
              <span class="subheading">NUXTとContentfulを用いてテストブログを作成</span>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- カード -->
    <div class="container my-5">
      <div class="row">
        <div v-for="item in items" :key="item.sys.id" class="col-sm-6 col-lg-4 mb-4">
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

          <div class="card h-100">
            <img
              class="bd-placeholder-img card-img-top"
              v-bind:src="item.fields.heroImage.fields.file.url"
            />
            <div class="card-body">
              <h5 class="card-title">{{ item.fields.title }}</h5>
              <div class="card-text" style="margin-bottom: 100px">
                {{ removeHtml($md.render(item.fields.body)) }}
                ...
              </div>
              <div style="position:absolute;bottom:20px;">
                <p class="post-meta mt-3">
                  Posted by
                  <a v-bind:href="'/author/' + item.fields.author.sys.id">
                    {{
                    item.fields.author.fields.name
                    }}
                  </a>
                  <!-- {{ item.fields.publishDate }} -->
                </p>
                <a v-bind:href="'/post/' + item.sys.id" class="btn btn-primary mt-2">ページを開く</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a href="/authors/">著者一覧ページへ</a>
    </div>
  </div>
</template>

<script>
import { fetchblogs } from "@/api";

const striptags = require("striptags");

export default {
  methods: {
    removeHtml(baseHtml) {
      return striptags(baseHtml).substring(0, 150);
    }
  },

  async asyncData() {
    let ret = await fetchblogs();
    console.log(ret.items);

    return {
      items: ret.items
    };
  }
};
</script>

<style lang="stylus"></style>
