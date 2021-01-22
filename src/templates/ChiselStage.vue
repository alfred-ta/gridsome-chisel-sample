<template>
  <Layout>
    <div class="container justify-center content-center grid grid-cols-1 py-10 px-auto markdown px-6 xl:px-12 w-full max-w-3xl mx-auto xl:w-3/4">
      <h1 class="text-2xl mb-2 text-center text-primary">{{$page.stage.title}}</h1>
      <p class="font-light text-sm text-center text-gray mb-6"> Posted on {{$page.satge.date}} </p>
      <div id="body" class="max-auto-sm text-left" v-html="body" />
    </div>
  </Layout>
</template>

<page-query>
  query Stage ($path: String!) {
    stage: chiselStage (path: $path) {
      id,
      name,
      slug,
      date (format: "MMMM DD, YYYY"),
      path
    }
  }
</page-query>

<script>
  import MarkdownIt from "markdown-it";

  export default {
    computed: {
      body() {
        const md = new MarkdownIt();

        return md.render(this.$page.post.body);
      }
    }
  };
</script>

<style>
  #body{
    color: #2d3748;
  }
  #body h1 {
    font-size: 20px;
    padding-bottom: 10px;
    padding-top: 10px;
  }

  #body hr{
    padding-bottom: 10px;
  }

  #body pre{
    background-color: #2d3748;
    color: #a0aec0;
    margin: 20px;
    padding: 20px;
    border-radius: 20px;
    display: flex;
    flex-wrap: wrap;

  }

  #body pre code{ 
    overflow: scroll;

  }
  #body ul li{
    list-style-position: inside;
    list-style-type: square;
  }
  #body ol{
    padding-top: 10px;
    padding-bottom:  10px ;
    font-size: 20px;
    list-style-type: decimal;
    list-style-position: inside;
  }
</style>