<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div id="app">
    <div id="no03" class="wrapper">
      <div class="boxes">
        <div class="box system-on">NURIER SYSTEM</div>
      </div>
    </div>
    <div id="no04" class="wrapper">
      <div class="boxes">
        <div class="box system-on">NURIER JT</div>
      </div>
    </div>
    <Header />
    <Intro />
    <MainAnim />
    <LinkNav />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Intro from "@/components/Intro_anim.vue";
import MainAnim from "@/components/Main_anim.vue";
import LinkNav from "@/components/LinkNav.vue"

export default {
  name: "App",
  components: {
    Header,
    Intro,
    MainAnim,
    LinkNav
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
a {
  color: #000;
  text-decoration: none;
  outline: none;
}

a:hover,
a:active {
  text-decoration: none;
}
/* Common */
body,
p,
h1,
h2,
h3,
h4,
h5,
h6,
ul,
ol,
li,
dl,
dt,
dd,
table,
th,
td,
form,
fie ldset,
legend,
input,
textarea,
button,
select {
  margin: 0;
  padding: 0;
}
body,
input,
textarea,
select,
table {
  font-family: "SCoreDream";
  font-size: 12px;
}
.space {
  display: inline-block;
  width: 0.28em; /* 가시적인 공백 너비 조정 */
}
.sr-only {
  clip: rect(1px, 1px, 1px, 1px) !important;
  width: 1px !important;
  border: 0 !important;
  height: 1px !important;
  margin: -1px !important;
  padding: 0 !important;
  overflow: hidden !important;
  position: absolute !important;
  clip-path: inset(50%) !important;
  white-space: nowrap !important;
}
</style>
