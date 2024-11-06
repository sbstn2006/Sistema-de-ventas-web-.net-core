using Microsoft.AspNetCore.Mvc;

namespace SistemaVenta.AplicacionWeb.Controllers
{
    public class DashBoardController1 : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
