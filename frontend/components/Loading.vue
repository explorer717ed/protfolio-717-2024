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
  animation: logo-animate 2s infinite ease-in-out;
}
.logo717-1{
  position: absolute;
  border-right: $cube-width solid var(--color-text);
  height: #{ $cube-width * 4 };
  bottom: 0;
  left: #{ $cube-width * 3 };
  animation: logo-animate 2s 0.2s infinite ease-in-out;
}
.logo717-7r{
  position: absolute;
  border-top: $cube-width solid var(--color-text);
  border-right: $cube-width solid var(--color-text);
  width: #{ $cube-width * 4 };
  height: #{ $cube-width * 5 };
  left: $cube-width;
  animation: logo-animate 2s 0.4s infinite ease-in-out;
}


@keyframes logo-animate {
  40%, 45%  {transform: translateX(10px) translateY(-10px) rotate(5deg); opacity: .2;}
  0%, 90%, 100% {transform: translateX(-10px) translateY(10px); opacity: 1;}
}
</style>