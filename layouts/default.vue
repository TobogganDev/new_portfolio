<template>
  <div>
    <header class="md:h-20 w-full h-12 flex items-center justify-between border-b-2">
      <div class="w-full text-center">
        <h1 class="uppercase font-bold md:text-4xl lg:text-6xl">Thomas Doret-Gaïsset</h1>
      </div>
      <div class="border-l-2 h-full px-8 flex flex-center items-center text-4xl">
        <i class="fa-solid fa-moon"></i>
      </div>
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