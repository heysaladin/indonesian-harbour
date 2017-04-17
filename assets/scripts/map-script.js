// =============================================================================================================== */
function initialize_map_home() {
    var mapOptions = {
        zoom: 6,
        scrollwheel: false,
        center: new google.maps.LatLng('-3.9621147', '116.8283402'),
        zoomControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.LARGE,
            position: google.maps.ControlPosition.LEFT_BOTTOM
        },
        scaleControl: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
    var location = [];
    location.push(['<div class="clearfix" id="content_map"><div id="siteImg"><img src="https://www.pelindo.co.id/site/images/media/branchs/thumb/1433813972-pinmap-01jpg.jpg"/></div><div id="siteContent"><h3>TANJUNG PERAK</h3><p class="sText">Jl. Perak Timur No. 620<br/>Surabaya, 60165, Jawa Timur<br/>Telp.  +62 31 3291992 – 96<br/>Fax.   +62 31 3293994<br/>Email   : tu.perak@pp3.co.id<br/></p></div></div>', -7.19866, 112.73529800000006]);
    location.push(['<div class="clearfix" id="content_map"><div id="siteImg"><img src="https://www.pelindo.co.id/site/images/media/branchs/thumb/1435076162-1433813972-cabang-tanjungperakjpgjpg.jpg"/></div><div id="siteContent"><h3>BANJARMASIN </h3><p class="sText">Jl. Barito Hilir Trisakti No.6<br/>Banjarmasin, 70119<br/>Telp.  +62 511 3365866 / 3353670<br/>Fax.   +62 511 3352552<br/>Email   : tu.banjarmasin@pp3.co.id<br/></p></div></div>', -3.322806, 114.56102399999997]);
    location.push(['<div class="clearfix" id="content_map"><div id="siteImg"><img src="https://www.pelindo.co.id/site/images/media/branchs/thumb/1435077969-bimajpg.jpg"/></div><div id="siteContent"><h3>BIMA </h3><p class="sText">Jl. RE Martadinata No. 1<br/>Bima, Nusa Tenggara Barat<br/>Telp.  +62 374 4376 / 42353<br/>Fax.   +62 374 42353<br/>Email : bima@pp3.co.id<br/></p></div></div>', -8.447513, 118.71295299999997]);
    location.push(['<div class="clearfix" id="content_map"><div id="siteImg"><img src="https://www.pelindo.co.id/site/images/media/branchs/thumb/1435937793-thumb-gresikjpg.jpg"/></div><div id="siteContent"><h3>GRESIK</h3><p class="sText">Jl. Yos Sudarso No. 1<br/>Gresik, Jawa Timur<br/>Telp.  +62 31 3981941/ 3982735<br/>Fax.   +62 31 3982735<br/>Email : gresik@pp3.co.id<br/></p></div></div>', -7.158147, 112.66283499999997]);
    location.push(['<div class="clearfix" id="content_map"><div id="siteImg"><img src="https://www.pelindo.co.id/site/images/media/branchs/thumb/1435079547-1433813972-cabang-tanjungperakjpgjpg.jpg"/></div><div id="siteContent"><h3>CELUKAN BAWANG</h3><p class="sText">Jl. Pelabuhan Celukan Bawang No. 35<br/>Buleleng, Bali<br/>Telp.  +62 362 92333<br/>Fax.   +62 362 92893<br/>Email : celukanbawang@pp3.co.id<br/></p></div></div>', -8.191935, 114.83173799999997]);
    location.push(['<div class="clearfix" id="content_map"><div id="siteImg"><img src="https://www.pelindo.co.id/site/images/media/branchs/thumb/1435080893-1433813972-cabang-tanjungperakjpgjpg.jpg"/></div><div id="siteContent"><h3>KOTABARU</h3><p class="sText">Jl. Raya Stagen KM.11 No.9<br/>Kotabaru, Kalimanatan Selatan, 72151<br/>Telp.   +62 518 21214<br/>Fax.    +62 518 22136<br/>Email  : kotabaru@pelindo.co.id<br/><br/></p></div></div>', -3.229642, 116.23408300000006]);
    location.push(['<div class="clearfix" id="content_map"><div id="siteImg"><img src="https://www.pelindo.co.id/site/images/media/branchs/thumb/1435081723-1433813972-cabang-tanjungperakjpgjpg.jpg"/></div><div id="siteContent"><h3>KUMAI</h3><p class="sText">Jl. Bendahara No. 248<br/>Kumai, 74181, Kalimantan Tengah<br/>Telp.  +62 532 61468<br/>Fax.   +62 532 61777<br/>Email : kumai@pp3.co.id<br/></p></div></div>', -2.740582, 111.726675]);
    location.push(['<div class="clearfix" id="content_map"><div id="siteImg"><img src="https://www.pelindo.co.id/site/images/media/branchs/thumb/1435941622-thumb-kupang-2jpg.jpg"/></div><div id="siteContent"><h3>TENAU KUPANG </h3><p class="sText">Jl. Yos Sudarso No. 23<br/>Kupang, Nusa Tenggara Timur<br/>Telp.  +62 380 890030/ 890022<br/>Fax.   +62 380 890072<br/>Email : kupang@pp3.co.id<br/></p></div></div>', -10.195746, 123.52762400000006]);
    location.push(['<div class="clearfix" id="content_map"><div id="siteImg"><img src="https://www.pelindo.co.id/site/images/media/branchs/thumb/1435941972-thumb-maumere-1jpg.jpg"/></div><div id="siteContent"><h3>MAUMERE</h3><p class="sText">Jl. Kureng No. 2<br/>Maumere, Nusa Tenggara Timur<br/>Telp.  +62 382 21054<br/>          +62 382 21618 (GM)<br/>Fax.   +62 382 21618<br/>Email : maumere@pp3.co.id<br/></p></div></div>', -8.614924, 122.21894700000007]);
    location.push(['<div class="clearfix" id="content_map"><div id="siteImg"><img src="https://www.pelindo.co.id/site/images/media/branchs/thumb/1435942249-thumb-p-lembar-2jpg.jpg"/></div><div id="siteContent"><h3>PELABUHAN LEMBAR</h3><p class="sText">Jl. Raya Pelabuhan No. 5<br/>Lombok Barat, Nusa Tenggara Barat<br/>Telp.  +0370 681260<br/>Fax.   +0370 681011<br/></p></div></div>', -8.727493, 116.07539199999997]);
    location.push(['<div class="clearfix" id="content_map"><div id="siteImg"><img src="https://www.pelindo.co.id/site/images/media/branchs/thumb/1435083479-1433813972-cabang-tanjungperakjpgjpg.jpg"/></div><div id="siteContent"><h3>PELABUHAN SAMPIT</h3><p class="sText">Jl. Usman Harun No. 2<br/>Sampit, Kalimantan Tengah<br/>Telp.  +62 531 21055<br/>Fax.   +62 531 21123<br/>Email : sampit@pp3.co.id<br/></p></div></div>', -2.541218, 112.96440499999994]);
    location.push(['<div class="clearfix" id="content_map"><div id="siteImg"><img src="https://www.pelindo.co.id/site/images/media/branchs/thumb/1435084118-tjintanpng.png"/></div><div id="siteContent"><h3>TANJUNG INTAN</h3><p class="sText">Jl. Laut Jawa<br/>Cilacap, Jawa Tengah<br/>Telp.  +62 282 34651 – 2 / 33334<br/>Fax.   +62 282 534653<br/>Email : tgintan@pp3.co.id<br/><br/></p></div></div>', -7.733881, 108.99374899999998]);
    location.push(['<div class="clearfix" id="content_map"><div id="siteImg"><img src="https://www.pelindo.co.id/site/images/media/branchs/thumb/1435085032-1433813972-cabang-tanjungperakjpgjpg.jpg"/></div><div id="siteContent"><h3>TANJUNG EMAS</h3><p class="sText">Jl. Coaster No. 10<br/>Semarang, Jawa Tengah<br/>Telp.  +62 24 3545721 – 4<br/>Fax.   +62 24 3542649/ 3576002<br/>Email  : tgemas@pp3.co.id<br/><br/></p></div></div>', -6.942732, 110.42382900000007]);
    location.push(['<div class="clearfix" id="content_map"><div id="siteImg"><img src="https://www.pelindo.co.id/site/images/media/branchs/thumb/1435094146-1433813972-cabang-tanjungperakjpgjpg.jpg"/></div><div id="siteContent"><h3>TANJUNG WANGI</h3><p class="sText">Jl. Raya Situbondo<br/>Banyuwangi, Jawa Timur<br/>Telp.  +62 333 510636 (Umum)<br/>Fax.   +62 333 510484<br/>Email : tgwangi@pp3.co.id<br/></p></div></div>', -8.143092, 114.40057999999999]);
    location.push(['<div class="clearfix" id="content_map"><div id="siteImg"><img src="https://www.pelindo.co.id/site/images/media/branchs/thumb/1435328267-benoajpg.jpg"/></div><div id="siteContent"><h3>BENOA</h3><p class="sText">Jl. Raya Pelabuhan Benoa<br/>Denpasar, 80222, Bali<br/>Telp.  +62 361 720560/ 723352<br/>Fax.   +62 361 723351<br/>Email : benoa@pp3.co.id<br/></p></div></div>', -8.737776, 115.21130199999993]);
    location.push(['<div class="clearfix" id="content_map"><div id="siteImg"><img src="https://www.pelindo.co.id/site/images/media/branchs/thumb/1435974586-thumb-tj-tmbagajpg.jpg"/></div><div id="siteContent"><h3>TANJUNG TEMBAGA</h3><p class="sText">Jl. Tembaga Timur No. 10<br/>Probolinggo, Jawa Timur<br/>Telp.  +62 335 421363/ 421385<br/>Fax.   +62 335 427123<br/>Email : probolinggo@pp3.co.id<br/></p></div></div>', -7.734179, 113.218119]);
    location.push(['<div class="clearfix" id="content_map"><div id="siteImg"><img src="https://www.pelindo.co.id/site/images/media/branchs/thumb/1435949026-thumb-kupang-3jpg.jpg"/></div><div id="siteContent"><h3>TERMINAL PETIKEMAS SEMARANG</h3><p class="sText">Jl. Coaster No. 10 Pelabuhan Tanjung Emas<br/>Semarang 50116<br/>Telp. +62 24 3569990<br/>Fax.  +62 24 3581242<br/>Email : tpk.semarang@tpks.co.id</p></div></div>', -6.9508378, 110.42878210000003]);
    var infowindow = new google.maps.InfoWindow({});
    var marker, i;
    for (i = 0; i < location.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(location[i][1], location[i][2]),
            map: map,
            icon: 'https://www.pelindo.co.id/html/images/material/mapMarker.png'
        });
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infowindow.setContent(location[i][0]);
                infowindow.open(map, marker);
            };
        })(marker, i));
    };
};
google.maps.event.addDomListener(window, 'load', initialize_map_home);

$(function() {
    $('select.selectBranch').change(function() {
        if ($(this).val() !== '') {
            window.location.href = $(this).val();
        }
    });
});
