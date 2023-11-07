﻿using Microsoft.EntityFrameworkCore;
using WebSlon.Data.Entities;

namespace WebSlon.Data
{
    public class AppEFContext : DbContext
    {
        public AppEFContext(DbContextOptions<AppEFContext> options) 
            : base(options)
        {
            
        }

        public DbSet<CategoryEntity> Categories { get; set; }
    }
}
