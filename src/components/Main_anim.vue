<template>
  <div class="section_container">
    <section id="one" class="one container" data-target="one">
      <div class="description panel blue">
        <div>
          SCROLL DOWN
          <div class="scroll-down"><div class="arrow"></div></div>
        </div>
      </div>
      <div class="panel red">ONE</div>
    </section>
    <section id="two" class="two container" data-target="two">
      <div class="description panel blue">
        <div>
          SCROLL DOWN
          <div class="scroll-down"><div class="arrow"></div></div>
        </div>
      </div>
      <div class="panel red">ONE</div>
      <div class="panel orange">TWO</div>
      <div class="panel blue">THREE</div>
    </section>
    <section id="three" class="three container" data-target="three">
      <div class="description panel blue">
        <div>
          SCROLL DOWN
          <div class="scroll-down"><div class="arrow"></div></div>
        </div>
      </div>
      <div class="panel red">ONE</div>
      <div class="panel orange">TWO</div>
    </section>

    <section id="four" class="four container" data-target="four">
      <div class="description panel blue">
        <div>
          SCROLL DOWN
          <div class="scroll-down"><div class="arrow"></div></div>
        </div>
      </div>
      <div class="panel red">ONE</div>
      <div class="panel orange">TWO</div>
      <div class="panel blue">THREE</div>
    </section>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default {
  mounted() {
    /* nav links */
    let links = gsap.utils.toArray(".link_nav a");
		// const linksT = [];
    links.forEach((a) => {
      let element = document.querySelector(a.getAttribute("href"));
      let linkST = ScrollTrigger.create({
        trigger: element,
        start: "top top",
      });
						console.log(linkST)
      ScrollTrigger.create({
        trigger: element,
        start: "top center",
        end: "bottom center",
      });
      a.addEventListener("click", (e) => {
        e.preventDefault();
        gsap.to(window, {
          duration: 1,
          scrollTo: linkST.start,
          overwrite: "auto",
        });
      });
    });
    function setActive(sectionId) {
      links.forEach((el) => el.classList.remove("active"));
      const activeLink = document.querySelector(
        `.link_nav a[href="#${sectionId}"]`
      );
      if (activeLink) {
        activeLink.classList.add("active");
      }
    }

    function getOffset(el) {
      var _x = 0;
      var _y = 0;
      while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
        _x += el.offsetLeft - el.scrollLeft;
        _y += el.offsetTop - el.scrollTop;
        el = el.offsetParent;
      }
      return { top: _y, left: _x };
    }

    /* nav links bars anim */
    const observer = new MutationObserver(function (mutationsList) {
      for (let mutation of mutationsList) {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "class"
        ) {
          const linkElements = document.querySelectorAll(".link_nav a");
          const navSpan = document.querySelector(".link_nav span");

          Array.from(linkElements).forEach(function (element) {
            if (element.classList.contains("active")) {
              let height = element.clientHeight;
              let top = getOffset(element).top - 469;
              navSpan.style.height = height + "px";
              navSpan.style.top = top + "px";
            }
          });

          break;
        }
      }
    });

    observer.observe(document.querySelector(".link_nav"), {
      attributes: true,
      subtree: true,
    });

    let oneContainer = document.querySelector(".one.container");
    gsap.to("#one .panel", {
      xPercent: -100 * (gsap.utils.toArray("#one .panel").length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: oneContainer,
        pin: true,
        scrub: 1,
        snap: {
          snapTo: 1 / (gsap.utils.toArray("#one .panel").length - 1),
          duration: { min: 0.1, max: 0.1 },
        },
        end: () => "+=" + (oneContainer.offsetWidth - innerWidth),
      },
    });
    let twoContainer = document.querySelector(".two.container");
    gsap.to("#two .panel", {
      xPercent: -100 * (gsap.utils.toArray("#two .panel").length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: twoContainer,
        pin: true,
        scrub: 1,
        snap: {
          snapTo: 1 / (gsap.utils.toArray("#two .panel").length - 1),
          duration: { min: 0.1, max: 0.1 },
        },
        end: () => "+=" + (twoContainer.offsetWidth - innerWidth),
      },
    });

    let threeContainer = document.querySelector(".three.container");
    gsap.to("#three .panel", {
      xPercent: -100 * (gsap.utils.toArray("#three .panel").length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: threeContainer,
        pin: true,
        scrub: 1,
        markers: true,
        snap: {
          snapTo: 1 / (gsap.utils.toArray("#three .panel").length - 1),
          duration: { min: 0.1, max: 0.1 },
        },
        end: () => "+=" + (threeContainer.offsetWidth - innerWidth),
      },
    });
    let fourContainer = document.querySelector(".four.container");
    gsap.to("#four .panel", {
      xPercent: -100 * (gsap.utils.toArray("#four .panel").length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: fourContainer,
        pin: true,
        scrub: 1,
        snap: {
          snapTo: 1 / (gsap.utils.toArray("#four .panel").length - 1),
          duration: { min: 0.1, max: 0.1 },
        },
        end: () => "+=" + (fourContainer.offsetWidth - innerWidth),
      },
    });

    let sections = gsap.utils.toArray("section[data-target]");

    sections.forEach((section) => {
      let target = section.getAttribute("data-target");
      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom center",
        onToggle: (self) => {
          if (self.isActive) {
            setActive(target);
          }
        },
      });
    });
  },
};
</script>

<style>
@import "../assets/css/sample.css";
#one .panel:nth-child(1) {
  background: url(../assets/images/bg/system1/02-2.png) no-repeat;
  background-size: cover;
}
#two .panel:nth-child(1) {
  background: url(../assets/images/bg/system1/04.png) no-repeat;
  background-size: cover;
}
#three .panel:nth-child(1) {
  background: url(../assets/images/bg/system1/06.png) no-repeat;
  background-size: cover;
}
#four .panel:nth-child(1) {
  background: url(../assets/images/bg/system1/07.png) no-repeat;
  background-size: cover;
}
</style>
