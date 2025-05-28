
using LibraryCommon;

var builder = WebApplication.CreateBuilder(args);

builder.Services.Configure<Settings>(builder.Configuration);

Settings appSettings = new();
builder.Configuration.Bind(appSettings);

// Add services to the container.
builder.Services.AddSearchService(appSettings);

builder.Services.AddControllers();

// Add swagger services
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.

app.UseSwagger();
app.UseSwaggerUI(options =>
{
    options.SwaggerEndpoint("/swagger/v1/swagger.json", "LibraryAPI V1");
    options.RoutePrefix = string.Empty; // optional: serve Swagger UI at root `/`
});

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
