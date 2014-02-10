
require(["jquery", "kendo", "templateLoader"], function ($, kendo, templateLoader) {
    var views = {};   
    var router = new kendo.Router();

    $(function () { initializePage(); });

    function initializePage() {        
        templateLoader.ensureLoaded("Login_login_layout");
        layout = new kendo.Layout("Login_login_layout");        
        $("#main").html(layout.render());
        configureRoute();        
        $("#btnLogin").click(signIn);       
    }

    function signIn() {
        router.navigate("/dashboard");       
    }

    function configureRoute() {
       
        var addRoute = function (route, name, template,layoutName) {
            router.route(route, function () {
                        
                if (views[name] == null) {   
                    templateLoader.ensureLoaded(template);
                    views[name] = new kendo.View(template);
                }
                $("body").removeClass("bg1");
                if (layoutName == "Login_login_layout")
                {
                    $("body").addClass("bg1");
                }               
                templateLoader.ensureLoaded(layoutName);
               var layout = new kendo.Layout(layoutName);                
                $("#main").html(layout.render());
                layout.showIn("#body", views[name]); 
            });
        };

        addRoute("/", "login", "Login_login","Login_login_layout");
        addRoute("/dashboard", "dashboard", "Dashboard_dashboard","Common_layout");
        router.start();        
    }
}
)



