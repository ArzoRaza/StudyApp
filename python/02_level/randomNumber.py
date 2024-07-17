import random; 
jackport = random.randint(1, 100)

guess = int(input('Enter you Guessing Number : '))
counter = 1


while guess != jackport: 
    if guess < jackport:
        print("Guess heigher")
    else:
        guess > jackport
        print("Guess Lower")

    guess = int(input('Enter you other guess number'))
    counter += 1

else: 
    print("Correct guess")
    print("Number of attempt", counter)
    



