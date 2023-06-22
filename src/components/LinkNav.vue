<template>
  <nav class="link_nav">
    <a href="#one">Nurier System</a>
    <a href="#two">Experience</a>
    <a href="#three">Experience</a>
    <a href="#four">Expe</a>
    <span></span>
  </nav>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
export default {
  mounted() {

	},
};
</script>

<style>
.link_nav {
  position: fixed;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  padding: 0px 10px;
  z-index: 2;
}
.link_nav::before {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 3px;
  height: 100%;
  background-color: #c2c2c2;
}

.link_nav a {
  color: #c2c2c2;
  font-size: 1.3em;
  line-height: 1.7;
  text-decoration: none;
  writing-mode: vertical-rl;
  padding: 4px 0;
  text-align: center;
  display: block;
}
.link_nav a:last-child {
  margin-bottom: 0;
}
.link_nav a:hover {
  text-decoration: underline;
}

.link_nav a.active {
  position: relative;
  color: #000;
}
/* .link_nav a.active::after{
	content: "";
	position: absolute;
	left: -10px;
	top: 0;
	width: 3px;
	height: 100%;
	background-color: #000;	
} */
.link_nav span {
  position: absolute;
  left: 0px;
  top: 0;
  width: 3px;
  height: 30px;
  background-color: #000;
  transition: all 1s;
}
</style>
