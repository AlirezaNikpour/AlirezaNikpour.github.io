  $(document).ready(function () {
        $("section.boxes .item-box:first-child").addClass("active");
        $("section.boxes ").on('click', ".item-box", function (event) {
            var index = $(this).index();
            $("section.boxes .item-box").removeClass("active");
            $(this).addClass("active");
            $("#owl-events .owl-dots >.owl-dot:nth-child(" + (index + 1) + ")").trigger("click");
        });
    });
  $(document).ready(function () {
      $("section.boxes .item-box:first-child").addClass("active");
      $("section.boxes ").on('click', ".item-box", function (event) {
          var index = $(this).index();
          $("section.boxes .item-box").removeClass("active");
          $(this).addClass("active");
          $("#owl-event .owl-dots >.owl-dot:nth-child(" + (index + 1) + ")").trigger("click");
      });
  });
  $(document).ready(function () {
      $("#owl-events , #owl-event").owlCarousel({
          navigation: false,
          slideSpeed: 300,
          paginationSpeed: 400,
          singleItem: true,
          items: 1,
          autoHeight: true,
          transitionStyle: "fade",
          touchDrag : false,
          mouseDrag : false
      });

  });
  $(document).ready(function(){
      $(".owl-carousel").owlCarousel();
  });