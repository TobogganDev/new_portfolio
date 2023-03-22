<template>
  <div>
    <header class="md:h-20 w-full h-12 flex items-center justify-between border-b-2">
      <div class="w-full text-center">
        <h1 class="uppercase font-bold md:text-4xl lg:text-6xl">Thomas Doret-Gaïsset</h1>
      </div>
      <nav class="border-l-2 h-full w-3/12 px-3">
        <div id="burger" class="md:hidden flex w-full items-center justify-center h-full gap-2">
          <i class="fa-solid fa-bars-staggered"></i>
          <p class="uppercase">menu</p>
        </div>
        <ul id="items" class="md:flex gap-4 hidden items-center h-full justify-center">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/">Contact</NuxtLink></li>
        </ul>
      </nav>
    </header>
  </div>

  <div>
    <slot/>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@import '~/assets/scss/variables.scss';
h1{
  font-family: $strange;
}
</style>