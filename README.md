# simple-chat
A simple chat app using Angular 4 and socket.io

## Deploying the app

### Without Docker
1. Build the frontend.
   ```bash
   $ npm run build
   ```
2. Launch the server. The environment variable PORT defines the port the server listens on (default is 80).
   ```bash
   $ npm start
   Will run on port 80

   $ PORT=1234 npm start
   Will run on port 1234
   ```

### With Docker
1. Build the frontend.
   ```bash
   $ npm run build
   ```
2. Build the container.
   ```bash
   $ docker build -t simple-chat .
   ```
3. Run the container. You can define the port of the app with the `-p` argument.
   ```bash
   $ docker run -d -p 80:80 simple-chat
   Will run on port 80

   $ docker run -d -p 1234:80 simple-chat
   Will run on port 1234
   ```

### For development

Please see our [contribution guide](CONTRIBUTING.md#testing-your-changes) for instructions on how to run the app for development.

## Contributing

Please feel free to contribute to this project! Just follow our [contribution guide](CONTRIBUTING.md).

## License

This project is licensed under the terms of the [MIT License](LICENSE)
