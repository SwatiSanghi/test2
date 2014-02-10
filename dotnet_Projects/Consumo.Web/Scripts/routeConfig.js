define(["jquery", "kendo", "templateLoader"], function ($, kendo, templateLoader) {
    var router = new kendo.Router();
    var views = {};
    var setRoute = function () {        
        var addRoute = function (route, name, template, layoutName) {

            router.route(route, function () {

                if (views[name] == null) {
                    templateLoader.ensureLoaded(template);
                    views[name] = new kendo.View(template);
                }
                
                if (layoutName == "Login_login_layout") {
                    $("body").addClass("bg1");
                }
                else
                {
                    $("body").removeClass("bg1");
                }
                templateLoader.ensureLoaded(layoutName);
                var layout = new kendo.Layout(layoutName);
                $("#main").html(layout.render());
                layout.showIn("#body", views[name]);

                $.event.trigger({
                    type: "viewLoaded",
                    viewName: name
                });
            });
        };

        addRoute("/", "login", "Login_login", "Login_login_layout");
        addRoute("/dashboard", "dashboard", "Dashboard_dashboard", "Common_layout");
        router.start();
    };

    return { setRoute: setRoute, router: router }
    
})

//define('messenger',
//    ['jquery', 'dataservice'],
//    function ($, dataservice) {
//        var showMessage = function (id) {
//            dataservice.getMessage(id, function (message) {
//                $("#messagebox").html(message);
//            });
//        };

//        return {
//            showMessage: configureRoute
//        };
//    }
//);