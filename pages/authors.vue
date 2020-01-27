<template>
  <div>
    <!-- Page Header -->
    <header class="masthead" style="background-image: url('~assets/images/home-bg.jpg')">
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <div class="site-heading">
              <h1>著者一覧ページ</h1>
            </div>
          </div>
        </div>
      </div>
    </header>

    <div class="container my-5">
      <div class="row">
        <div v-for="item in items" :key="item.sys.id" class="col-sm-6 col-lg-4 mb-4">
          <div>
            <img v-bind:src="item.fields.image.fields.file.url" style="width:300px" />
            <nuxt-link v-bind:to="'/author/' + item.sys.id">{{ item.fields.name }}</nuxt-link>
          </div>
        </div>
      </div>
      <nuxt-link to="/">トップに戻る</nuxt-link>
    </div>
  </div>
</template>

<script>
import { fetchAuthors } from "@/api";

export default {
  async asyncData() {
    return await fetchAuthors();
  }
};
</script>
