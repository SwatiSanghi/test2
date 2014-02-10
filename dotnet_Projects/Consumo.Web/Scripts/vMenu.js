define(["jquery"], function ($) {
   
    var animation;
    animation = (function () {
        function animation() { }

      animation.prototype.expandMyMenu = function () {
            return $("nav.nbs-sidebar").removeClass("nbs-sidebar-menu-collapsed").addClass("nbs-sidebar-menu-expanded");
        };

        animation.prototype.changemycode = function () {
            return $("#page-wrapper").removeClass("dynamic-content").addClass("dynamic-content-collapse");
        };
        animation.prototype.rechangemycode = function () {
            return $("#page-wrapper").addClass("dynamic-content").removeClass("dynamic-content-collapse");
        };

        animation.prototype.collapseMyMenu = function () {
            return $("nav.nbs-sidebar").removeClass("nbs-sidebar-menu-expanded").addClass("nbs-sidebar-menu-collapsed");
        };

        animation.prototype.showMenuTexts = function () {
            return $("nav.nbs-sidebar ul a span.expanded-element").show();
        };

        animation.prototype.hideMenuTexts = function () {
            return $("nav.nbs-sidebar ul a span.expanded-element").hide();
        };

        animation.prototype.inhit = function () {
            return (function (animation_instance) {
                return $("#justify-icon").click(function (e) {
                    if ($(this).parent("nav.nbs-sidebar").hasClass("nbs-sidebar-menu-collapsed")) {
                        animation_instance.changemycode();
                        animation_instance.expandMyMenu();
                        animation_instance.showMenuTexts();
                     
                       
                    } else if ($(this).parent("nav.nbs-sidebar").hasClass("nbs-sidebar-menu-expanded")) {
                        animation_instance.rechangemycode();
                       animation_instance.collapseMyMenu();
                        animation_instance.hideMenuTexts();
                     
                    }
                    return false;
                });
            })(this);
        };

        return animation;

    })();
    return { animation: (new animation) }
}
)

