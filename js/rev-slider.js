if (setREVStartSize!==undefined) setREVStartSize(
{c: '#rev_slider_23_1', responsiveLevels: [1240,1024,778,480], gridwidth: [1400,1024,778,480], gridheight: [880,768,960,720], sliderLayout: 'fullwidth'});

var revapi23,
tpj;
(function() {
if (!/loaded|interactive|complete/.test(document.readyState)) document.addEventListener("DOMContentLoaded",onLoad); else onLoad();
function onLoad() {
if (tpj===undefined) { tpj = jQuery; if("off" == "on") tpj.noConflict();}
if(tpj("#rev_slider_23_1").revolution == undefined){
revslider_showDoubleJqueryError("#rev_slider_23_1");
}else{
revapi23 = tpj("#rev_slider_23_1").show().revolution({
sliderType:"standard",
jsFileLocation:"./js/",
sliderLayout:"fullwidth",
dottedOverlay:"none",
delay:9000,
navigation: {
onHoverStop:"off",
},
responsiveLevels:[1240,1024,778,480],
visibilityLevels:[1240,1024,778,480],
gridwidth:[1400,1024,778,480],
gridheight:[880,768,960,720],
lazyType:"none",
shadow:0,
spinner:"spinner3",
stopLoop:"off",
stopAfterLoops:-1,
stopAtSlide:-1,
shuffle:"off",
autoHeight:"off",
disableProgressBar:"on",
hideThumbsOnMobile:"off",
hideSliderAtLimit:0,
hideCaptionAtLimit:0,
hideAllCaptionAtLilmit:0,
debugMode:false,
fallbacks: {
simplifyAll:"off",
nextSlideOnWindowFocus:"off",
disableFocusListener:false,
}
});
}; /* END OF revapi call */

}; /* END OF ON LOAD FUNCTION */
}()); /* END OF WRAPPING FUNCTION */
