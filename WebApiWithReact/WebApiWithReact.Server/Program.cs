var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

builder.Services.AddSpaStaticFiles(configuration =>
{
    configuration.RootPath = "ClientApp/build";
});

builder.Services.AddOpenApi();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

app.UseStaticFiles();

if (!app.Environment.IsDevelopment())
{
    app.UseSpaStaticFiles();
}

app.UseRouting();
app.UseAuthorization();

app.MapControllers();

app.UseSpa(spa =>
{
    spa.Options.SourcePath = "webapiwithreact.client";

    if (app.Environment.IsDevelopment())
    {
        spa.UseProxyToSpaDevelopmentServer("http://localhost:3000");
    }
});

app.Run();