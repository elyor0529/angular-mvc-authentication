using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(AngularMvcAuthentication.Startup))]
namespace AngularMvcAuthentication
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
