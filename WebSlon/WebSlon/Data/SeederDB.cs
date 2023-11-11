﻿using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using WebSlon.Data.Entities;
using WebSlon.Helpers;

namespace WebSlon.Data
{
    public static class SeederDB
    {
        public static async Task SeedData(this IApplicationBuilder app)
        {
            using (var scope = app.ApplicationServices
                .GetRequiredService<IServiceScopeFactory>().CreateScope())
            {
                var context = scope.ServiceProvider.GetRequiredService<AppEFContext>();
                context.Database.Migrate();

                if (!context.Categories.Any())
                {
                    //string url = ;
                    var cat = new CategoryEntity
                    {
                        Name = "Одяг",
                        Image = await GetUrlImage("https://content1.rozetka.com.ua/goods/images/big_tile/376661586.jpg"),
                        Description = "Дуже гарний одяг"
                    };
                    context.Categories.Add(cat);
                    context.SaveChanges();

                    var cat2 = new CategoryEntity
                    {
                        Name = "Кепка",
                        Image = await GetUrlImage("https://content1.rozetka.com.ua/goods/images/big/353829638.jpg"),
                        Description = "Дуже гарна"
                    };
                    context.Categories.Add(cat2);
                    context.SaveChanges();
                }
            }
        }

        private static async Task<string> GetUrlImage(string url)
        {
            string imageName = string.Empty;
            using (HttpClient client = new HttpClient())
            {
                try
                {
                    byte[] bytes = client.GetByteArrayAsync(url).Result;
                    if (bytes != null)
                    {
                        imageName = await ImageWorker.SaveImageAsync(bytes);
                    }


                }
                catch (Exception ex)
                {
                    Console.WriteLine("Error read image {0}", ex.Message);
                }
            }
            return imageName;
        }
    }
}
