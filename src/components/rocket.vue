<template>


    <div style="display:none" id="rocket-to-top" >
    <div style="opacity:0;display: block;" class="level-2"></div>
    <div class="level-3"></div>
</div>

</template>
<script>
export default {
  name: "Rocket",
  data() {return{}},
  methods: {},
  mounted() {
    var that = this;
    this.$(function() {
      var e = that.$("#rocket-to-top"),
        t = that.$(document).scrollTop(),
        n,
        r,
        i = !0;
      that.$(window).scroll(function() {
        var t = that.$(document).scrollTop();
        t == 0
          ? e.css("background-position") == "0px 0px"
            ? e.fadeOut("slow")
            : i &&
              ((i = !1),
              that.$(".level-2").css("opacity", 1),
              e.delay(100).animate(
                {
                  marginTop: "-1000px"
                },
                "normal",
                function() {
                  console.log("test");
                  e.css({
                    "margin-top": "-125px",
                    display: "none"
                  }),
                    (i = !0);
                }
              ))
          : e.fadeIn("slow");
      }),
        e.hover(
          function() {
            that.$(".level-2")
              .stop(!0)
              .animate({
                opacity: 1
              });
          },
          function() {
            that.$(".level-2")
              .stop(!0)
              .animate({
                opacity: 0
              });
          }
        ),
        that.$(".level-3").click(function() {
          function t() {
            var t = e.css("background-position");
            if (e.css("display") == "none" || i == 0) {
              clearInterval(n), e.css("background-position", "0px 0px");
              return;
            }
            switch (t) {
              case "0px 0px":
                e.css("background-position", "-298px 0px");
                break;
              case "-298px 0px":
                e.css("background-position", "-447px 0px");
                break;
              case "-447px 0px":
                e.css("background-position", "-596px 0px");
                break;
              case "-596px 0px":
                e.css("background-position", "-745px 0px");
                break;
              case "-745px 0px":
                e.css("background-position", "-298px 0px");
            }
          }
          if (!i) return;
          (n = setInterval(t, 50)),
            that.$("html,body").animate({ scrollTop: 0 }, "slow");
        });
    });
  }
};
</script>
<style>
#big-div{
    background-color: antiquewhite;
    width:100%;
    height: 2500px;
}
#rocket-to-top div {
  left: 0;
  margin: 0;
  overflow: hidden;
  padding: 0;
  position: absolute;
  top: 0;
  width: 149px;
}
#rocket-to-top .level-2 {
  background: url("../assets/o_rocket_button_up.png")
    no-repeat scroll -149px 0 transparent;
  display: none;
  height: 250px;
  opacity: 0;
  z-index: 1;
}
#rocket-to-top .level-3 {
  background: none repeat scroll 0 0 transparent;
  cursor: pointer;
  display: block;
  height: 150px;
  z-index: 2;
}
#rocket-to-top {
  background: url("../assets/o_rocket_button_up.png")
    no-repeat scroll 0 0 transparent;
  cursor: default;
  display: block;
  height: 250px;
  margin: -125px 0 0;
  overflow: hidden;
  padding: 0;
  position: fixed;
  right: 0;
  top: 80%;
  width: 149px;
  z-index: 11;
}
</style>
