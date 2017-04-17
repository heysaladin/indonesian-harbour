$(document).ready(function() {
    
    headerScroll(); //scroll header 
    homeSlider(); //slider home  
    preloadProgress(); //loader page
    dropDownMenu(); //sub nav dropdown
    menuMobile(); //menu mobile    
    popup_gallery(); //popup gallery   
    
    
    /* styleSelect
    ================================================================= */
    $('.selectBranch').styledSelect({innerClass:'combobox'});
    $('.frSelect select').styledSelect({innerClass:'combobox'});
    $('.select_option select').styledSelect({innerClass:'combobox'});
    
    
    /* slider carousel lingkup bisnis 
    ================================================================= */
    var carousel_lingkup = $('.bxLingkup').bxSlider({    
        slideWidth: 152,
        minSlides: 1,
        maxSlides: 3,        
        infiniteLoop: true
    });
    
    /* slider carousel link partner 
    ================================================================= */
    var slide_link = $('.slide_link').bxSlider({    
        slideWidth: 125,
        minSlides: 1,
        maxSlides: 8,        
        infiniteLoop: false
    });
    
    
    /* slider carousel lingkup bisnis side
    ================================================================= */
    var slide_side = $('.slide_side').bxSlider({    
        slideWidth: 180,
        minSlides: 1,
        maxSlides: 1,        
        infiniteLoop: true
    });
    
    
    /* scroll Anim content
    ================================================================= */
    $('#home_tentangkami h3').scrollAnim();
    $('#home_tentangkami .stitle').scrollAnim();
    $('#home_tentangkami .stext').scrollAnim();
    $('#home_tentangkami .readMore ').scrollAnim();
    $('#home_tentangkami .people ').scrollAnim();
    $('#home_tentangkami .other_img').scrollAnim();
    
    $('#home_lingkupbisnis .bis_left').scrollAnim({});
    $('#home_lingkupbisnis .bis_right').scrollAnim({});
    
    $('#home_cabang .mcontent').scrollAnim({});
    $('#home_cabang .box_map').scrollAnim({});
    $('#home_filter_cabang .container form').scrollAnim({});
    
    $('#home_company h3').scrollAnim({});
    $('#home_company .readMore').scrollAnim({});
    $('#home_company .link_partner').scrollAnim({});
    
    $('body.home #footer_top .nav_foot').scrollAnim({});   
    $('body.home #footer_top .other_navFoot').scrollAnim({});   
    $('body.home #footer_top .foot_social').scrollAnim({}); 
    
    $('body.home #footer_bottom .copyright').scrollAnim({}); 
    
    
    
    /* hover slide lingkup & hover slide partner
    ================================================================= */
    $('#lingkup_slide li img').LingkupHoverSlide();   
    $('#lingkup_slide .bx-wrapper .bx-next').LingkupHoverBtnArrNext();
    $('#lingkup_slide .bx-wrapper .bx-prev').LingkupHhoverBtnArrPrev();
    
    $('#home_company .link_partner .bx-wrapper .bx-next').partnerHoverBtnArrNext();
    $('#home_company .link_partner .bx-wrapper .bx-prev').partnerHoverBtnArrPrev();
    $('#home_company .link_partner li img').partnerHoverSlide();   
    
    
    
    /* function accordion content
    ================================================================= */ 
    $('.accContent ul li:first').addClass('open');
    $('.accContent ul li .schild').accBlock({});
    
    
    /* function tabs content
    ================================================================= */ 
    $('ul.tabs li').actTab({});  
    
    
    
    
       
    
});


