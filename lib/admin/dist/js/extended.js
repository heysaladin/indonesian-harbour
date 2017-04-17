// $(document).onload(function() {
//     // $(function() {
//         $('#logo-indie').click();
//     // });
// });
$(document).ready(function() {
	// $('#logo-indie').bind('click', function() {
 //            $('.sidebar-collapse-btn-wrapper a.sidebar-toggle i').toggleClass('menu-open');
 //            return false;
 //        });
    $('.for-sliding').on('click', function() {
        if ($('.main-sidebar').width() < 69) {
            // alert($('.main-sidebar').width());
            $('.user-panel > .image > img').css('margin-top', '25px');
            $('.main-sidebar .user-panel').css('min-height', '220px');
            // $('.main-sidebar .user-panel').css('height', '220px');
            // $('.main-sidebar .user-panel').height(220);
            $('ul.sidebar-menu li a').css('padding-left', '50px');
            $('ul.sidebar-menu li a').css('padding-right', '50px');
            // $('ul.sidebar-menu li ul').css('display','block !important');
            // $('ul.sidebar-menu li ul').css('padding-left','53px');
            // $('.sidebar-collapse-btn-wrapper a.sidebar-toggle i').removeClass('fa-angle-right');
            // $('.sidebar-collapse-btn-wrapper a.sidebar-toggle i').addClass('fa-angle-left');
            // $('.sidebar-collapse-btn-wrapper a.sidebar-toggle i').removeClass('fa-angle-left');
            // $('.sidebar-collapse-btn-wrapper a.sidebar-toggle i').addClass('fa-angle-right');
            $('.sidebar-collapse-btn-wrapper a.sidebar-toggle i').css('-ms-transform', 'rotate(180deg)');
            $('.sidebar-collapse-btn-wrapper a.sidebar-toggle i').css('-webkit-transform', 'rotate(180deg)');
            $('.sidebar-collapse-btn-wrapper a.sidebar-toggle i').css('transform', 'rotate(180deg)');
            // ==============================
            $('.image-overlay').css('width', '101.8%');
        } else {
            // alert($('.main-sidebar').width());
            $('.user-panel > .image > img').css('margin-top', '5px');
            $('.main-sidebar .user-panel').css('min-height', '70px');
            // $('.main-sidebar .user-panel').css('height', '70px');
            // $('.main-sidebar .user-panel').height(70);
            $('ul.sidebar-menu li a').css('padding-left', '15px');
            $('ul.sidebar-menu li a').css('padding-right', '15px');
            // $('ul.sidebar-menu li ul').css('display','block !important');
            $('ul.sidebar-menu li ul').css('padding-left', '0px');
            // $('.sidebar-collapse-btn-wrapper a.sidebar-toggle i').addClass('fa-angle-right');
            // $('.sidebar-collapse-btn-wrapper a.sidebar-toggle i').removeClass('fa-angle-right');
            // $('.sidebar-collapse-btn-wrapper a.sidebar-toggle i').addClass('fa-angle-left');
            $('.sidebar-collapse-btn-wrapper a.sidebar-toggle i').css('-ms-transform', 'rotate(0deg)');
            $('.sidebar-collapse-btn-wrapper a.sidebar-toggle i').css('-webkit-transform', 'rotate(0deg)');
            $('.sidebar-collapse-btn-wrapper a.sidebar-toggle i').css('transform', 'rotate(0deg)');
            // ==============================
            $('.image-overlay').css('width', '101.6%');
        }
    });
	$('#logo-indie').click();
});
