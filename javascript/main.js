$(function () {
	"use strict";
	var e = $(window),
		a = $(".clayhero-img"),
		o = $(".testimonial-section"),
		i = $("#the-brand"),
		t = ($("html, body"), $("#clay-headermain")),
		l = $(".popup-image"),
		r = $(".img-popup-btn"),
		n = $(".video-popup"),
		s = $(".pies"),
		d = $(".more-skill-per"),
		m = $(".word"),
		u = document.location.href.split("#"),
		c = $("#contactform");
	Number.prototype.pad = function (e) {
		return (-1 === Math.abs(this) ? "-" : "") + new Array(e).concat([Math.abs(this)]).join("0").slice(-e)
	};
	a.on("initialized.owl.carousel changed.owl.carousel", function (e) {
		if (e.namespace) {
			a.find(".item").show(), a.find(".loading-placeholder").hide();
			var o = e.relatedTarget;
			$(".counts-wrap").text((o.relative(o.current()) + 1).pad(2))
		}
	}).owlCarousel({
		items: 1,
		loop: !0,
		nav: !1,
		animateOut: "fadeOut",
		animateIn: "fadeIn",
		lazyLoad: !0,
		touchDrag: !1,
		slideSpeed: 1500,
		dots: !0,
		dotsContainer: ".dots-nav",
		mouseDrag: !1,
		autoplay: !0,
		autoplayTimeout: 12e3,
		autoplayHoverPause: !0
	}), a.on("changed.owl.carousel", function (e) {
		var a = e.item.index,
			o = $(e.target).find(".owl-item").eq(a).find(".image-hero").attr("data-img");
		$(".mini-hero").css("background", "url(" + o + ") no-repeat")
	}), a.trigger("refresh.owl.carousel");
	i.owlCarousel({
		responsiveClass: !0,
		dots: !1,
		autoplay: !0,
		autoplayTimeout: 5e3,
		loop: !0,
		autoplayHoverPause: !0,
		responsive: {
			0: {
				items: 2
			},
			680: {
				items: 3
			},
			960: {
				items: 3
			}
		}
	});
	o.on("initialized.owl.carousel changed.owl.carousel", function (e) {
		e.namespace && (o.find(".item").show(), o.find(".loading-placeholder").hide(), e.relatedTarget)
	}).owlCarousel({
		autoplay: !0,
		autoplayTimeout: 4e3,
		loop: !0,
		items: 1,
		autoplayHoverPause: !0,
		center: !0,
		nav: !1
	}), o.trigger("refresh.owl.carousel");
	r.magnificPopup({
		type: "image",
		gallery: {
			enabled: !0
		}
	}), l.length > 0 && l.magnificPopup({
		type: "image",
		fixedContentPos: !0,
		gallery: {
			enabled: !0
		},
		removalDelay: 300,
		mainClass: "mfp-fade"
	}), $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
		disableOn: 700,
		type: "iframe",
		mainClass: "mfp-fade",
		removalDelay: 160,
		preloader: !1,
		fixedContentPos: !0
	}), n.length > 0 && n.magnificPopup({
		type: "iframe",
		removalDelay: 300,
		mainClass: "mfp-fade",
		overflowY: "hidden",
		iframe: {
			markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe></div>',
			patterns: {
				youtube: {
					index: "youtube.com/",
					id: "v=",
					src: "//www.youtube.com/embed/%id%?autoplay=1"
				},
				vimeo: {
					index: "vimeo.com/",
					id: "/",
					src: "//player.vimeo.com/video/%id%?autoplay=1"
				},
				gmaps: {
					index: "//maps.google.",
					src: "%id%&output=embed"
				}
			},
			srcAction: "iframe_src"
		}
	}), $.validator.addMethod("mobileValidation", function (e, a) {
		return !!/^\d{8}$|^\d{10}$/.test(e)
	}, "Phone number invalid"), c.submit(function (e) {
		e.preventDefault()
	}).validate({
		rules: {
			email: {
				required: !0,
				email: !0
			},
			name: {
				required: !0,
				minlength: 5
			},
			comment: {
				required: !0
			},
			mobile: {
				required: !0,
				mobileValidation: $("#phone").val()
			}
		},
		messages: {
			email: {
				required: "Check your email input"
			},
			name: {
				required: "Please check your first name input"
			},
			comment: {
				required: "Please write something for me"
			},
			mobile: {
				required: "Phone number invalid"
			}
		},
		submitHandler: function (e) {
			return $.ajax({
				type: "POST",
				url: "https://ramahardian.site/mail.php",
				data: $(e).serialize(),
				beforeSend: function () {
					$("input, textarea").attr("readonly", "readonly")
				},
				success: function (e) {
					"your message send" == e ? (c.trigger("reset"), $("input, textarea").attr("readonly", "false")) : ($("input, textarea").attr("readonly", "false"), c.trigger("reset"))
				}
			}), !1
		}
	}), m.animatedHeadline({
		animationType: "slide",
		animationDelay: 2500,
		barAnimationDelay: 3800,
		barWaiting: 800,
		lettersDelay: 50,
		typeLettersDelay: 150,
		selectionDuration: 500,
		typeAnimationDelay: 1300,
		revealDuration: 600,
		revealAnimationDelay: 1500
	});
	s.each(function () {
		var e = $(this).attr("data-no");
		new CircularProgressBar("pie-chart-" + e)
	}), $(".jarallax").length > 0 && $(".jarallax").jarallax({
		disableParallax: function () {
			return /iPad|iPhone|iPod|Android/.test(navigator.userAgent)
		},
		disableVideo: function () {
			return /iPad|iPhone|iPod|Android/.test(navigator.userAgent)
		},
		speed: .2
	}), d.each(function () {
		var e = $(this),
			a = e.data("num");
		$({
			animatedValue: 0
		}).animate({
			animatedValue: a
		}, {
			duration: 1e4,
			step: function () {
				e.attr("data-num", Math.floor(this.animatedValue) + "%"), e.css("width", Math.floor(this.animatedValue) + "%")
			},
			complete: function () {
				e.attr("data-num", Math.floor(this.animatedValue) + "%")
			}
		})
	}), $("body").on("click", '[data-type="page-efek"]', function (e) {
		e.preventDefault();
		var a = $(this).attr("href");
		$("body").addClass("page-leave"), $(".wrap-thelogo").show(0), $(".wrap-thelogo > img").addClass("itsload"), setTimeout(function () {
			$(".wrap-thelogo").hide(0), $(".wrap-thelogo > img").removeClass("itsload"), $("body").removeClass("page-leave"), $("section[id^='clay-']").hide(0), $("section[id='clay-" + a.split("#")[1] + "']").show(0), window.scrollTo(0, 0)
		}, 1500)
	}), $("body").on("click", '.clay-menu li a[data-type="page-efek"]', function (e) {
		e.preventDefault();
		var a = $(this).attr("href");
		$("body").addClass("page-leave"), $(".wrap-thelogo").show(0), $(".wrap-thelogo > img").addClass("itsload"), $(".wrap-close").hide(), $(".wrap-claymenumobile").removeClass("showmenu"), $(".wrap-claymenumobile").addClass("closemenu"), $(".menu-mobile-overlay").fadeOut(), $(".menu-bar").show(), setTimeout(function () {
			$(".wrap-thelogo").hide(0), $(".wrap-thelogo > img").removeClass("itsload"), $("body").removeClass("page-leave"), $("section[id^='clay-']").hide(0), $("section[id='clay-" + a.split("#")[1] + "']").show(0), window.scrollTo(0, 0)
		}, 1500)
	}), $("body").on("click", ".menu-bar", function (e) {
		$(".menu-bar").hide(), $(".wrap-claymenumobile").show(0), $(".wrap-claymenumobile").removeClass("closemenu"), $(".wrap-claymenumobile").addClass("showmenu"), $(".menu-mobile-overlay").fadeIn(), $(".wrap-close").show(), e.preventDefault()
	}), $("body").on("click", ".wrap-close", function (e) {
		$(".wrap-close").hide(), $(".wrap-claymenumobile").removeClass("showmenu"), $(".wrap-claymenumobile").addClass("closemenu"), $(".menu-mobile-overlay").fadeOut(), $(".menu-bar").show()
	}), e.on("scroll", function () {
		e.scrollTop() > 300 ? t.addClass("transparant") : t.removeClass("transparant")
	}), e.load(function () {
		$(".wrap-thelogo").show(0), $(".wrap-thelogo > img").addClass("itsload"), setTimeout(function () {
			$(".clay-preloader").addClass("is-hidden"), window.location.hash ? ($("section[id^='clay-']").hide(0), $("section[id='clay-" + u[1] + "']").show(0), $(".wrap-thelogo  >img").removeClass("itsload"), $(".wrap-thelogo").hide(0)) : ($(".wrap-thelogo > img").removeClass("itsload"), $(".wrap-thelogo").hide(0), $("section[id^='clay-']").hide(0), $("section[id^='clay-herosection']").show(0)), window.scrollTo(0, 0)
		}, 1500)
	})
});