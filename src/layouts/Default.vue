<template>
  <div class="layout">
    <header class="md:flex md:items-center md:justify-around p-4 pb-0 shadow-lg md:pb-4">

      <!-- Global navigation -->
      <nav class="flex flex-wrap items-center justify-around text-primary font-bold">
        <div class="">
          <ul class="list-reset md:flex md:items-center">
            <li class="md:ml-4">
              <g-link class="nav__link block no-underline py-2 hover:text-darkgray md:border-none md:p-0" to="/">Home</g-link>

            </li>
            <li class="md:ml-4">
              <g-link class="nav__link  block no-underline hover:text-darkgray py-2 text-grey-darkest md:border-none md:p-0" to="/about/">About</g-link>

            </li>
            <li class="md:ml-4 inline-block leading-none invisible hover:text-darkgray lg:visible sm:invisible">
              <a class="nav_link hover:text-2xl" href="your github url"> <font-awesome :icon="['fab', 'github']"/> </a>
            </li>
            <li class="md:ml-4 inline-block leading-none hover:text-darkgray invisible lg:visible sm:invisible ">
              <a class="nav_link" href="your twitter url"><font-awesome :icon="['fab', 'twitter']"/></a>
            </li>
          </ul>
        </div>
      </nav>
      <!-- END Global navigation -->

    </header>

    <slot/>
    <footer class="mt-20 font-light text-gray w-full text-center border-grey p-4 pin-b text-primary">
      <p class="text-sm">Copyright © ADD YOUR NAME HERE 2020</p>
      <div class="justify-between hover-blue space-x-3">
      <a href="your github"> <font-awesome :icon="['fab', 'github']"/> </a>
      <a href="your twitter url"><font-awesome :icon="['fab', 'twitter']"/></a>
      </div>
      <div>
        <p class="font-light text-sm">Developed using Gridsome, Tailwindcss, and Contentful</p>
      </div>
    </footer>
  </div>

</template>

<static-query>
  query {
    metadata {
      siteName
    }
  }
</static-query>