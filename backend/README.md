# Backend, how to start diagramm:

```mermaid
flowchart TD
    A[Load Config (.env / config module)] --> B[Initialize Database Connection]
    B --> C[Create Fastify Instance (server-application)]
    C --> D[Register Middleware / Logger / HTTP Plugins]
    D --> E[Register Controllers (Routes)]
    E --> F[Attach Services (Email, Token, Encryptor)]
    F --> G[Start Server (startServer)]
```

## 🔍 Short explanation:

- Load Config – load environment variables and configuration files.

- Initialize Database – connect to database before starting the server.

- Create Fastify Instance – create and configure Fastify app.

- Register Middleware/Logger/HTTP – add middlewares, logging and plugins.

- Register Controllers – attach routes and handlers.

- Attach Services – optional services like email sending, encryption, JWT.

- Start Server – run the Fastify app.
