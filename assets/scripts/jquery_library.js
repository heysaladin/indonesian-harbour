/* element onscreen detect
 =============================================================================================================== */
$.fn.isOnScreen = function () {
    if (this.length) {
        var viewport = {};
        viewport.top = $(window).scrollTop();
        viewport.bottom = viewport.top + $(window).height();
        var bounds = {};
        bounds.top = this.offset().top;
        bounds.bottom = bounds.top + this.outerHeight();
        return ((bounds.top <= viewport.bottom) && (bounds.bottom >= viewport.top));
    } else
        return false;
};

/* element loader
 =============================================================================================================== */
function preloadProgress() {
    var wrapper = $("#loader_box"),
            //percentage = wrapper.find('#loader_box span'),
            count_load = 0,
            count_loads = 0,
            eloading = $("body img").length;

    //progressload();
    function progressload() {
        $("body img").bind('load', function () {
            if (count_load < eloading) {
                count_load++;
                var width = (count_load / eloading) * 100;
                animateLoad(width);
            }
        });

    }
    function animateLoad(width) {
        //percentage.html(Math.ceil(width));
    }
    $(window).load(function () {
        animateLoad(100);
        TweenMax.to(wrapper, 0.6, {
            css: {
                opacity: 0,
                scale: 1
            },
            delay: 0.6,
            onComplete: function () {
                wrapper.css('display', 'none');
            },
            ease: Back.easeIn
        });
    });
}
;


/* function for scroll header
 =============================================================================================================== */
function headerScroll() {
    if ($(window).width() >= 1304) {
        $(window).scroll(function () {
            if ($(this).scrollTop() >= 100) {
                TweenMax.to($('header .head_top '), 0.5, {
                    css: {
                        'margin-top': '-102px'
                    },
                    delay: 0,
                    ease: Cubic.easeOut
                });
                TweenMax.to($('header .head_bottom .logo_small '), 0.5, {
                    css: {
                        'display': 'block',
                        'opacity': '1'
                    },
                    delay: 0,
                    ease: Cubic.easeOut
                });
                TweenMax.to($('header .head_bottom .nav '), 0.5, {
                    css: {
                        'margin-left': '130px'
                    },
                    delay: 0,
                    ease: Cubic.easeOut
                });
                TweenMax.to($('header .head_bottom .nav li '), 0.5, {
                    css: {
                        'padding-right': '24px'
                    },
                    delay: 0,
                    ease: Cubic.easeOut
                });
                TweenMax.to($('header'), 0.5, {
                    css: {
                        'height': '60px'
                    },
                    delay: 0.1,
                    ease: Cubic.easeOut,
                    onComplete: function () {
                        $('header').addClass('current');
                    }
                });
                TweenMax.to($("#middle"), 0.5, {
                    css: {
                        'padding-top': "62px"
                    },
                    delay: 0.1,
                    ease: Cubic.easeOut
                });
            } else {
                if ($(this).scrollTop() < 100) {
                    TweenMax.to($('header .head_top '), 0.4, {
                        css: {
                            'margin-top': '0px'
                        },
                        delay: 0,
                        ease: Cubic.easeOut
                    });
                    TweenMax.to($('header .head_bottom .logo_small '), 0.4, {
                        css: {
                            'display': 'none',
                            'opacity': '0'
                        },
                        delay: 0,
                        ease: Cubic.easeOut
                    });
                    TweenMax.to($('header .head_bottom .nav '), 0.4, {
                        css: {
                            'margin-left': '26px'
                        },
                        delay: 0,
                        ease: Cubic.easeOut
                    });
                    TweenMax.to($('header .head_bottom .nav li '), 0.4, {
                        css: {
                            'padding-right': '28px'
                        },
                        delay: 0,
                        ease: Cubic.easeOut
                    });
                    TweenMax.to($('header'), 0.4, {
                        css: {
                            'height': '162px'
                        },
                        delay: 0.1,
                        ease: Cubic.easeOut,
                        onComplete: function () {
                            $('header').removeClass('current');
                        }
                    });
                    TweenMax.to($("#middle"), 0.4, {
                        css: {
                            'padding-top': "162px"
                        },
                        delay: 0.1,
                        ease: Cubic.easeOut
                    });
                }
            }

        });
    }
    else if (($(window).width() < 1304) && ($(window).width() > 479)) {
        $(window).scroll(function () {
            if ($(this).scrollTop() >= 100) {
                TweenMax.to($('header .head_top '), 0.5, {
                    css: {
                        'margin-top': '-72px'
                    },
                    delay: 0,
                    ease: Cubic.easeOut
                });
                TweenMax.to($('header .head_bottom .logo_small '), 0.5, {
                    css: {
                        'display': 'block',
                        'opacity': '1',
                        'left': '0'
                    },
                    delay: 0,
                    ease: Cubic.easeOut
                });

            } else {
                if ($(this).scrollTop() < 100) {
                    TweenMax.to($('header .head_top '), 0.4, {
                        css: {
                            'margin-top': '0px'
                        },
                        delay: 0,
                        ease: Cubic.easeOut
                    });
                    TweenMax.to($('header .head_bottom .logo_small '), 0.4, {
                        css: {
                            'display': 'none',
                            'opacity': '0',
                            'left': '0'
                        },
                        delay: 0,
                        ease: Cubic.easeOut
                    });
                    TweenMax.to($('header'), 0.4, {
                        css: {
                            'height': '162px'
                        },
                        delay: 0.1,
                        ease: Cubic.easeOut,
                        onComplete: function () {
                            $('header').removeClass('current');
                        }
                    });
                    TweenMax.to($("#middle"), 0.4, {
                        css: {
                            'padding-top': "162px"
                        },
                        delay: 0.1,
                        ease: Cubic.easeOut
                    });
                }
            }

        });
    }
    else if ($(window).width() < 479) {
        $(window).scroll(function () {
            if ($(this).scrollTop() >= 100) {
                TweenMax.to($('header .head_top '), 0.5, {
                    css: {
                        'margin-top': '-72px'
                    },
                    delay: 0,
                    ease: Cubic.easeOut
                });
                TweenMax.to($('header .head_bottom .logo_small '), 0.5, {
                    css: {
                        'display': 'none',
                        'opacity': '0',
                        'left': '0'
                    },
                    delay: 0,
                    ease: Cubic.easeOut
                });

            } else {
                if ($(this).scrollTop() < 100) {
                    TweenMax.to($('header .head_top '), 0.4, {
                        css: {
                            'margin-top': '0px'
                        },
                        delay: 0,
                        ease: Cubic.easeOut
                    });
                    TweenMax.to($('header .head_bottom .logo_small '), 0.4, {
                        css: {
                            'display': 'none',
                            'opacity': '0',
                            'left': '0'
                        },
                        delay: 0,
                        ease: Cubic.easeOut
                    });
                }
            }

        });
    }




}
;



/* function for submenu 
 =============================================================================================================== */
function dropDownMenu() {
    var elem = $(".nav li");
    elem.hover(function () {
        $(this).addClass("current");
        var drop_box = $(this).children("ul");
        if (drop_box.length) {
            TweenMax.to(drop_box, 0.5, {
                css: {
                    'display': 'block',
                    'opacity': '1',
                    'margin-top': '0'
                },
                ease: Quart.easeOut
            });
        }
    }, function () {
        $(this).removeClass("current");
        var drop_box = $(this).children("ul");
        TweenMax.to(drop_box, 0.5, {
            css: {
                'display': 'none',
                'opacity': '0',
                'margin-top': '50px'
            },
            ease: Quart.easeOut
        });
    });
    /*$(".nav li").has("ul").hover(function(){                    
     $(this).addClass("current").children("ul").fadeIn("normal");
     }, function() {     
     $(this).removeClass("current").children("ul").stop(true, true).fadeOut("normal");
     });
     */
}
;


/* function for menu mobile 
 =============================================================================================================== */
function menuMobile() {
    var elem1 = $(".button_nm");
    var elem2 = $(".button_nm_active");
    elem1.on('click', function () {
        $(this).fadeOut();
        $('.button_nm_active').fadeIn('');
        $('.nav_mobile > ul').slideDown('100');
        $('.nav_mobile li a.schild').removeAttr('href');
    });
    elem2.on('click', function () {
        $(this).fadeOut();
        $('.button_nm').fadeIn('');
        $('.nav_mobile > ul').slideUp('100');
        $('.nav_mobile li a.schild').removeAttr('href');
    });
    $(".nav_mobile li.child a").on('click', function (e) {
        //$("> ul",this).fadeIn();
        var showul = $(this).parent('li').children('ul');
        TweenMax.set(showul, {//untuk set position
            'display': 'block',
            'margin-top': '0',
            'opacity': '0',
            'left': '100%'
        });
        TweenMax.to(showul, 0.4, {//untuk animasi munculnya
            css: {
                'margin-top': '0',
                'opacity': '1',
                'left': '0'
            },
            ease: Cubic.easeOut
        });
        /*
         if (showul.length) {
         TweenMax.to(showul, 0.5, {
         css: {
         'display': 'block',
         'margin-top': '0',
         'opacity': '1',
         'left': '78px'
         },
         ease: Quart.easeInOut
         });
         };
         */
        /*
         var showSibling = $(this).siblings().find('ul');
         if (showSibling.length) {
         TweenMax.to(showSibling, 0.5, {
         css: {
         'display': 'none',
         'margin-top': '0',
         'opacity': '0',
         'left': '100%'
         },
         ease: Quart.easeInOut
         });
         }
         */
        //$(this).siblings().find('ul').fadeOut('100');
    });

    $(".nav_mobile li.back a").click(function () {
        //alert('halo');   
        $(this).removeAttr('href');
        TweenMax.to($('.nav_mobile ul.contentSub'), 0.5, {
            css: {
                opacity: 0,
                left: '100%'
            },
            ease: Cubic.easeOut,
            onComplete: function () {
                TweenMax.set($('.nav_mobile ul.contentSub'), {display: 'none'});
            }
        });
    });
    /*
     var hideSubNav = $('.nav_mobile ul').mouseup(function () {
     return false;
     });
     var hideSubNav = $(document).mouseup(function (e) {
     if ($(e.target).parent('.nav_mobile ul').length == 0) {
     $('.nav_mobile ul').fadeOut('100');
     $('.nav_mobile').removeClass('active');
     }
     ;
     });
     */
}
;



/* function for homeslider
 =============================================================================================================== */
function homeSlider() {
    var sliderhome = $('.bx_sliderhome').bxSlider({
        mode: 'fade',
        speed: 2000,
        pause: 8000,
        auto: true,
        onSliderLoad: function (currentSlide) {
            animCaption("in");
        },
        onSlideBefore: function (currentSlide) {
            animCaption("out");
        },
        onSlideAfter: function (currentSlide) {
            animCaption("in");
        }
    });
}
;
function animCaption(type) {
    if (type === "in") {
        TweenMax.to($('#sliderhome .text_slider'), 0.4, {
            css: {
                'opacity': '1',
                'margin-left': '0px'
            },
            delay: 0,
            ease: Quart.easeOut
        });
        TweenMax.to($('#sliderhome .btn_slider'), 0.4, {
            css: {
                'opacity': '1',
                'margin-left': '0px'
            },
            delay: 0.1,
            ease: Quart.easeOut
        });
    } else {
        TweenMax.to($('#sliderhome .text_slider'), 0.4, {
            css: {
                'opacity': '0',
                'margin-left': '-200px'
            },
            delay: 0,
            ease: Quart.easeOut
        });
        TweenMax.to($('#sliderhome .btn_slider'), 0.4, {
            css: {
                'opacity': '0',
                'margin-left': '-200px'
            },
            delay: 0.1,
            ease: Quart.easeOut
        });
    }
}




/* style for selectbox
 =============================================================================================================== */
$.fn.styledSelect = function (options) {
    var isFF2 = false;
    var prefs = {
        coverClass: 'select-replace-cover',
        innerClass: 'select-replace',
        adjustPosition: {
            top: 0,
            left: 0
        },
        selectOpacity: 0
    };
    if (options)
        $.extend(prefs, options);
    return this.each(function () {
        if (isFF2)
            return false;
        var selElm = $(this);
        if (!selElm.next('span.' + prefs.innerClass).length) {
            selElm.wrap('<span><' + '/span>');
            selElm.after('<span><' + '/span>');
            var selReplace = selElm.next();
            var selCover = selElm.parent();
            selElm.css({
                'opacity': prefs.selectOpacity,
                'visibility': 'visible',
                'position': 'absolute',
                'top': 0,
                'left': 0,
                'display': 'inline',
                'z-index': 1
            });
            selCover.addClass(prefs.coverClass).css({
                'display': 'inline-block',
                'position': 'relative',
                'top': prefs.adjustPosition.top,
                'left': prefs.adjustPosition.left,
                'z-index': 0,
                'vertical-align': 'middle',
                'text-align': 'left'
            });
            selReplace.addClass(prefs.innerClass).css({
                'display': 'block',
                'white-space': 'nowrap'
            });
            selElm.bind('change', function () {
                $(this).next().text(this.options[this.selectedIndex].text);
            }).bind('resize', function () {
                $(this).parent().width($(this).width() + 'px');
            });
            selElm.trigger('change').trigger('resize');
        } else {
            var selElm = $(this);
            var selReplace = selElm.next();
            var selCover = selElm.parent();
            selElm.css({
                'opacity': prefs.selectOpacity,
                'visibility': 'visible',
                'position': 'absolute',
                'top': 0,
                'left': 0,
                'display': 'inline',
                'z-index': 1
            });
            selCover.css({
                'display': 'inline-block',
                'position': 'relative',
                'top': prefs.adjustPosition.top,
                'left': prefs.adjustPosition.left,
                'z-index': 0,
                'vertical-align': 'middle',
                'text-align': 'left'
            });
            selReplace.css({
                'display': 'block',
                'white-space': 'nowrap'
            });
        }
    });
};



/* function for scroll content
 =============================================================================================================== */
$.fn.scrollAnim = function () {
    var actAnimfunction = function (elem, elem_position, delay) {
        if (elem_position === "top") {
            TweenMax.to(elem, 0.5, {
                css: {
                    'opacity': '1',
                    'margin-top': '0px'
                },
                delay: delay,
                ease: Quart.easeOut
            });
        } else if (elem_position === "bottom") {
            TweenMax.to(elem, 0.5, {
                css: {
                    'opacity': '1',
                    'margin-bottom': '0px'
                },
                delay: delay,
                ease: Quart.easeOut
            });
        } else if (elem_position === "left") {
            TweenMax.to(elem, 0.5, {
                css: {
                    'opacity': '1',
                    'margin-left': '0px'
                },
                delay: delay,
                ease: Quart.easeOut
            });
        } else if (elem_position === "right") {
            TweenMax.to(elem, 0.5, {
                css: {
                    'opacity': '1',
                    'margin-right': '0px'
                },
                delay: delay,
                ease: Quart.easeOut
            });
        } else if (elem_position === "absolute_bottom") {
            TweenMax.to(elem, 0.5, {
                css: {
                    'opacity': '1',
                    'bottom': '0px'
                },
                delay: delay,
                ease: Quart.easeOut
            });
        } else if (elem_position === "absolute_right") {
            TweenMax.to(elem, 0.5, {
                css: {
                    'opacity': '1',
                    'right': '0px'
                },
                delay: delay,
                ease: Quart.easeOut
            });
        } else if (elem_position === "absolute_left") {
            TweenMax.to(elem, 0.5, {
                css: {
                    'opacity': '1',
                    'left': '0px'
                },
                delay: delay,
                ease: Quart.easeOut
            });
        } else if (elem_position === "absolute_top") {
            TweenMax.to(elem, 0.5, {
                css: {
                    'opacity': '1',
                    'top': '0px'
                },
                delay: delay,
                ease: Quart.easeOut
            });
        } else if (elem_position === "fade") {
            TweenMax.to(elem, 0.5, {
                css: {
                    'opacity': '1',
                    'scale': '1'
                },
                delay: delay,
                ease: Quart.easeOut
            });
        } else {
            TweenMax.to(elem, 0.5, {
                css: {
                    'opacity': '1',
                    'scale': '1'
                },
                delay: delay,
                ease: Quart.easeOut
            });
        }
    };
    var elem = this;
    $(window).scroll(function () {
        elem.each(function () {
            var elem_ = $(this);
            if (elem_.isOnScreen()) {
                var delay = parseFloat(elem_.attr('anim-delay'));
                //console.log(delay);
                actAnimfunction(elem_, elem_.attr('type-anim'), delay);
            }

        });
    });
};



/* function for hover lingkup slide
 =============================================================================================================== */
$.fn.LingkupHoverSlide = function () {
    var elem = this;
    elem.hover(function () {
        TweenMax.to($(this), 0.5, {
            css: {
                'scale': '0.9'
            },
            delay: 0.1,
            ease: Expo.easeOut
        });
    }, function () {
        TweenMax.to($(this), 0.5, {
            css: {
                'scale': '1'
            },
            delay: 0.1,
            ease: Expo.easeOut
        });
    });
};
$.fn.LingkupHoverBtnArrNext = function () {
    var elem = this;
    elem.hover(function () {
        TweenMax.to($(this), 0.5, {
            css: {
                'right': '-20px'
            },
            ease: Cubic.easeOut
        });
    }, function () {
        TweenMax.to($(this), 0.5, {
            css: {
                'right': '-10px'
            },
            ease: Cubic.easeOut
        });
    });
};
$.fn.LingkupHhoverBtnArrPrev = function () {
    var elem = this;
    elem.hover(function () {
        TweenMax.to($(this), 0.5, {
            css: {
                'left': '-20px'
            },
            ease: Cubic.easeOut
        });
    }, function () {
        TweenMax.to($(this), 0.5, {
            css: {
                'left': '-10px'
            },
            ease: Cubic.easeOut
        });
    });
};



/* function for hover partner slide home
 =============================================================================================================== */
$.fn.partnerHoverSlide = function () {
    var elem = this;
    elem.hover(function () {
        TweenMax.to($(this), 0.5, {
            css: {
                'scale': '0.9'
            },
            delay: 0.1,
            ease: Expo.easeOut
        });
    }, function () {
        TweenMax.to($(this), 0.5, {
            css: {
                'scale': '1'
            },
            delay: 0.1,
            ease: Expo.easeOut
        });
    });
};
$.fn.partnerHoverBtnArrNext = function () {
    var elem = this;
    elem.hover(function () {
        TweenMax.to($(this), 0.5, {
            css: {
                'right': '-70px'
            },
            ease: Cubic.easeOut
        });
    }, function () {
        TweenMax.to($(this), 0.5, {
            css: {
                'right': '-60px'
            },
            ease: Cubic.easeOut
        });
    });
};
$.fn.partnerHoverBtnArrPrev = function () {
    var elem = this;
    elem.hover(function () {
        TweenMax.to($(this), 0.5, {
            css: {
                'left': '-70px'
            },
            ease: Cubic.easeOut
        });
    }, function () {
        TweenMax.to($(this), 0.5, {
            css: {
                'left': '-60px'
            },
            ease: Cubic.easeOut
        });
    });
};


/* function for accordion content
 =============================================================================================================== */
$.fn.accBlock = function () {
    var elem = this;
    elem.on('click', function () {
        $(this).removeAttr('href');
        $(this).closest('li').find('ul').slideToggle('normal', function () {
            $(this).parent('li').toggleClass('open');
        });
        //el.stopPropagation();
    });
};


/* function for tabs content
 =============================================================================================================== */
$.fn.actTab = function () {
    var elem = this;
    $('.tabs_content').hide();
    $('ul.tabs li:first').addClass('active').show();
    $('.tabs_content:first').show();
    elem.on('click', function () {
        $(elem).removeClass('active');
        $(this).addClass("active");
        $(".tabs_content").hide();
        var activeTab = $(this).find("a").attr("href");
        $(activeTab).fadeIn('normal');
        return false;
    });
};



/* for function popup
 =============================================================================================================== */
function openPopup(id) {
    $("#" + id).fadeIn(300);
    $('body').addClass('lock');
}
function closePopup(id) {
    $("#" + id).fadeOut(300);
    $('body').removeClass('lock');
}
function popup_gallery() {
    var
    popup = $("#popup_gal");

    $(".have_popup a").click(function (e) {
        e.preventDefault();
        var
            elem = $(this),
            image = elem.find('.data_popup .image').html(),
            desc = elem.find('.data_popup .desc').html();
        //set data 
        popup.find(".sc_content img").attr('src', image);
        popup.find(".sc_content p.textPop").html(desc);
        popup.attr('index_data', elem.parent('li').index() + 1);
        openPopup("popup_gal");

    });
    popup.on('click', '.pop_next', function () {       
        var
            index_data_next = parseInt(popup.attr('index_data')) + 1,
            data = $(".have_popup li:nth-child(" + index_data_next + ")");            
        if (data.length) {            
            popup.attr('index_data', index_data_next);
            popup.find(".sc_content img").animate({'opacity':'0'}, 80,'', function(){
                popup.find(".sc_content img").attr('src', data.find('.image').html());
                popup.find(".sc_content p.textPop").html( data.find('.desc').html());
            });
            popup.find(".sc_content img").delay(100).animate({
                'opacity':'1'
            });
        } else {            
           $("#popup_gal").fadeOut();
           $('body').removeClass('lock');
        }

    });
    popup.on('click', '.pop_prev', function () {
        var
            index_data_prev = parseInt(popup.attr('index_data')) - 1,
            data = $(".have_popup li:nth-child(" + index_data_prev + ") .data_popup");
        if (data.length) {
            popup.attr('index_data', index_data_prev);
            popup.find(".sc_content img").animate({'opacity':'0'}, 80,'', function(){
                popup.find(".sc_content img").attr('src', data.find('.image').html());
                popup.find(".sc_content p.textPop").html( data.find('.desc').html()); 
            });  
            popup.find(".sc_content img").delay(100).animate({
                'opacity':'1'
            });           
        } else {
            $("#popup_gal").fadeOut();
            $('body').removeClass('lock');
        } 
    });

}









