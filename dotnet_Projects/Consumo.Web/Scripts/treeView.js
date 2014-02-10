define(["kendo"], function (kendo) {
    
    var code = '';
    var serviceRoot = "http://pag-zilla.pag.com.au/DemoAPI";
    var homogeneous = new kendo.data.HierarchicalDataSource({
        transport: {
            read: {
                url: function (options) {                   
                    var url = kendo.format(serviceRoot + "/accounts/hierarchykendojs.json", options.Id);
                    url += (code == '') ? '' : kendo.format("?Code={0}", code);
                    return url;
                },
                dataType: "json"
            }
        },
        schema: {
            model: {
                id: "Id",
                hasChildren: "HasChildren"
            }
        }
    });
    return { data: homogeneous };    
} )