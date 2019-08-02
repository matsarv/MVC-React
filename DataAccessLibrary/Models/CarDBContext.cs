using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace DataAccessLibrary.Models
{
    public partial class CarDBContext : DbContext
    {
        //https://docs.microsoft.com/en-us/ef/core/get-started/aspnetcore/existing-db
        public CarDBContext()
        {
        }

        public CarDBContext(DbContextOptions<CarDBContext> options)
            : base(options)
        {
        }

        // Add
        public virtual DbSet<Car> Cars { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Server=(localdb)\\mssqllocaldb;Database=CarDB;Trusted_Connection=True;");
                //optionsBuilder.UseSqlServer("Server=.\\SqlExpress;Database=ContactDB;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("ProductVersion", "2.2.2-servicing-10034");

            modelBuilder.Entity<Car>(entity =>
            {
                entity.HasKey(e => e.CarId)
                    .HasName("PK_Contact");

                entity.Property(e => e.FullModelName).HasMaxLength(50);

                entity.Property(e => e.Brand).HasMaxLength(50);

                entity.Property(e => e.ProductionYear).HasMaxLength(50);

                entity.Property(e => e.Color).HasMaxLength(50);

                entity.Property(e => e.Fuel).HasMaxLength(50);

                entity.Property(e => e.GearBox).HasMaxLength(50);
            });

        }
    }
}
