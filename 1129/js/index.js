var myswiper = new Swiper('.swiper-container', {
    slideChange: function() {
        var index = this.activeIndex();
        console.log(index)
    }
});

var dls = document.querySelectorAll('.box dl dt');


dls.forEach(function(file, index) {
    $(file).on('click', function() {
        $(this).addClass('active').siblings();
        myswiper.slideTo(index)
    })
})