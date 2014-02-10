using BundleTransformer.Core.Bundles;
using BundleTransformer.Core.Orderers;
using System.Web;
using System.Web.Optimization;

namespace Poc.UI2
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                "~/Scripts/jquery-{version}.js"));
            
            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                "~/Scripts/bootstrap.js",
                "~/Scripts/respond.js"));

            bundles.Add(new ScriptBundle("~/bundles/scripts").Include("~/Scripts/app.js","~/Scripts/kendo.all.min.js"));
            
          #region LESS

            var nullOrderer = new NullOrderer();

            var css = new CustomStyleBundle("~/bundles/css");
          
#if DEBUG
          css.Include("~/Styles/Default/Site.less","~/Styles/Common/bootstrap/bootstrap.less");
#else
          css.Include("~/Styles/Common/bootstrap/bootstrap.less","~/Styles/Default/Site-Release.less");
#endif

            css.Orderer = nullOrderer;
            bundles.Add(css);

            #endregion
        }
    }
}
