<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <header>
    <h1 class="logo">
      <a href="#"><img src="../assets/logo_black.png" alt="누리어로고" /></a>
    </h1>
    <nav>
      <a href="#" class="system"><strong>누리어</strong>시스템</a>
      <a href="#" class="jt"><strong>누리어</strong>제이티</a>
    </nav>
  </header>
</template>

<script>
export default {

};
</script>

<style scoped>
body {}
header {
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
}
header > * {
  margin: 20px 40px;
}

header nav > a {
  position: relative;
  margin-left: 20px;
  font-size: 17px;
  font-weight: 400;
  transition: all 0.5s ease-in-out;
}
</style>
