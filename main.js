window.onload = function()
{
  var audio = new Audio();
  audio.src = 'audio/pre-2.mp3';
  audio.autoplay = true;

  var audio2 = new Audio();
  audio2.src = 'audio/pre-1.mp3';
  audio2.autoplay = true;

  var audio3 = new Audio();
  audio3.src = 'audio/pre-3.mp3';
  audio3.autoplay = true;

  var audio4 = new Audio();
  audio4.src = 'audio/pre-4.mp3';
  audio4.autoplay = true;

  var audio5 = new Audio();
  audio5.src = 'audio/pre-5.mp3';
  audio5.autoplay = true;

  var audio6 = new Audio();
  audio6.src = 'audio/pre-7.mp3';
  audio6.autoplay = true;
  ass = escape('.hesperiden.tparrows{cursor:pointer;background:#000;background:rgba(0,0,0,.5);width:40px;height:40px;border-style:solid;border-width:1px;border-color:#fff;position:absolute;display:block;z-index:100;border-radius:50%}.hesperiden.tparrows:hover{background:#000}.hesperiden.tparrows:before{font-family:revicons;font-size:20px;color:#fff;display:block;line-height:40px;text-align:center}.hesperiden.tparrows.tp-leftarrow:before{content:"↩";font-size:1.5em;margin-left:-3px}.hesperiden.tparrows.tp-rightarrow:before{content:"↪";font-size:1.5em;margin-right:-3px}.hesperiden.tp-bullets:before{content:" ";position:absolute;width:100%;height:100%;background:0 0;padding:10px;margin-left:-10px;margin-top:-10px;box-sizing:content-box;border-radius:8px}.hesperiden .tp-bullet{width:12px;height:12px;position:absolute;background:#999;background:-moz-linear-gradient(top,#999 0,#e1e1e1 100%);background:-webkit-gradient(linear,left top,left bottom,color-stop(0,#999),color-stop(100%,#e1e1e1));background:-webkit-linear-gradient(top,#999 0,#e1e1e1 100%);background:-o-linear-gradient(top,#999 0,#e1e1e1 100%);background:-ms-linear-gradient(top,#999 0,#e1e1e1 100%);background:linear-gradient(to bottom,#999 0,#e1e1e1 100%);border:3px solid #e5e5e5;border-radius:50%;cursor:pointer;box-sizing:content-box}.hesperiden .tp-bullet.selected,.hesperiden .tp-bullet:hover{background:#666}')
  console.log(ass);

  window.setTimeout(function()
  {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
      var displayNone = "display: none";
      document.getElementById('preloader').style = displayNone;
    }, 500);
  }, 4000 );
}

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    var originalAddEventListener = EventTarget.prototype.addEventListener,
        oldWidth = window.innerWidth;

    EventTarget.prototype.addEventListener = function (eventName, eventHandler, useCapture) {
        if (eventName === "resize") {
            originalAddEventListener.call(this, eventName, function (event) {
                if (oldWidth === window.innerWidth) {
                    return;
                }
                else if (oldWidth !== window.innerWidth) {
                    oldWidth = window.innerWidth;
                }
                if (eventHandler.handleEvent) {
                    eventHandler.handleEvent.call(this, event);
                }
                else {
                    eventHandler.call(this, event);
                };
            }, useCapture);
        }
        else {
            originalAddEventListener.call(this, eventName, eventHandler, useCapture);
        };
    };
};

/* <![CDATA[ */
var dtLocal = {
    themeUrl: "https://eldeetepra.ru/wp-content/themes/dt-the7",
    passText: "To view this protected post, enter the password below:",
    moreButtonText: { loading: "Loading...", loadMore: "Load more" },
    postID: "5",
    ajaxurl: "https://eldeetepra.ru/wp-admin/admin-ajax.php",
    contactMessages: { required: "One or more fields have an error. Please check and try again.", terms: "Please accept the privacy policy." },
    ajaxNonce: "1174be75fa",
    pageData: { type: "page", template: "microsite", layout: null },
    themeSettings: {
        smoothScroll: "off",
        lazyLoading: false,
        accentColor: { mode: "solid", color: "#47bbe5" },
        desktopHeader: { height: "" },
        floatingHeader: {
            showAfter: 120,
            showMenu: true,
            height: 70,
            logo: {
                showLogo: true,
                html:
                    '<img class=" preload-me" width="42" height="42"   sizes="42px" alt="" />',
                url: "https://eldeetepra.com/",
            },
        },
        topLine: {
            floatingTopLine: {
                logo: {
                    showLogo: true,
                    html:
                        '<img class=" preload-me" width="229" height="24"   sizes="229px" alt="" />',
                },
            },
        },
        mobileHeader: { firstSwitchPoint: 778, secondSwitchPoint: 600, firstSwitchPointHeight: 60, secondSwitchPointHeight: 60 },
        stickyMobileHeaderFirstSwitch: { logo: { html: "" } },
        stickyMobileHeaderSecondSwitch: { logo: { html: "" } },
        content: { textColor: "#777777", headerColor: "#222222" },
        sidebar: { switchPoint: 990 },
        boxedWidth: "1340px",
        stripes: { stripe1: { textColor: "#888888", headerColor: "#3a3a3a" }, stripe2: { textColor: "#a5a5a5", headerColor: "#eeeeee" }, stripe3: { textColor: "#3a3a3a", headerColor: "#3a3a3a" } },
    },
    VCMobileScreenWidth: "778",
};
var dtShare = { shareButtonText: { facebook: "Share on Facebook", twitter: "Tweet", pinterest: "Pin it", linkedin: "Share on Linkedin", whatsapp: "Share on Whatsapp", google: "Share on Google Plus" }, overlayOpacity: "85" };

/* ]]> */

function setREVStartSize(e){
						try{ e.c=jQuery(e.c);var i=jQuery(window).width(),t=9999,r=0,n=0,l=0,f=0,s=0,h=0;
							if(e.responsiveLevels&&(jQuery.each(e.responsiveLevels,function(e,f){f>i&&(t=r=f,l=e),i>f&&f>r&&(r=f,n=e)}),t>r&&(l=n)),f=e.gridheight[l]||e.gridheight[0]||e.gridheight,s=e.gridwidth[l]||e.gridwidth[0]||e.gridwidth,h=i/s,h=h>1?1:h,f=Math.round(h*f),"fullscreen"==e.sliderLayout){var u=(e.c.width(),jQuery(window).height());if(void 0!=e.fullScreenOffsetContainer){var c=e.fullScreenOffsetContainer.split(",");if (c) jQuery.each(c,function(e,i){u=jQuery(i).length>0?u-jQuery(i).outerHeight(!0):u}),e.fullScreenOffset.split("%").length>1&&void 0!=e.fullScreenOffset&&e.fullScreenOffset.length>0?u-=jQuery(window).height()*parseInt(e.fullScreenOffset,0)/100:void 0!=e.fullScreenOffset&&e.fullScreenOffset.length>0&&(u-=parseInt(e.fullScreenOffset,0))}f=u}else void 0!=e.minHeight&&f<e.minHeight&&(f=e.minHeight);e.c.closest(".rev_slider_wrapper").css({height:f})
						}catch(d){console.log("Failure at Presize of Slider:"+d)}
					};

var htmlDiv = document.getElementById("rs-plugin-settings-inline-css"); var htmlDivCss="";
						if(htmlDiv) {
							htmlDiv.innerHTML = htmlDiv.innerHTML + htmlDivCss;
						}else{
							var htmlDiv = document.createElement("div");
							htmlDiv.innerHTML = "<style>" + htmlDivCss + "</style>";
							document.getElementsByTagName("head")[0].appendChild(htmlDiv.childNodes[0]);
						}
            var htmlDiv = document.getElementById("rs-plugin-settings-inline-css"); var htmlDivCss="";
            				if(htmlDiv) {
            					htmlDiv.innerHTML = htmlDiv.innerHTML + htmlDivCss;
            				}else{
            					var htmlDiv = document.createElement("div");
            					htmlDiv.innerHTML = "<style>" + htmlDivCss + "</style>";
            					document.getElementsByTagName("head")[0].appendChild(htmlDiv.childNodes[0]);
            				}

                    var htmlDivCss = unescape(".hesperiden.tparrows%20%7B%0A%09cursor%3Apointer%3B%0A%09background%3Argba%280%2C0%2C0%2C0.5%29%3B%0A%09width%3A40px%3B%0A%09height%3A40px%3B%0A%09position%3Aabsolute%3B%0A%09display%3Ablock%3B%0A%09z-index%3A100%3B%0A%20%20%20%20border-radius%3A%2050%25%3B%0A%7D%0A.hesperiden.tparrows%3Ahover%20%7B%0A%09background%3Argba%28103%2C%20185%2C%20225%2C%201%29%3B%0A%7D%0A.hesperiden.tparrows%3Abefore%20%7B%0A%09font-family%3A%20%22revicons%22%3B%0A%09font-size%3A20px%3B%0A%09color%3Argb%28255%2C%20255%2C%20255%29%3B%0A%09display%3Ablock%3B%0A%09line-height%3A%2040px%3B%0A%09text-align%3A%20center%3B%0A%7D%0A.hesperiden.tparrows.tp-leftarrow%3Abefore%20%7B%0A%20%20%20%20%20%20%20font-family%3A%20FontAwesome%3B%0A%09content%3A%20%22%5Cf060%22%3B%0A%20%20%20%20margin-left%3A-3px%3B%0A%7D%0A.hesperiden.tparrows.tp-rightarrow%3Abefore%20%7B%0A%20%20%20%20%20%20%20font-family%3A%20FontAwesome%3B%0A%09content%3A%20%22%5Cf061%22%3B%0A%20%20%20%20margin-right%3A-3px%3B%0A%7D%0A.hesperiden%20.tp-tab%20%7B%20%0A%20%20opacity%3A1%3B%20%20%20%20%20%20%0A%20%20padding%3A10px%3B%0A%20%20box-sizing%3Aborder-box%3B%0A%20%20font-family%3A%20%22Roboto%22%2C%20sans-serif%3B%0A%20%20border-bottom%3A%201px%20solid%20rgba%28255%2C%20255%2C%20255%2C%200%29%3B%0A%20%7D%0A.hesperiden%20.tp-tab-image%20%0A%7B%20%0A%20%20width%3A60px%3B%0A%20%20height%3A60px%3B%20max-height%3A100%25%3B%20max-width%3A100%25%3B%0A%20%20position%3Arelative%3B%0A%20%20display%3Ainline-block%3B%0A%20%20float%3Aleft%3B%0A%0A%7D%0A.hesperiden%20.tp-tab-content%20%0A%7B%0A%20%20%20%20background%3Argba%28255%2C%20255%2C%20255%2C%200%29%3B%20%0A%20%20%20%20position%3Arelative%3B%0A%20%20%20%20padding%3A15px%2015px%2015px%2085px%3B%0A%20left%3A0px%3B%0A%20overflow%3Ahidden%3B%0A%20margin-top%3A-15px%3B%0A%20%20%20%20box-sizing%3Aborder-box%3B%0A%20%20%20%20color%3Argba%2851%2C%2051%2C%2051%2C%201%29%3B%0A%20%20%20%20display%3A%20inline-block%3B%0A%20%20%20%20width%3A100%25%3B%0A%20%20%20%20height%3A100%25%3B%0A%20position%3Aabsolute%3B%20%7D%0A.hesperiden%20.tp-tab-date%0A%20%20%7B%0A%20%20display%3Ablock%3B%0A%20%20color%3A%20rgba%2851%2C51%2C51%2C0.5%29%3B%0A%20%20font-weight%3A500%3B%0A%20%20font-size%3A12px%3B%0A%20%20margin-bottom%3A0px%3B%0A%20%20%7D%0A.hesperiden%20.tp-tab-title%20%0A%7B%0A%20%20%20%20display%3Ablock%3B%09%0A%20%20%20%20text-align%3Aleft%09%3B%0A%20%20%20%20color%3Argba%2834%2C%2034%2C%2034%2C%201%29%3B%0A%20%20%20%20font-size%3A14px%3B%0A%20%20%20%20font-weight%3A500%3B%0A%20%20%20%20text-transform%3Anone%3B%0A%20%20%20%20line-height%3A17px%3B%0A%7D%0A.hesperiden%20.tp-tab%3Ahover%2C%0A.hesperiden%20.tp-tab.selected%20%7B%0A%09background%3Argba%28103%2C%20185%2C%20225%2C%201%29%3B%20%0A%7D%0A%0A.hesperiden%20.tp-tab-mask%20%7B%0A%7D%0A%0A/*%20media%20queries%20*/%0A@media%20only%20screen%20and%20%28max-width%3A%20960px%29%20%7B%0A%0A%7D%0A@media%20only%20screen%20and%20%28max-width%3A%20768px%29%20%7B%0A%0A%7D%0A");


                    var htmlDiv = document.getElementById('rs-plugin-settings-inline-css');
                    if(htmlDiv) {
                      htmlDiv.innerHTML = htmlDiv.innerHTML + htmlDivCss;
                    }
                    else{
                      var htmlDiv = document.createElement('div');
                      htmlDiv.innerHTML = '<style>' + htmlDivCss + '</style>';
                      document.getElementsByTagName('head')[0].appendChild(htmlDiv.childNodes[0]);
                    }

                    function revslider_showDoubleJqueryError(sliderID) {
            					var errorMessage = "Revolution Slider Error: You have some jquery.js library include that comes after the revolution files js include.";
            					errorMessage += "<br> This includes make eliminates the revolution slider libraries, and make it not work.";
            					errorMessage += "<br><br> To fix it you can:<br>&nbsp;&nbsp;&nbsp; 1. In the Slider Settings -> Troubleshooting set option:  <strong><b>Put JS Includes To Body</b></strong> option to true.";
            					errorMessage += "<br>&nbsp;&nbsp;&nbsp; 2. Find the double jquery.js include and remove it.";
            					errorMessage = "<span style='font-size:16px;color:#BC0C06;'>" + errorMessage + "</span>";
            						jQuery(sliderID).show().html(errorMessage);
            				}
