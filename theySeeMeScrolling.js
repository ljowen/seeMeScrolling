(function($){
        $.fn.inView = function(partial,hidden){
                
                    var $t                                = $(this).eq(0),
                    t                                = $t.get(0),
                    $w                                = $(window),                    
                    viewTop                   = $(this).scrollParent().offset().top,
                    viewBottom                = viewTop + $(this).scrollParent().height();
                    _top                        = $t.offset().top,
                    _bottom                        = _top + $t.height(),
                    compareTop                = partial === true ? _bottom : _top,
                    compareBottom        = partial === true ? _top : _bottom,
                    clientSize                = hidden === true ? t.offsetWidth * t.offsetHeight : true;  
                return !!clientSize && ((compareBottom <= viewBottom) && (compareTop >= viewTop));
    };   
})(jQuery);