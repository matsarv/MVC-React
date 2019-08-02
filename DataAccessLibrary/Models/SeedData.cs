using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DataAccessLibrary.Models
{
    public static class SeedData
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            using (var context = new CarDBContext(
                serviceProvider.GetRequiredService<
                    DbContextOptions<CarDBContext>>()))
            {
                if (context.Cars.Any())
                {
                    return;   // DB has been seeded
                }
                context.Cars.AddRange(
                    new Car
                    {
                        FullModelName = "SAAB 99",
                        Brand = "SAAB",
                        ProductionYear = "1980",
                        Color = "Grön",
                        Fuel = "Bensin",
                        GearBox = "Manuell"
                    },
                    new Car
                    {
                        FullModelName = "SAAB 900",
                        Brand = "SAAB",
                        ProductionYear = "1980",
                        Color = "Grön",
                        Fuel = "Bensin",
                        GearBox = "Manuell"
                    },
                    new Car
                    {
                        FullModelName = "SAAB 9000i",
                        Brand = "SAAB",
                        ProductionYear = "1985",
                        Color = "Vit",
                        Fuel = "Bensin",
                        GearBox = "Manuell"
                    },
                    new Car
                    {
                        FullModelName = "SAAB 9-3",
                        Brand = "SAAB",
                        ProductionYear = "2005",
                        Color = "Silver",
                        Fuel = "Bensin",
                        GearBox = "Manuell"
                    },
                    new Car
                    {
                        FullModelName = "SAAB 9-5",
                        Brand = "SAAB",
                        ProductionYear = "2005",
                        Color = "Svart",
                        Fuel = "Bensin",
                        GearBox = "Manuell"
                    },
                    new Car
                    {
                        FullModelName = "Volvo 245",
                        Brand = "VOLVO",
                        ProductionYear = "1990",
                        Color = "Röd",
                        Fuel = "Bensin",
                        GearBox = "Manuell"
                    },
                    new Car
                    {
                        FullModelName = "Volvo V40",
                        Brand = "VOLVO",
                        ProductionYear = "1998",
                        Color = "Blå",
                        Fuel = "Bensin",
                        GearBox = "Manuell"
                    },
                    new Car
                    {
                        FullModelName = "Volvo V60",
                        Brand = "VOLVO",
                        ProductionYear = "2005",
                        Color = "Gul",
                        Fuel = "Disel",
                        GearBox = "Manuell"
                    },
                    new Car
                    {
                        FullModelName = "Volvo S90",
                        Brand = "VOLVO",
                        ProductionYear = "2010",
                        Color = "Svart",
                        Fuel = "Hybrid",
                        GearBox = "Manuell"
                    },
                    new Car
                    {
                        FullModelName = "BMV 320",
                        Brand = "BMV",
                        ProductionYear = "1990",
                        Color = "Röd",
                        Fuel = "Bensin",
                        GearBox = "Manuell",
                     },
                    new Car
                    {
                        FullModelName = "BMV 520",
                        Brand = "BMV",
                        ProductionYear = "1998",
                        Color = "Blå",
                        Fuel = "Disel",
                        GearBox = "Manuell"
                    },
                    new Car
                    {
                        FullModelName = "BMV 530",
                        Brand = "BMV",
                        ProductionYear = "2005",
                        Color = "Gul",
                        Fuel = "Bensin",
                        GearBox = "Manuell"
                    },
                    new Car
                    {
                        FullModelName = "BMV X3",
                        Brand = "BMV",
                        ProductionYear = "2010",
                        Color = "Svart",
                        Fuel = "Bensin",
                        GearBox = "Manuell"
                    },
                    new Car
                    {
                        FullModelName = "SAAB 99",
                        Brand = "SAAB",
                        ProductionYear = "1983",
                        Color = "Grön",
                        Fuel = "Disel",
                        GearBox = "Manuell"
                    },
                    new Car
                    {
                        FullModelName = "SAAB 900",
                        Brand = "SAAB",
                        ProductionYear = "1985",
                        Color = "Grön",
                        Fuel = "Bensin",
                        GearBox = "Manuell"
                    },
                    new Car
                    {
                        FullModelName = "SAAB 9000i",
                        Brand = "SAAB",
                        ProductionYear = "1989",
                        Color = "Vit",
                        Fuel = "Bensin",
                        GearBox = "Automat"
                    },
                    new Car
                    {
                        FullModelName = "SAAB 9-3",
                        Brand = "SAAB",
                        ProductionYear = "2007",
                        Color = "Silver",
                        Fuel = "Hybrid",
                        GearBox = "Manuell"
                    },
                    new Car
                    {
                        FullModelName = "SAAB 9-5",
                        Brand = "SAAB",
                        ProductionYear = "2005",
                        Color = "Vit",
                        Fuel = "Bensin",
                        GearBox = "Manuell"
                    },
                    new Car
                    {
                        FullModelName = "Volvo 245",
                        Brand = "VOLVO",
                        ProductionYear = "1990",
                        Color = "Grön",
                        Fuel = "Bensin",
                        GearBox = "Manuell"
                    },
                    new Car
                    {
                        FullModelName = "Volvo V40",
                        Brand = "VOLVO",
                        ProductionYear = "1998",
                        Color = "Svart",
                        Fuel = "Bensin",
                        GearBox = "Automat"
                    },
                    new Car
                    {
                        FullModelName = "Volvo V60",
                        Brand = "VOLVO",
                        ProductionYear = "2006",
                        Color = "Blå",
                        Fuel = "Bensin",
                        GearBox = "Manuell"
                    },
                    new Car
                    {
                        FullModelName = "Volvo S90",
                        Brand = "VOLVO",
                        ProductionYear = "2011",
                        Color = "Svart",
                        Fuel = "Bensin",
                        GearBox = "Manuell"
                    },
                    new Car
                    {
                        FullModelName = "BMV 320",
                        Brand = "BMV",
                        ProductionYear = "1993",
                        Color = "Gul",
                        Fuel = "Bensin",
                        GearBox = "Automat"
                    },
                    new Car
                    {
                        FullModelName = "BMV 520",
                        Brand = "BMV",
                        ProductionYear = "1998",
                        Color = "Vit",
                        Fuel = "Bensin",
                        GearBox = "Manuell"
                    },
                    new Car
                    {
                        FullModelName = "BMV 530",
                        Brand = "BMV",
                        ProductionYear = "2001",
                        Color = "Grön",
                        Fuel = "Bensin",
                        GearBox = "Manuell"
                    },
                    new Car
                    {
                        FullModelName = "BMV X3",
                        Brand = "BMV",
                        ProductionYear = "2001",
                        Color = "Silver",
                        Fuel = "Bensin",
                        GearBox = "Automat"
                    }


                );

                context.SaveChanges();
            }

        }
    }
}

