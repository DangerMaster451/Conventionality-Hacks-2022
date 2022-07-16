from flask import Flask, render_template

app = Flask(__name__)

@app.route('/', methods=('GET', 'POST'))
def index():
    return render_template('index.html')

@app.route('/calculator', methods=('GET', 'POST'))
def calculator():
    return render_template('calculator.html')

@app.route('/todo', methods=('GET', 'POST'))
def todo():
    return render_template('todo.html')

@app.route('/currency', methods=('GET', 'POST'))
def currency():
    return render_template('currency.html')

@app.route('/color', methods=('GET', 'POST'))
def color():
    return render_template('color.html')

@app.route('/spell', methods=('GET', 'POST'))
def spell():
    return render_template('spell.html')

@app.route('/downloader', methods=('GET', 'POST'))
def downloader():
    return render_template('downloader.html')

@app.route('/code', methods=('GET', 'POST'))
def code():
    return render_template('code.html')

app.run(host='0.0.0.0', port=81)