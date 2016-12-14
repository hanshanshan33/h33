(function(){
    function pageEventStat(eventData) {
        typeof mfwPageEvent=='function' && mfwPageEvent('mdd', 'mdd_index', eventData);
    }
    $('.row-hot .r-navbar').delegate('a', 'hover', function(ev){
        var target = $(ev.target),
            navbar = target.parent().find('a'),
            index = navbar.index(target),
            hotlist = $('.hot-list');
        navbar.removeClass('on');
        target.addClass('on');
        hotlist.addClass('hide');
        hotlist.eq(index).removeClass('hide');
    });
    $('.row-hot').delegate('a[href]', 'click', function (e) {
        pageEventStat({
            mode   : '热门目的地',
            type   : $(e.currentTarget).html()
        });
    });
})();

