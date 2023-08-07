a=int(input('input year '))
if (a%400==0 and a%100==0) or( a%4==0 and not a%100==0):
    print('it a leap year')
else:
    print('not a leap year')
