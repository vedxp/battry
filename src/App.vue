<template>
  <Nav/>
  <div class="max-w-screen-lg w-full mt-16 slg:mt-20 mb-10 slg:mb-14 mx-auto px-8 py-6 slg:px-24 lg:mt-48">
    <Hero/>
    <main class="grid grid-cols-1 sm:grid-cols-2 slg:grid-cols-3 gap-6 slg:gap-8 pt-8 mx-auto sm:w-auto slg:w-full">
      <Content/>
    </main>
    <Footer/>
  </div>
</template>

<script setup>
import Nav from "./components/Nav.vue";
import Hero from "./components/Hero.vue";
import Content from "./components/Content.vue";
import Footer from "./components/Footer.vue";
</script>
