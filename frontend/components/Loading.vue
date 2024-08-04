<template>
  <div class="logo717-wrap">
    <div class="logo717-7l"></div>
    <div class="logo717-1"></div>
    <div class="logo717-7r"></div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
$cube-width: 15px;

.logo717-wrap{
  position: relative;
  width: #{ $cube-width * 6 };
  height: #{ $cube-width * 6 };
}

.logo717-7l{
  position: absolute;
  border-top: $cube-width solid var(--color-text);
  border-right: $cube-width solid var(--color-text);
  width: $cube-width;
  height: #{ $cube-width * 2 };
  bottom: 0;
  animation: example 2s infinite ease-in-out;
}
.logo717-1{
  position: absolute;
  border-right: $cube-width solid var(--color-text);
  height: #{ $cube-width * 4 };
  bottom: 0;
  left: #{ $cube-width * 3 };
  animation: example 2s 0.2s infinite ease-in-out;
}
.logo717-7r{
  position: absolute;
  border-top: $cube-width solid var(--color-text);
  border-right: $cube-width solid var(--color-text);
  width: #{ $cube-width * 4 };
  height: #{ $cube-width * 5 };
  left: $cube-width;
  animation: example 2s 0.4s infinite ease-in-out;
}


@keyframes example {
  0%   {transform: translateX(-10px) translateY(10px);}
  40%  {transform: translateX(10px) translateY(-10px);}
  50%  {transform: translateX(10px) translateY(-10px);}
  90% {transform: translateX(-10px) translateY(10px);}
  100% {transform: translateX(-10px) translateY(10px);}
}
</style>