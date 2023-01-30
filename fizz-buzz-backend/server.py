from flask import Flask, request
from flask_restful import Resource, Api
from flask_cors import CORS
from src.controllers.fizz_buzz_controller import FizzBuzzController
from src.controllers.leaderboard_controller import LeaderboardController

app = Flask(__name__)
api = Api(app)
CORS(app, origins="http://localhost:3000", allow_headers=[
    "Content-Type", "Access-Control-Allow-Credentials"],
    supports_credentials=True)

api.add_resource(FizzBuzzController, '/fizzBuzz')
api.add_resource(LeaderboardController, '/leaderboard')

if __name__ == '__main__':
    app.run(debug=True)