﻿using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebSlon.Data;
using WebSlon.Data.Entities;
using WebSlon.Models.Category;

namespace WebSlon.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriesController : ControllerBase
    {
        private readonly AppEFContext _appEFContext;
        private readonly IMapper _mapper;

        public CategoriesController(AppEFContext context, IMapper mapper)
        {
            _appEFContext = context;
            _mapper = mapper;
        }

        [HttpGet("list")]
        public async Task<IActionResult> Index()
        {
            var model = await _appEFContext.Categories
                .Where(x=>x.IsDeleted==false)
                .Select(x=> _mapper.Map<CategoryItemViewModel>(x))
                .ToListAsync();

            return Ok(model);
        }

        [HttpPost("create")]
        public async Task<IActionResult> Create([FromBody] CategoryCreateViewModel model)
        {
            var cat = _mapper.Map<CategoryEntity>(model);
            await _appEFContext.Categories.AddAsync(cat);
            await _appEFContext.SaveChangesAsync();
            return Ok(_mapper.Map<CategoryItemViewModel>(cat));
        }
    }
}
