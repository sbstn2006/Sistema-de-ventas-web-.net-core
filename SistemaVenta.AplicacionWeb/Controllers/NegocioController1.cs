using Microsoft.AspNetCore.Mvc;

namespace SistemaVenta.AplicacionWeb.Controllers
{
    public class NegocioController1 : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
