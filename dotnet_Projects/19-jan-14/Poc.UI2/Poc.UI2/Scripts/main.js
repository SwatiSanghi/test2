require.config({
    
    paths: {
        jquery: "jquery-1.10.2.min",
        kendo: "kendo.all.min",
        bootstrap: "bootstrap.min",
        templates: "templates",
        templateLoader: "templateLoader"
    },
    shim: {
        kendo: { deps: ["jquery"], exports: "kendo" }       
    }
    
});

require(['app']);
