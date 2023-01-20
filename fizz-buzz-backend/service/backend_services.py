submissionsMap = {}

class FizzBuzzService():
    def fizz_buzz(app_numb):
        if app_numb not in submissionsMap:
            submissionsMap[app_numb] = 1
        else:
            submissionsMap[app_numb] += 1
        
        if app_numb % 15 == 0:
            return "FizzBuzz"
        elif app_numb % 3 == 0:
            return "Fizz"
        elif app_numb % 5 == 0:
            return "Buzz"
        else:
            return app_numb

    def get_top_three_submissions():
        return sorted(submissionsMap.items(), key=lambda x: x[1], reverse=True)[0:3]

