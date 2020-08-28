$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 5) {
            $("#flour").css("left", "20%").css("top", "8%");
            $("#pappers").css("left", "20%").css("top", "41%");
            $("#cheese").css("left", "6%").css("top", "52%");
            $("#tomato").css("left", "22%").css("top", "65%");
            $("#chili").css("left", "4%").css("top", "33%");
            $("#gradient").css("left", "10%").css("top", "36%");
            $("#peppermint").css("left", "12%").css("top", "18%");
            $("#onion").css("left", "20%").css("top", "28%");
            $("#garlic").css("left", "11%").css("top", "45%");
        }
    });
});