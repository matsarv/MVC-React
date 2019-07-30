using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLibrary.Model
{
    public interface ICarService
    {
        Task<List<CarModel>> GetCars();
        Task<bool> SaveCar(CarModel car);
        Task<bool> DeleteCar(int carId);
    }
}
