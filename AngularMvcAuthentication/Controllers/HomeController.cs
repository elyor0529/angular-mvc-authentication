using System.Collections.Generic;
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

        public JsonResult Cities()
        {
            var res = new List<string>
            {
                "Alicante", "Barcelona", "Berlin", "Madrid", "London", "Hong Kong", "Bogota", "Delhi"
            };

            return Json(res, JsonRequestBehavior.AllowGet);
        }
    }
}