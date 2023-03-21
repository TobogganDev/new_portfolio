<template>
  <div>
    <header class="w-full h-12 flex items-center pl-10 justify-between border-b-2">
      <div class="w-9/12 text-center">
        <h1 class="uppercase font-bold text-7xl">Thomas Doret-Gaïsset</h1>
      </div>
      <nav class="border-l-2 h-full w-3/12">
        <div id="burger" class="md:hidden flex w-full items-center justify-center h-full gap-2">
          <i class="fa-solid fa-bars-staggered"></i>
          <p class="uppercase">menu</p>
        </div>
        <ul class="md:flex gap-4 hidden items-center h-full justify-center">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
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
  font-family: $beamie;
  color: transparent;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: $text;
}
</style>