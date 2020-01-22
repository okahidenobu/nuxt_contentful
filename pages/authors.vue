<template>
  <div>
    <!-- Page Header -->
    <header
        class="masthead"
        style="background-image: url('~assets/images/home-bg.jpg')"
    >
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

    <div class="container">
      <div>
        <div v-for="item in items" :key="item.sys.id">
          <div>
            <img
                v-bind:src="item.fields.image.fields.file.url"
                style="width:300px"
            />
            <a v-bind:href="'/author/' + item.sys.id">{{ item.fields.name }}</a>
          </div>
        </div>
      </div>
      <a href="/">トップに戻る</a>
    </div>
  </div>
</template>

<script>
  import {fetchAuthors} from "@/api"

  export default {
    async asyncData() {
      return await fetchAuthors()
    }
  }
</script>
