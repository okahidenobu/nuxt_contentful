<template>
  <div>
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

    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <hr />
          <div v-for="item in items" :key="item.sys.id" class="post-preview">
            <a v-bind:href="'/post/' + item.sys.id">
              <h2 class="post-title">{{ item.fields.title }}</h2>
            </a>
            <p class="post-meta">
              Posted by
              <a href="#">{{ item.fields.author.fields.name }}</a>
              {{item.fields.publishDate}}
            </p>
          </div>
          <hr />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { fetchblogs } from "@/api";

export default {
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