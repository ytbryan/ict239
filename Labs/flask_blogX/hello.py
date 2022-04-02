from flask import Flask, jsonify, request, escape

app = Flask(__name__)


@app.route('/')
def hello():
    return 'Hello, World!'

@app.route('/test')
def test():
    print("hello")
    # process the data received
    print(request.args.get('name'))
    # save to database?
    dictionary = {"name": [1,2,3,4]}
    # dictionary = {"name": "ytbryan"}
    # pass it back as a json
    return jsonify(dictionary)
    # return 'Hello, Test!'

@app.route('/greet')
def greet():
    name = request.args['name']
    return '''
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
        <h1>Hi {}</h1>
    </body>
    </html>'''.format(escape(name))
