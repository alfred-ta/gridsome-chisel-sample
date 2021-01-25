  <template>
    <Layout>
      <div class="container grid grid-cols-1 justify-center px-auto mx-auto flex flex-wrap flex-col md:flex-row items-center ">
        <div class="mx-0 px-auto max-w-xl mx-auto">
          <h1 class="text-2xl font-bold leading-tight mb-6 mt-4 text-center text-primary">Speaker</h1>
          <ul>
            <li v-for="{ node } in $page.speakers.edges" :key="node.id">
              <div class=" border-solid border-2 border-primary max-auto-sm overflow-hidden shadow-lg p-20 m-4 rounded-md">
                <h1 class="text-2xl text-primary font-bold">Name:  {{node.name}}  </h1>
                <p class="pt-5 text-darkgray"> Title: {{node.title}} </p>
                <p class="pt-5 text-darkgray"> Company: {{node.company}} </p>
                <p class="pt-5 text-darkgray"> Bio: {{node.bio}} </p>
              </div>
              <img class="w-full md:w-5/5 z-50" v-if="node.image_square && node.image_square.file && node.image_square.file._url"
                :src="node.image_square.file._url">
            </li>
          </ul>

      </div>
    </div>
  </Layout>
</template>

<page-query>
  query Speakers {
    speakers: allChiselSpeaker {
      edges {
        node {
          id,
          name,
          title,
          company,
          bio,
          image_square {
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
  export default {
    metaInfo: {
      title: 'Speaker'
    },
    method: {
      
    } 

  }
</script>