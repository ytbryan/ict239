# How to run this blog

0. Change your directory into this project's directory. 

1. At the project directory, run `python init_db.py`. This will setup the database.

2. At your terminal, run `export FLASK_APP=hello`
Explain: this is the environment variable called FLASK_APP. Its value is `hello`. This will run the `hello.py` inside your project. Can you find it?

3. At your terminal, run `export FLASK_ENV=development`
Explain: this is the environment variable called FLASK_ENV. Its value is `development`


4. Last but not least, run `flask run`

You will see

```
 * Serving Flask app "hello" (lazy loading)
 * Environment: development
 * Debug mode: on
 * Running on http://127.0.0.1:5000/ (Press CTRL+C to quit)
 * Restarting with stat
 * Debugger is active!
 * Debugger PIN: 297-838-221
```

You will get a hello world! 

===


To get the actual blog, do every steps the same but change step 2 to `export FLASK_APP=app` to run the `app.py`. Can you find it? 