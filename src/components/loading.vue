<template>
  <div id="loading">
    <img
      class="img"
      src="@/assets/images/loading.svg"
      alt="loading..."
      width="200"
    />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
#loading {
  position: absolute;
  z-index: 1000;
  backdrop-filter: blur(4px);
  height: 100vh;
  width: 100vw;
  text-align: center;
  display: flex;
  justify-content: center;
  transition: all 2s ease-in-out;
}
</style>
