<template>
  <div class="section_container">
    <!-- <div class="loading"></div> -->
    <section id="one" class="one container" data-target="one">
      <div class="description panel blue">
        <div class="line line2"></div>
        <div class="hand"></div>
        <div>
          <div class="scroll-down"><div class="arrow"></div></div>
        </div>
      </div>
      <div class="panel red">ONE</div>
    </section>
    <section id="two" class="two container" data-target="two">
      <div class="description panel blue">
        <div>
          
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
          <div class="scroll-down"><div class="arrow"></div></div>
        </div>
      </div>
      <div class="panel red">ONE</div>
      <div class="panel orange">TWO</div>
      <div class="panel blue">THREE</div>
    </section>
    <section id="five" class="five container" data-target="five">
      <div class="description panel blue">
        <div>
          <div class="scroll-down"><div class="arrow"></div></div>
        </div>
      </div>
      <div class="panel red">ONE</div>
      <div class="panel orange">TWO</div>
      <div class="panel blue">THREE</div>
    </section>
    <section id="six" class="six container" data-target="six">
      <div class="description panel blue">
        <div>
          <div class="scroll-down"><div class="arrow"></div></div>
        </div>
      </div>
      <div class="panel red">ONE</div>
      <div class="panel orange">TWO</div>
      <div class="panel blue">THREE</div>
    </section>
    <section id="seven" class="seven container" data-target="seven">
      <div class="description panel blue">
        <div>
          <div class="scroll-down"><div class="arrow"></div></div>
        </div>
      </div>
      <div class="panel red">ONE</div>
      <div class="panel orange">TWO</div>
      <div class="panel blue">THREE</div>
    </section>
    <section id="eight" class="eight container" data-target="eight">
      <div class="description panel blue">
        <div>
          <div class="scroll-down"><div class="arrow"></div></div>
        </div>
      </div>
      <div class="panel red">ONE</div>
      <div class="panel orange">TWO</div>
      <div class="panel blue">THREE</div>
    </section>
    <section id="sect09" class="sect09 container" data-target="sect09">
      <div class="description panel blue">
        <div>
          <div class="scroll-down"><div class="arrow"></div></div>
        </div>
      </div>
      <div class="panel red">ONE</div>
      <div class="panel orange">TWO</div>
      <div class="panel blue">THREE</div>
    </section>
    <section id="sect10" class="sect10 container" data-target="sect10">
      <div class="description panel blue">
        <div>
          <div class="scroll-down"><div class="arrow"></div></div>
        </div>
      </div>
      <div class="panel red">ONE</div>
      <div class="panel orange">TWO</div>
      <div class="panel blue">THREE</div>
    </section>
    <a class="top_btn" id="top">
      TOP
    </a>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default {
  mounted() {
    // Loading
    // document.querySelector('.loading',function(){
    //   '.loading'.fadeIn
    // })

  function generateElements(html) {
    const template = document.createElement('template');
    template.innerHTML = html.trim();
    return template.content.children;
  }

  generateElements('<div>Hello World!</div>');


    // Top button
    let Top = document.querySelector('.top_btn');
    window.addEventListener('scroll', function (){
      if (this.scrollY > 200) {
        Top.classList.add('on');
      } else {
        Top.classList.remove('on');
      }
    })
    Top.addEventListener('click', function (e) {
      e.preventDefault();
      window.scrollTo({ top:0, behavior: 'smooth' });
    })

    


    // var tl = gsap.timeline();
    // tl.to(".box1", { duration: 3, x: 200, ease: 'steps(10)' });
    // tl.to(".box1", {duration: 3, y: 200, opacity: 1, });
    // tl.to(".box1", { duration: 3, x: 0, width: 200, backgroundColor: 'red', });
    // tl.to(".box1", { duration: 3, y: 0, height: 200, });

// gsap.fromTo(".line", { duration: 3, x: 300, });

// var tween = gsap.to(".line2", { duration: 8, x: 400, width: 400, paused: true, });
gsap.to(".line2", { duration: 3, width: 700, delay: 0.2,});
gsap.to(".hand", { duration: 3, x:740, y:110, delay: 0,});
gsap.to(".hand", { duration: 3, y:-100, delay: 0,});
gsap.to(".hand", { duration: 3, y:30, delay: 0});
gsap.to(".hand", { duration: 3, y:15, delay: 0.9,});

// gsap.to(".box1", { duration: 8, x: 200, opacity: 0.2, ease: 'steps(10)', delay: 1,});


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
    function test() {
        var height_value = document.getElementById('section').value;
        document.getElementById('section').style.height = height_value;
    }

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

    let fiveContainer = document.querySelector(".five.container");
    gsap.to("#five .panel", {
      xPercent: -100 * (gsap.utils.toArray("#five .panel").length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: fiveContainer,
        pin: true,
        scrub: 1,
        snap: {
          snapTo: 1 / (gsap.utils.toArray("#five .panel").length - 1),
          duration: { min: 0.1, max: 0.1 },
        },
        end: () => "+=" + (fiveContainer.offsetWidth - innerWidth),
      },
    });

    let sixContainer = document.querySelector(".six.container");
    gsap.to("#six .panel", {
      xPercent: -100 * (gsap.utils.toArray("#six .panel").length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: sixContainer,
        pin: true,
        scrub: 1,
        snap: {
          snapTo: 1 / (gsap.utils.toArray("#six .panel").length - 1),
          duration: { min: 0.1, max: 0.1 },
        },
        end: () => "+=" + (sixContainer.offsetWidth - innerWidth),
      },
    });

    let sevenContainer = document.querySelector(".seven.container");
    gsap.to("#seven .panel", {
      xPercent: -100 * (gsap.utils.toArray("#seven .panel").length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: sevenContainer,
        pin: true,
        scrub: 1,
        snap: {
          snapTo: 1 / (gsap.utils.toArray("#seven .panel").length - 1),
          duration: { min: 0.1, max: 0.1 },
        },
        end: () => "+=" + (sevenContainer.offsetWidth - innerWidth),
      },
    });

    let eightContainer = document.querySelector(".eight.container");
    gsap.to("#eight .panel", {
      xPercent: -100 * (gsap.utils.toArray("#eight .panel").length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: eightContainer,
        pin: true,
        scrub: 1,
        snap: {
          snapTo: 1 / (gsap.utils.toArray("#eight .panel").length - 1),
          duration: { min: 0.1, max: 0.1 },
        },
        end: () => "+=" + (eightContainer.offsetWidth - innerWidth),
      },
    });

    let sect09Container = document.querySelector(".sect09.container");
    gsap.to("#sect09 .panel", {
      xPercent: -100 * (gsap.utils.toArray("#sect09 .panel").length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: sect09Container,
        pin: true,
        scrub: 1,
        snap: {
          snapTo: 1 / (gsap.utils.toArray("#sect09 .panel").length - 1),
          duration: { min: 0.1, max: 0.1 },
        },
        end: () => "+=" + (sect09Container.offsetWidth - innerWidth),
      },
    });

    let sect10Container = document.querySelector(".sect10.container");
    gsap.to("#sect10 .panel", {
      xPercent: -100 * (gsap.utils.toArray("#sect10 .panel").length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: sect10Container,
        pin: true,
        scrub: 1,
        snap: {
          snapTo: 1 / (gsap.utils.toArray("#sect10 .panel").length - 1),
          duration: { min: 0.1, max: 0.1 },
        },
        end: () => "+=" + (sect09Container.offsetWidth - innerWidth),
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
        height: auto,
      });
      
    });
    
    
  },
};
</script>


<style>
@import "../assets/css/sample.css";
#one .panel:nth-child(1) {
  background: url(../assets/images/bg/system1/16.jpg) no-repeat;
  background-size: cover;
  position: relative;
}
#two .panel:nth-child(1) {
  background: url(../assets/images/bg/system1/05.jpg) no-repeat;
  background-size: cover;
}
#three .panel:nth-child(1) {
  background: url(../assets/images/bg/system1/07.jpg) no-repeat;
  background-size: cover;
}
#four .panel:nth-child(1) {
  background: url(../assets/images/bg/system1/08.jpg) no-repeat;
  background-size: cover;
}
#five .panel:nth-child(1) {
  background: url(../assets/images/bg/system1/09.jpg) no-repeat;
  background-size: cover;
}
#six .panel:nth-child(1) {
  background: url(../assets/images/bg/system1/14.jpg) no-repeat;
  background-size: cover;
}
#seven .panel:nth-child(1) {
  background: url(../assets/images/bg/system1/10.jpg) no-repeat;
  background-size: cover;
}
#eight .panel:nth-child(1) {
  background: url(../assets/images/bg/system1/11.jpg) no-repeat;
  background-size: cover;
}
#sect09 .panel:nth-child(1) {
  background: url(../assets/images/bg/system1/12.jpg) no-repeat;
  background-size: cover;
}
#sect10 .panel:nth-child(1) {
  background: url(../assets/images/bg/system1/13.jpg) no-repeat;
  background-size: cover;
}
/* Top Button */
.top_btn {
  position:fixed;
  right:0;
  bottom:10px;
  width:50px;
  height:50px;
  line-height:50px;
  background:#000;
  opacity:50;
  font-size:12px;
  color:#fff;
  cursor:pointer;
  z-index: 10;
  display: none;
}
/* Loading */
.loading {
  position: fixed;
  z-index: 999;
  height: 2em;
  width: 2em;
  overflow: visible;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.loading:before {
  content: '';
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.3);
}
.loading:not(:required) {
  font: 0/0 a;
  color: transparent;
  text-shadow: none;
  background-color: transparent;
  border: 0;
}
.loading:not(:required):after {
  content: '';
  display: block;
  font-size: 10px;
  width: 1em;
  height: 1em;
  margin-top: -0.5em;
  -webkit-animation: spinner 1500ms infinite linear;
  -moz-animation: spinner 1500ms infinite linear;
  -ms-animation: spinner 1500ms infinite linear;
  -o-animation: spinner 1500ms infinite linear;
  animation: spinner 1500ms infinite linear;
  border-radius: 0.5em;
  -webkit-box-shadow: rgba(0, 0, 0, 0.75) 1.5em 0 0 0, rgba(0, 0, 0, 0.75) 1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) 0 1.5em 0 0, rgba(0, 0, 0, 0.75) -1.1em 1.1em 0 0, rgba(0, 0, 0, 0.5) -1.5em 0 0 0, rgba(0, 0, 0, 0.5) -1.1em -1.1em 0 0, rgba(0, 0, 0, 0.75) 0 -1.5em 0 0, rgba(0, 0, 0, 0.75) 1.1em -1.1em 0 0;
  box-shadow: rgba(0, 0, 0, 0.75) 1.5em 0 0 0, rgba(0, 0, 0, 0.75) 1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) 0 1.5em 0 0, rgba(0, 0, 0, 0.75) -1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) -1.5em 0 0 0, rgba(0, 0, 0, 0.75) -1.1em -1.1em 0 0, rgba(0, 0, 0, 0.75) 0 -1.5em 0 0, rgba(0, 0, 0, 0.75) 1.1em -1.1em 0 0;
}
@-webkit-keyframes spinner {
  0% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@-moz-keyframes spinner {
  0% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@-o-keyframes spinner {
  0% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes spinner {
  0% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
.box{
  position: absolute;
  left: 0;
  z-index: 10; 
  margin: 20px; width: 100px; height: 100px;
}
.box1{ 
  background: orange;
}
.line {
  position: absolute;
  left: 20px;
  top: 563px;
  width: 0px;
  height: 40px;
  background: url(../assets/images/bg/system1/15.jpg) no-repeat;
  z-index: 30;
}
.hand {
  position: absolute;
  left: -40px;
  top: 523px;
  width: 423px;
  height: 396px;
  z-index: 50;
  background: url(../assets/images/bg/system1/hand.png) no-repeat;
}

</style>
