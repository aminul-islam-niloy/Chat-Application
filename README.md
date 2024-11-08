## Chat Application

A real-time chat application built using ASP.NET Core Web API 7, Angular 18, SignalR, and Angular Material UI. Users can join chat rooms by entering their name and a room name, then send messages and leave the chat room.

## Features

- **Join Chat**: Users can join a chat room by providing a name and a room name.
- **Real-time Messaging**: Instant messaging within a chat room using SignalR.
- **Leave Chat**: Users can leave the chat at any time.

## Prerequisites

Make sure you have the following installed:

- [.NET SDK 7](https://dotnet.microsoft.com/download/dotnet/7.0)
- [Node.js](https://nodejs.org/) (recommended v20+)
- [Angular CLI](https://angular.io/cli) (to run Angular 18)

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/aminul-islam-niloy/Chat-Application.git

```

```
cd ChatApplication
```

### 2. Install Backend Packages

In the ASP.NET Core Web API project, make sure the following packages are installed:

```xml
Microsoft.AspNet.SignalR" Version="2.4.3"
Microsoft.AspNetCore.OpenApi" Version="7.0.20"

```

### 3. Install Frontend Packages

Move to the Angular frontend directory and install dependencies:

```bash
ng new chatappUI
cd chatappUI
npm install @microsoft/signalr
npm install ng-angular-popup
npm install bootstrap
npm install @material-ui
```

create components and services like ng g c chat

add Cors policy like:

```
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

```

```
app.UseCors();
app.UseRouting();
```

don't miss to add Routing endpoint:

```
app.UseEndpoints(endpoint =>
{
    endpoint.MapHub<ChatHub>("/chat");
});
```

### 4. Run the Application

- **Backend**: In the API project directory, run:
  ```bash
  dotnet run
  ```
- **Frontend**: In the Angular project directory, run:
  ```bash
  ng serve
  ```

Navigate to `http://localhost:4200` in your browser to access the application.

## Screenshots

![Screenshot Description](./Chat%20Application/ChatAppUI/public/chat%20hub%20join.png)

![Screenshot Description](./Chat%20Application/ChatAppUI/public/meet%20room.png)

## Usage

1. **Joining a Chat Room**: Enter your name and room name to join a chat.
2. **Sending Messages**: Type and send messages in real time.
3. **Leaving the Chat**: Click the "Leave" button to exit the chat.

## Technologies Used

- **ASP.NET Core Web API 7**
- **SignalR**: for real-time communication
- **Angular 18**: as the frontend framework
- **Angular Material UI**: for UI components
- **Bootstrap**: for responsive styling

## License

This project is licensed under the MIT License.
