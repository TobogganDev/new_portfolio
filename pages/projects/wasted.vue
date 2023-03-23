<template>
  <div class="w-11/12 mx-auto my-8">
    <NuxtLink to="/" class="text-lg py-2 px-4 border-2 back">
      <i class="fa-solid fa-arrow-left"></i>
      Back
    </NuxtLink>
    
    <div class="w-full pt-6 flex items-center justify-center flex-col gap-10 h-[70vh]">
      <h2 class="md:text-9xl text-6xl text-[#F0A04B]">Wasted Paris Shop</h2>
      <ul class="gap-10 flex text-lg">
        <li class="project-info">
          <span>Role</span>
          <span>Developer</span>
        </li>
        <li class="project-info">
          <span>Year</span>
          <span>2023</span>
        </li>
        <li class="project-info">
          <span>Url</span>
          <span><a href="https://github.com/TobogganDev/Wasted-Paris" target="_blank">Github <i class="fa-solid fa-arrow-up-right-from-square"></i></a></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.back{
  transition: all .6s ease;
  &:hover{
    box-shadow: 5px 5px 0 2px #F0A04B;
    
  }
}


</style>