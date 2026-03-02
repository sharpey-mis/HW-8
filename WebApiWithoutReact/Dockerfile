FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /src

COPY WebApiWithoutReact/WebApiWithoutReact.csproj WebApiWithoutReact/
RUN dotnet restore WebApiWithoutReact/WebApiWithoutReact.csproj

COPY WebApiWithoutReact/ WebApiWithoutReact/
RUN dotnet publish WebApiWithoutReact/WebApiWithoutReact.csproj -c Release -o /app/publish /p:UseAppHost=false

FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS runtime
WORKDIR /app
ENV ASPNETCORE_URLS=http://+:8080
EXPOSE 8080

COPY --from=build /app/publish .
ENTRYPOINT ["dotnet", "WebApiWithoutReact.dll"]
