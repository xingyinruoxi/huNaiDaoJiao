$(function () {
    //轮播图
    function scrollImg() {
        var $scrollImg = $('.scroll-img'),
            arrLiImg = $scrollImg.find('ul li'),
            $des = $scrollImg.find('.des'),
            arrBtn = $scrollImg.find('nav a'),
            num = 0,
            timer = null;
        var length = arrLiImg.length;
        arrLiImg.eq(0).show();
        arrBtn.eq(0).addClass('active');
        $des.text(arrLiImg.eq(0).find('img').attr('alt'));

        function toRun() {
            num++;
            num = num % length;
            toMove(num);
        }

        function toMove() {
            arrLiImg.eq(num).fadeIn(1000).siblings().fadeOut(750);
            arrBtn.eq(num).addClass('active').siblings().removeClass('active');
            $des.text(arrLiImg.eq(num).find('img').attr('alt'));
        }

        timer = setInterval(toRun, 3500);
        $scrollImg.hover(function () {
            clearInterval(timer);
        }, function () {
            timer = setInterval(toRun, 3500);
        });
        arrBtn.mouseover(function () {
            num = $(this).index();
            toMove(num);
        })
    }

    scrollImg();
});