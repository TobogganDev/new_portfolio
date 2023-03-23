<template>
  <div class="w-11/12 mx-auto my-8">
    <NuxtLink to="/" class="text-lg py-2 px-4 border-2 back">
      <i class="fa-solid fa-arrow-left"></i>
      Back
    </NuxtLink>
    
    <div class="w-full pt-6 flex items-center justify-center flex-col gap-10 h-[70vh]">
      <h2 class="text-9xl text-[#F0A04B]">Civil Protection</h2>
      <ul class="gap-10 flex text-lg">
        <li class="project-info">
          <span>Role</span>
          <span>UX/UI Designer</span>
        </li>
        <li class="project-info">
          <span>Year</span>
          <span>2022</span>
        </li>
        <li class="project-info">
          <span>Url</span>
          <span><a href="https://www.figma.com/file/UaEcoexRruDy7plmVY3oAt/protection_civile?node-id=0%3A1&t=qXlx20OHWKB224eU-1" target="_blank">Figma <i class="fa-solid fa-arrow-up-right-from-square"></i></a></span>
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