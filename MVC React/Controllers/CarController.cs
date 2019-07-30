using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BusinessLibrary.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MVC_React.Controllers
{

    [Route("api/[controller]")]
    public class CarController : Controller
    {
        private readonly ICarService _carService;
        public CarController(ICarService carService)
        {
            _carService = carService;
        }

        [HttpGet]
        [Route("Cars")]
        public async Task<IActionResult> Cars()
        {
            return Ok(await _carService.GetCars());
        }

        [HttpPost]
        [Route("SaveCar")]
        public async Task<IActionResult> SaveCar([FromBody] CarModel model)
        {
            return Ok(await _carService.SaveCar(model));
        }

        [HttpDelete]
        [Route("DeleteCar/{carId}")]
        public async Task<IActionResult> DeleteCar(int carId)
        {
            return Ok(await _carService.DeleteCar(carId));
        }
    }
}