<template>
  <Layout>
    <div class="container justify-center px-auto mx-auto flex flex-wrap items-center">
      <div class="justify-center px-auto mx-auto text-center">
        <h1 class="text-2xl leading-tight mb-6 mt-4 text-primary">About Me</h1>
        <!--
        -->
        <div class=" text-darkgray"> 
          <p>Add your info here
          </p>
          <br>
          <p>Add your info here
          </p>
          <br>
          <p>Add your info here
          </p>
        </div>
      </div>
  </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
title: 'About'
  }
}
</script>

<page-query>
query Person {
 person: allChiselParticipant {
  edges {
    node {
      id,
      Email

      }
    }
  }
}
</page-query>