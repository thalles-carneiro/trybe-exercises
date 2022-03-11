from http.server import BaseHTTPRequestHandler, HTTPServer


# Source: https://flaviocopes.com/python-http-server/
class Handler(BaseHTTPRequestHandler):
    def do_GET(self):
        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.end_headers()

        message = (
            "Olá, você acabou de realizar "
            "uma requisiçao GET no nosso servidor :)"
        )
        self.wfile.write(bytes(message, "utf8"))

    def do_POST(self):
        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.end_headers()

        message = "Hello, World! Here is a POST response"
        self.wfile.write(bytes(message, "utf8"))

        content_len = int(self.headers.get("Content-Length"))
        post_body = self.rfile.read(content_len).decode("UTF-8")
        print(post_body)


with HTTPServer(('localhost', 8080), Handler) as server:
    print("Olá, você acabou de se conectar!")
    server.serve_forever()

"""
1. curl localhost:8080

2. curl -X POST -d '{ "name": "Thalles" }' localhost:8080

3. curl -H 'Content-Type: application/json' localhost:8080
"""
