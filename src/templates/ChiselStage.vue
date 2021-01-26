<template>
  <Layout>
    <div class="container justify-center content-center grid grid-cols-1 py-10 px-auto markdown px-6 xl:px-12 w-full max-w-3xl mx-auto xl:w-3/4">
      <h1 class="text-2xl mb-2 text-center text-primary">{{$page.stage.name}}</h1>
      <p class="font-light text-sm text-center text-gray mb-6"> Posted on {{$page.stage.slug}} </p>
      <ul v-if="$page.stage.schedule_collection && $page.stage.schedule_collection.length > 0">
        <li v-for="schedule in $page.stage.schedule_collection" :key="schedule.id">
          <div class=" border-solid border-2 border-primary max-auto-sm overflow-hidden shadow-lg p-20 m-4 rounded-md">
            <h1 class="text-2xl text-primary font-bold">Title:  {{schedule.title}}  </h1>
            <ul v-if="schedule.speaker_collection">
              <li v-for="node in schedule.speaker_collection" :key="node.id">
                <div class=" border-solid border-2 border-primary max-auto-sm overflow-hidden shadow-lg p-20 m-4 rounded-md">
                  <h1 class="text-2xl text-primary font-bold">Name:  {{node.name}}  </h1>
                  <p class="pt-5 text-darkgray"> Title: {{node.title}} </p>
                  <p class="pt-5 text-darkgray"> Company: {{node.company}} </p>
                  <p class="pt-5 text-darkgray"> Bio: {{node.bio}} </p>
                </div>
                <img class="w-full md:w-5/5 z-50" v-if="node.image && node.image.file && node.image.file._url"
                  :src="node.image.file._url">
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </Layout>
</template>

<page-query>
  query Stage ($id: ID) {
    stage: chiselStage (id: $id) {
      id,
      name,
      slug,
      title,
      schedule_collection {
        id,
        title,
        speaker_collection {
          id,
          name,
          image {
            file {
              _url
            }
          }
        }
      }
    }
  }
</page-query>

<script>
  import MarkdownIt from "markdown-it";

  export default {

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