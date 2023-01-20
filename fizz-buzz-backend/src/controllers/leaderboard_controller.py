from flask_restful import Resource
from src.services.fizz_buzz_service import FizzBuzzService

class LeaderboardController(Resource):
   def get(self):
        result = FizzBuzzService.get_top_three_submissions()
        return {"result": result}