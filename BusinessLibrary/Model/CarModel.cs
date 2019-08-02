using System;
using System.Collections.Generic;
using System.Text;

namespace BusinessLibrary.Model
{
    public class CarModel
    {
        public int CarId { get; set; }
        public string FullModelName { get; set; }
        public string Brand { get; set; }
        public string ProductionYear { get; set; }
        public string Color { get; set; }
        public string Fuel { get; set; }
        public string GearBox { get; set; }
    }
}
