/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("mobileNav").style.height = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("mobileNav").style.height = "0%";
}

var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 140 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 1000;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {

        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.1em solid var(--pink);}";
        document.body.appendChild(css);
    };

function doCounter() {
    const counters = document.querySelectorAll('.counter');
    // Main function
    for(let n of counters) {
      const updateCount = () => {
        const target = + n.getAttribute('data-target');
        const count = + n.innerText;
        const speed = 3000; // change animation speed here
        const inc = target / speed;
        if(count < target) {
          n.innerText = Math.ceil(count + inc);
          setTimeout(updateCount, 40);
        } else {
          n.innerText = target;
        }
      }
      updateCount();
    }
}

$(document).ready(function(){
    $("#for-brd").hide();
    $("#for-brda").hide();
    $(".open-inf").css('box-shadow', '0px 0px 12px rgba(0,0,0,0.2)');
    // $("#for-inf").hide();
    // $("#for-infa").hide();

    $("#inf").click(function(){

        if ($("#for-inf").is(":hidden")) {
            $("#for-brd").slideUp(800, function(){
                $("#for-brda").slideUp(1, function(){
                    $("#for-infa").slideDown(1, function(){
                        $("#for-inf").slideDown(800);
                    });
                });
            });
            $(".open-brd").css('box-shadow', '0px 0px 12px rgba(0,0,0,0.08)');
            $(".open-inf").css('box-shadow', '0px 0px 12px rgba(0,0,0,0.2)');

        } else {
            $("#for-inf").slideUp(800, function(){
                $("#for-infa").slideUp(1);
            });
            $(".open-inf").css('box-shadow', '0px 0px 12px rgba(0,0,0,0.08)');
        }

    });

    $("#brd").click(function(){

        if ($("#for-brd").is(":hidden")) {
            $("#for-inf").slideUp(800, function(){
                $("#for-infa").slideUp(1, function() {
                    $("#for-brda").slideDown(1, function(){
                        $("#for-brd").slideDown(800);
                    });
                });
            });
            $(".open-inf").css('box-shadow', '0px 0px 12px rgba(0,0,0,0.08)');
            $(".open-brd").css('box-shadow', '0px 0px 12px rgba(0,0,0,0.12)');
        } else {
            $("#for-brd").slideUp(800, function(){
                $("#for-brda").slideUp(1);
            });
            $(".open-brd").css('box-shadow', '0px 0px 12px rgba(0,0,0,0.08)');
        }

    });

    $('.profile').click(function() {
        console.log($(this).css("rotateY"));
        if ($(this).css("rotateY") != '180deg') {
            $(this).transition(
                {rotateY: '180deg'}, 800);
        } else {
            $(this).transition(
                {rotateY: 0}, 800);
        }
    });

});

