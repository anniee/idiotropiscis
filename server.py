from flask import Flask, request, render_template

app = Flask(__name__)

@app.route('/game')
def game():
	return render_template('game3.html')

if __name__ == "__main__":
	app.run(debug=True)