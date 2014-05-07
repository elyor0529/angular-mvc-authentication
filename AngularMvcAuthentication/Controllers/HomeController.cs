using System.Web.Mvc;

namespace AngularMvcAuthentication.Controllers
{
    [Authorize]
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
    }
}