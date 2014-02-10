require(["jquery", "routeConfig"], function ($, routeConfig, vMenu) {

    $(function () {
        $(document).on("viewLoaded", function (e) {
            if (e.viewName == 'dashboard') {
                require(["vMenu"], function (vMenu) { vMenu.animation.inhit(); });
                require(["treeView"], function (tv) {
                    $("#accountTreeView").kendoTreeView({ dataTextField: "Name", dataSource: tv.data });
                });
            }
        });
        routeConfig.setRoute();
        $("#btnLogin").click(function () {
            routeConfig.router.navigate("/dashboard");            
        });//btnclick 
    });
}
)