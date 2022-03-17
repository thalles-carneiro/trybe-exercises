from socketserver import TCPServer, StreamRequestHandler


HOST, PORT = "localhost", 8086
SERVER_ADDRESS = HOST, PORT


class EchoHandler(StreamRequestHandler):
    def handle(self):
        message = bytes("Olá, você se conectou ao servidor\n", "utf-8")
        self.wfile.write(message)
        for line in self.rfile:
            self.wfile.write(line)
            print(line.decode("utf-8").strip())


if __name__ == "__main__":
    with TCPServer(SERVER_ADDRESS, EchoHandler) as server:
        server.serve_forever()
