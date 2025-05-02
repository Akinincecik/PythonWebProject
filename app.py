from flask import Flask, send_from_directory

app = Flask(__name__, static_folder=None)  # static_folder'ı devre dışı bırakıyoruz

@app.route('/')
def index():
    return send_from_directory('index', 'index.html')

@app.route('/login')
def login():
    return send_from_directory('login', 'login.html')

@app.route('/about')
def about():
    return send_from_directory('about', 'about.html')

@app.route('/contact')
def contact():
    return send_from_directory('contact', 'contact.html')

# CSS, JS gibi dosyaları da doğrudan sunabilmek için:
@app.route('/<folder>/<filename>')
def static_files(folder, filename):
    return send_from_directory(folder, filename)

if __name__ == '__main__':
    app.run(debug=True)
