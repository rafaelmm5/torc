using LibraryCommon;
using LibraryRepository;
using Microsoft.EntityFrameworkCore;

namespace Microsoft.Extensions.DependencyInjection;

public static class ServiceCollectionExtensions
{
    public static IServiceCollection AddDatabase(this IServiceCollection services, Settings appSettings)
    {
        services.AddDbContext<LibraryContext>(opt => opt.UseSqlServer(appSettings.ConnectionStrings.DefaultConnection));

        return services;
    }
}