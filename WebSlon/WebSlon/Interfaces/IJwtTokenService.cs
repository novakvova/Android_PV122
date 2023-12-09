using WebSlon.Data.Entities.Identity;

namespace WebSlon.Interfaces
{
    public interface IJwtTokenService
    {
        Task<string> CreateToken(UserEntity user);
    }
}
