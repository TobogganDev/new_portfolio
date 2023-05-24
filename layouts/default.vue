<template>
  <div>
    <header class="md:h-20 w-full h-12 flex items-center justify-between border-b-2">
      <div class="w-full text-center">
        <h1 class="uppercase font-bold md:text-4xl lg:text-6xl">Thomas Doret-Gaïsset</h1>
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
