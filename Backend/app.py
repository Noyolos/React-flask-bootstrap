# backend/app.py
from flask import Flask, request
import html

app = Flask(__name__)


def sanitize(s: str) -> str:
    return html.escape((s or "").strip())


@app.route("/login", methods=["POST"])
def login():
    raw_email = request.form.get("email")
    raw_password = request.form.get("password")

    email = sanitize(raw_email)
    password = sanitize(raw_password)

    errors = []
    if not email:
        errors.append("Email is required.")
    elif "@" not in email:
        errors.append("Email format is invalid.")

    if not password:
        errors.append("Password is required.")
    elif len(password) < 6:
        errors.append("Password must be at least 6 characters.")

    if errors:
        error_list = "".join(f"<li>{e}</li>" for e in errors)
        return f"""<!doctype html>
<html lang="en">
  <head><meta charset="utf-8"><title>Lab 1 - Login Error</title></head>
  <body style="font-family: system-ui; padding: 2rem; max-width: 700px; margin: 0 auto;">
    <h1>Login Failed (Server-side validation)</h1>
    <p>There were problems with your input:</p>
    <ul>{error_list}</ul>
    <hr />
    <p><a href="http://localhost:5173/login">Back to Login Form</a></p>
  </body>
</html>"""

    return f"""<!doctype html>
<html lang="en">
  <head><meta charset="utf-8"><title>Lab 1 - Login Success</title></head>
  <body style="font-family: system-ui; padding: 2rem; max-width: 700px; margin: 0 auto;">
    <h1>Login Successful (Flask server)</h1>
    <p><strong>Email you submitted:</strong> {email}</p>
    <p><strong>Password length:</strong> {len(password)} characters</p>
    <hr />
    <p><a href="http://localhost:5173/login">Back to Login Form</a></p>
  </body>
</html>"""

@app.route("/lab1/test-get", methods=["GET"])
def test_get():
    name = sanitize(request.args.get("name"))
    return f"""<!doctype html>
<html lang="en">
  <head><meta charset="utf-8"><title>Lab 1 - GET Demo</title></head>
  <body style="font-family: system-ui; padding: 2rem;">
    <h1>GET Demo</h1>
    <p>Your name from query string is: <strong>{name}</strong></p>
    <p>Example URL: <code>http://localhost:5000/lab1/test-get?name=Alice</code></p>
    <p><a href="http://localhost:5173/login">Back to Login Form</a></p>
  </body>
</html>"""



if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)

