using LibraryCommon;
using LibraryRepository;

namespace Microsoft.Extensions.DependencyInjection;

public static class ServiceCollectionExtensions
{
    public static IServiceCollection AddRepositories(this IServiceCollection services, Settings appSettings)
    {
        services.AddDatabase(appSettings);

        services.AddScoped(typeof(IRepository<>), typeof(Repository<>));
        services.AddScoped<IBookRepository, BookRepository>();

        return services;
    }
}