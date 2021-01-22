<template>
  <Layout>
    <div class="pt-24">
      <div class="container pb-20 px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <!--Left Col-->
        <div class="flex flex-col w-full md:w-2/5 justify-center justify-between text-center md:text-left pb-10">
          <p class="uppercase tracking-loose w-full text-primary">Headline text</p>
          <h1 class="py-4 text-5xl font-bold leading-tight w-full text-primary">My Blog Site!!</h1>
          <p class="leading-normal text-2xl pb-8 w-full text-primary">Subtitle</p>
          <g-link class="text-2xl justify-center" to="/blog"><button class="bg-primary text-white font-bold  hover:bg-darkgray rounded-full my-6 py-4 px-8 shadow-lg ">Blog</button></g-link>
        </div>
        <!--Right Col-->
        <div class="w-full md:w-3/5 py-6 text-center">
          <img class="w-full md:w-5/5 z-50">
        </div>
      </div>
    </div>
    <section class="container mx-auto pt-6">
      <h1 class="text-2xl font-bold text-primary text-center">Projects</h1>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Home'
  }
}
</script>

<style>
  .home-links a {
    margin-right: 1rem;
  }
</style>