
$(document).ready(function () {

    if ($('.home-slider').length > 0) {
        $(".home-slider").owlCarousel({
            items: 1,
            dots: true
        });
    }

    if ($('.testimonials-slider').length > 0) {
        $(".testimonials-slider").owlCarousel({
            dots: true,
            autoplay: true,
            loop: true,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1,
                    margin: 0

                },
                790: {
                    items: 2,
                    margin: 30
                }

            }

        });
    }
    


    // animation start
    function animation() {
        var windowHight = $(window).height();
        var scroll = $(window).scrollTop();
        $('.animation').each(function () {
            var pozicija = $(this).offset().top;
            var animacija = $(this).attr('data-animation');
            var delay = $(this).attr('data-delay');
            if (pozicija < scroll + windowHight - 50) {
                $(this).css('animation-delay', delay);
                $(this).addClass(animacija);
            }
        });

    }

    animation();

    $(window).scroll(function () {
        animation();
    });
// animation end


    $('[data-target=popup]').click(function (e) {
        e.preventDefault();
        let popupTarget = $(this).attr('href');
        $('.popup').hide();
        $(popupTarget).fadeIn();
        $('html').css('overflow', 'hidden');
    });

    $('.popup .close-popup').click(function (e) {
        e.preventDefault();
        $(this).css('cursor', 'pointer');
        $('.popup').hide();
        $('html').css('overflow', 'visible');
    });

// validacija forme


    $(function () {
        $(".contact-form").validate({
            highlight: function (element) {
                $(element).addClass("is-invalid").removeClass("is-valid");
                $(element).closest('.form-group').addClass("is-invalid").removeClass("is-valid");
            },
            unhighlight: function (element) {
                $(element).removeClass('is-invalid').addClass('is-valid');
                $(element).closest('.form-group').addClass("is-valid").removeClass("is-invalid");
            },
            rules: {
                email: {
                    required: true,
                    email: true
                },
                password: {
                    required: true,
                    minlength: 6,
                    checklower: true,
                    checkupper: true,
                    checkdigit: true
                            //passwordCheck: true
                }

            },
            messages: {

                email: {
                    required: 'Email je obavezno polje',
                    email: 'Unesite validan email'
                },
                password: {
                    required: 'Lozinka je obavezno polje',
                    minlength: 'Lozinka mora imati min 6 karaktera',
                    checklower: 'Malo slovo nema',
                    checkupper: 'Veliko slovo nema',
                    checkdigit: 'Broj nema',
                    passwordCheck: 'Lozinka mora imate bar jedno veliko slovo, bar jedno malo slovo i bar jedan broj'
                }

            },
            errorElement: 'p',
            errorPlacement: function (error, element) {
                error.appendTo($(element).closest('.form-group').find('.invalid-feedback'));
            }

        });
    });

    //Form Validation
      $.validator.addMethod("checklower", function (value) {
                return /[a-z]/.test(value);
            });
            $.validator.addMethod("checkupper", function (value) {
                return /[A-Z]/.test(value);
            });
            $.validator.addMethod("checkdigit", function (value) {
                return /[0-9]/.test(value);
            });
            $.validator.addMethod("pwcheck", function (value) {
                return /^[A-Za-z0-9\d=!\-@._*]*$/.test(value) && /[a-z]/.test(value) && /\d/.test(value) && /[A-Z]/.test(value);
            });

});
