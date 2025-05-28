
using LibraryCommon;
using LibrarySearchService;

namespace Microsoft.Extensions.DependencyInjection;

public static class ServiceCollectionExtensions
{
    public static IServiceCollection AddSearchService(this IServiceCollection services, Settings appSettings)
    {
        services.AddRepositories(appSettings);

        services.AddScoped<IBookSearchService, BookSearchService>();
        
        return services;
    }
}