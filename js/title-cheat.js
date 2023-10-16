var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        // $('[rel="icon"]').attr('href', "/whatever");
        document.title = 'Σ( ⚆൧⚆) 页面崩溃啦~';
        clearTimeout(titleTime);
    } else {
        // $('[rel="icon"]').attr('href', "/img/logo-icon.png");
        document.title = '(ฅ>ω<*ฅ) 噫又好了~';
        titleTime = setTimeout(function() {
            document.title = OriginTitle;
        }, 1500);
    }
});