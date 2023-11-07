using AutoMapper;
using WebSlon.Data.Entities;
using WebSlon.Models.Category;

namespace WebSlon.Mapper
{
    public class AppMapProfile : Profile
    {
        public AppMapProfile()
        {
            CreateMap<CategoryEntity, CategoryItemViewModel>();
            CreateMap<CategoryCreateViewModel, CategoryEntity>();
        }
    }
}
