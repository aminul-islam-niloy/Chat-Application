using Chat_Application;
using Chat_Application.Hub;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddSignalR();




// Register your RoomConnection as a singleton
builder.Services.AddSingleton<IDictionary<string, RoomConnection>>(opt =>
    new Dictionary<string, RoomConnection>());

builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(builder =>
    {
        builder.WithOrigins("http://localhost:4200")
            .AllowAnyHeader()
            .AllowAnyMethod()
            .AllowCredentials();
    });
});


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseCors();
app.UseRouting();
app.UseEndpoints(endpoint =>
{
    endpoint.MapHub<ChatHub>("/chat");
});

app.MapControllers();

app.Run();