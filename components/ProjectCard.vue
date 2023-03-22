<template>
  <div>
    <div class="project py-3 px-6 border-b-2 bg-transparent overflow-hidden relative">
      <img :src="project.src" alt="hover img" class="w-full absolute top-0 left-0 opacity-0 ">
      <div class="content relative flex items-center justify-between">
        <h3>{{ project.name }}</h3>
        <div class="arrow py-2 px-4 border-2 rounded-full">
          <i class="fa-solid fa-arrow-right"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const project = defineProps(['name','src']);
</script>

<style lang="scss" scoped>
.project{
  transition: all .6s cubic-bezier(.86, 0, .07, 1);
  &:hover{
    @apply py-4;
    img{
      opacity: 1;
    }
    .content .arrow{
      @apply pl-8;
    }
  }
  img{
    transition: all .6s cubic-bezier(.86, 0, .07, 1);
    
  }
  .arrow{
  transition: all .6s cubic-bezier(.86, 0, .07, 1);

  }
}
</style>