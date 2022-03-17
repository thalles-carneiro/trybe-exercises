from socketserver import UDPServer, DatagramRequestHandler


HOST, PORT = "localhost", 8084
SERVER_ADDRESS = HOST, PORT


class EchoHandler(DatagramRequestHandler):
    def handle(self):
        message = bytes("Olá, você se conectou ao servidor\n", "utf-8")
        self.wfile.write(message)
        for line in self.rfile:
            self.wfile.write(line)
            print(line.decode("utf-8").strip())


if __name__ == "__main__":
    with UDPServer(SERVER_ADDRESS, EchoHandler) as server:
        print("Conectado")
        server.serve_forever()


# 8. nc -u localhost 8084

# 9. curl localhost 8084
