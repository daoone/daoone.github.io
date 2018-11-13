jQuery(document).ready(function() {

  jQuery('.close-mobile-menu-btn').click(function(){
    jQuery('#page-close-mobile-menu').trigger('click');
  });

  jQuery('#moreCommunity').click(function(){

    jQuery.get('project.json',function(data){

      var html = "",
          partial = "";

      var height = jQuery('#community .grid-item').height();
      var mb = parseInt(jQuery('#community .grid-item').css('marginBottom'));
      var width = jQuery('#community .grid-item').width();
      var mediaWidth = document.documentElement.clientWidth;
      var left = 0, top = 0,tmGridHeight = 0;

      for (var i = 0; i < data.community.length; i++){

        if (mediaWidth > 960) {
          left = 0.343*((i+6)%3);
          left = left*100 + '%';
          top = (height + mb) * Math.floor((i+6)/3) +"px";
          tmGridHeight = (height + mb) * Math.ceil((data.community.length+6)/3) +"px";
        }

        if (mediaWidth > 640 && mediaWidth <961){
          left = 0.523*((i+6)%2);
          left = left*100 + '%';
          top = (height + mb) * Math.floor((i+6)/2) +"px";
          tmGridHeight = (height + mb) * Math.ceil((data.community.length+6)/2) +"px";
        }

        if (mediaWidth < 641 ){
          left = 0;
          top = (height + mb) * Math.floor((i+6)/1) +"px";
          tmGridHeight = (height + mb) * Math.ceil((data.community.length+6)/1) +"px";
        }


        console.log(top,left);

      partial += "<div class=\"grid-item\" style=\"position: absolute; left: "+ left +"; top: "+ top +"; width: " + width + "px; height: "+ height +"px;\">" +
        "<div class=\"tm-box-icon  style-11\" >" +
              "<a href=\"#\">" +
              "<div class=\"content-wrap\">" +
              "<div class=\"image\">" +
                  "<img src=\"" + data.community[i].img + "\" alt=\"project\"/>" +
              "</div>" +
              "<div class=\"content\">" +
                  "<div class=\"box-header\">" +
                      "<h4 class=\"heading\">" +
                        data.community[i].name   +
                      "</h4>" +
                  "</div>" +
                  "<div class=\"text\"> " + data.community[i].descr + "</div>" +
              "</div>" +
          "</div>" +
        "</a>" +
      "</div></div>";

      }


      console.log(tmGridHeight);

      jQuery('#community .tm-grid').css('height',tmGridHeight);

      html += partial;

      jQuery('#community .tm-grid').append(html);

    })
  });
});
