from flask import Flask, render_template, request, url_for, flash, redirect
import cgi

app = Flask(__name__)

@app.route('/', methods=('GET', 'POST'))
def index():
    return render_template('index.html')

@app.route('/calculator', methods=('GET', 'POST'))
def calculator():
    return render_template('calculator.html')

@app.route('/randomnum', methods=('GET', 'POST'))
def todo():
    return render_template('randomnum.html')

@app.route('/currency', methods=('GET', 'POST'))
def currency():
   return render_template('currency.html')

@app.route('/color', methods=('GET', 'POST'))
def color():
    return render_template('color.html')

#@app.route('/turn', methods=('GET', 'POST'))
#def turn():
#    return render_template('turn.html')

@app.route('/code', methods=('GET', 'POST'))
def code():
    return render_template('code.html')

@app.route('/basic', methods=('GET', 'POST'))
def basic():
    return render_template('basic.html')

app.run(host='0.0.0.0', port=81)