  <template>
    <Layout>
      <div class="container grid grid-cols-1 justify-center px-auto mx-auto flex flex-wrap flex-col md:flex-row items-center ">
        <div class="mx-0 px-auto max-w-xl mx-auto">
          <h1 class="text-2xl font-bold leading-tight mb-6 mt-4 text-center text-primary">Challenge</h1>
          <ul>
            <li v-for="{ node } in $page.challenges.edges" :key="node.id">
              <div class=" border-solid border-2 border-primary max-auto-sm overflow-hidden shadow-lg p-20 m-4 rounded-md">
                <h1 class="text-2xl text-primary font-bold">Name:  {{node.Name}}  </h1>
                <p class="pt-5 text-darkgray">Code:  {{node.Code}} </p>
                <p class="pt-5 text-darkgray">Points: {{node.Points}} </p>
              </div>
            </li>

          </ul>

      </div>
    </div>
  </Layout>
</template>

<page-query>
  query Challenges {
    challenges: allChiselChallenge {
      edges {
        node {
          id,
          Name,
          Code,
          Points
        }
      }
    }
  }
</page-query>

<script>
  export default {
    metaInfo: {
      title: 'Stage'
    },
    methods: {
      getPath(id) {
        return `/stage/${id}`;
      }
    }
  }
</script>