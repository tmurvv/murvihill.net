//JavaScript file

"use strict";

/***********************
 *Audio functionality from StackOverflow
 ************************/
function togglePlay(tune, pauseButton) {
    var myAudio = document.getElementById(tune);
    var pauseID = document.getElementById(pauseButton);

    console.log(myAudio);
    console.log(pauseID);
    console.log(pauseID.style.visibility === "");

    if (pauseID.style.visibility === "hidden" || pauseID.style.visibility === "") {
        pauseID.style.visibility = "visible";
        pauseID.style.opacity = "1";

    } else {
        pauseID.style.visibility = "hidden";
        pauseID.style.opacity = "0";
    }

    return myAudio.paused ? myAudio.play() : myAudio.pause();
};
function showCalendar(type) {
    var staticCalendar = document.querySelector('#js--staticCalendar');
    var staticCalendarText = document.querySelector('#js--staticCalendarText');
    var upcomingCalendar = document.querySelector('#js--upcomingCalendar');
    var upcomingCalendarText = document.querySelector('#js--upcomingCalendarText');
    var closeStatic = document.querySelector('#js--closeStatic');
    var closeUpcoming = document.querySelector('#js--closeUpcoming');
    var troubleScrolling = document.querySelector('#js--troubleScrolling');
    var troubleScrollingUpcoming = document.querySelector('#js--troubleScrollingUpcoming');
    var clickhere = document.querySelector('#js--clickhere');
    var clickhereUpcoming = document.querySelector('#js--clickhereUpcoming');

    clickhere.style.display = 'block';
    troubleScrolling.style.display = 'none';
    clickhereUpcoming.style.display = 'block';
    troubleScrollingUpcoming.style.display = 'none';
    
    if (type==='static') {
        staticCalendar.style.display = 'block';
        staticCalendarText.style.display = 'none';
        closeStatic.style.display='block';
        upcomingCalendar.style.display = 'none';
        upcomingCalendarText.style.display = 'block';
        closeUpcoming.style.display = 'none';       
        troubleScrolling.style.display = 'none';
        troubleScrollingUpcoming.style.display = 'none';
        return;
    }
    if (type==='upcoming') {
        staticCalendar.style.display = 'none';
        staticCalendarText.style.display = 'block';
        closeStatic.style.display = 'none';
        upcomingCalendar.style.display = 'block';
        upcomingCalendarText.style.display = 'none';
        closeUpcoming.style.display = 'block';
        troubleScrolling.style.display = 'none';
        troubleScrollingUpcoming.style.display = 'none';
        return;
    }
    if (type==='close') {
        staticCalendar.style.display = 'none';
        staticCalendarText.style.display = 'block';
        upcomingCalendar.style.display = 'none';
        upcomingCalendarText.style.display = 'block';
        closeStatic.style.display = 'none';
        closeUpcoming.style.display = 'none';        
        return;
    }
}
function troubleScrolling(type) {
    if (type === 'static') {
        document.querySelector('#js--troubleScrolling').style.display = "block";
        document.querySelector('#js--clickhere').style.display = "none";
    } else {
        document.querySelector('#js--troubleScrollingUpcoming').style.display = "block";
        document.querySelector('#js--clickhereUpcoming').style.display = "none";
    }
}
$(document).ready(function () {
    /***********************
     *Map functionality from W3 Schools
     ************************/
    var myCenter = new google.maps.LatLng(45.547522, -122.780329);
    var mapCanvas = document.getElementById("map");
    var mapOptions = {
        center: myCenter,
        zoom: 14
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
    var marker = new google.maps.Marker({
        position: myCenter
    });
    marker.setMap(map);

    // var myCenterMob = new google.maps.LatLng(45.566637, -122.820307);
    // var mapCanvasMob = document.getElementById("mobileMap");
    // var mapOptionsMob = {
    //     center: myCenterMob,
    //     zoom: 14
    // };
    // var mapMob = new google.maps.Map(mapCanvasMob, mapOptionsMob);
    // var markerMob = new google.maps.Marker({
    //     position: myCenter
    // });
    // markerMob.setMap(mapMob);

    /***********************
     *Mobile functionality from Jonas Schmidt web course
     ************************/
    $('#js--mobileMenu').click(function() {
        var icon = $('.js--mobileNav i');
        var mobileNav = $('.mobileContainer__bottom--nav');
        var recordingNav = $('.mobileContainer__bottom--recordingNav');

        mobileNav.slideToggle(200);      
        icon.addClass('fa-bars');
        icon.removeClass('fa-times');
        recordingNav.css('opacity', '1');   
    });
    $('.js--mobileNav').click(function() {
        var icon = $('.js--mobileNav i');
        var mobileNav = $('.mobileContainer__bottom--nav');
        var recordingNav = $('.mobileContainer__bottom--recordingNav');

        mobileNav.slideToggle(200);

        if (icon.hasClass('fa-bars')) {
                icon.addClass('fa-times');
                icon.removeClass('fa-bars');
                recordingNav.css('opacity', '.5');
            } else {
                icon.addClass('fa-bars');
                icon.removeClass('fa-times');
                recordingNav.css('opacity', '1');
            }
    });
});