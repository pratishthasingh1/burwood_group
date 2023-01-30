from flask import Flask, request
from flask_restful import Resource, Api
from src.services.fizz_buzz_service import FizzBuzzService

class FizzBuzzController(Resource):
   def post(self):
        content = request.json
        result = FizzBuzzService.fizz_buzz(int(content['input']))
        return {"result": result}