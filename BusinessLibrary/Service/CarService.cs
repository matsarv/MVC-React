using BusinessLibrary.Model;
using DataAccessLibrary.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLibrary.Service
{
    public class CarService : ICarService
    {
        public async Task<List<CarModel>> GetCars()
        {
            using (CarDBContext db = new CarDBContext())
            {
                return await (from a in db.Cars.AsNoTracking()
                              select new CarModel
                              {
                                  CarId = a.CarId,
                                  FullModelName = a.FullModelName,
                                  Brand = a.Brand,
                                  ProductionYear = a.ProductionYear,
                                  Color = a.Color,
                                  Fuel = a.Fuel,
                                  GearBox = a.GearBox
                              }).ToListAsync();
            }
        }

        public async Task<bool> SaveCar(CarModel carModel)
        {
            using (CarDBContext db = new CarDBContext())
            {
                // Note! Removed DataAccessLibrary.EntityModels.
                Car car = db.Cars.Where
                         (x => x.CarId == carModel.CarId).FirstOrDefault();
                if (car == null)
                {
                    car = new Car()
                    {
                        FullModelName = carModel.FullModelName,
                        Brand = carModel.Brand,
                        ProductionYear = carModel.ProductionYear,
                        Color = carModel.Color,
                        Fuel = carModel.Fuel,
                        GearBox = carModel.GearBox
                    };
                    db.Cars.Add(car);

                }
                else
                {
                    car.FullModelName = carModel.FullModelName;
                    car.Brand = carModel.Brand;
                    car.ProductionYear = carModel.ProductionYear;
                    car.Color = carModel.Color;
                    car.Fuel = carModel.Fuel;
                    car.GearBox = carModel.GearBox;
                }

                return await db.SaveChangesAsync() >= 1;
            }
        }

        public async Task<bool> DeleteCar(int carId)
        {
            using (CarDBContext db = new CarDBContext())
            {
                // Note! Removed DataAccessLibrary.EntityModels.
                Car car =
                     db.Cars.Where(x => x.CarId == carId).FirstOrDefault();
                if (car != null)
                {
                    db.Cars.Remove(car);
                }
                return await db.SaveChangesAsync() >= 1;
            }
        }
    }
}
