amount=int(input('Enter the amount = '))
if amount >500 and amount<1000:
    print('you have owned the silver token')
elif amount>=1000 and amount<=5000:
    print('you have owned a golden token')
elif amount>5000:
    print('you have owned a platinum token')
elif amount<=500:
    print('no token available')
else:
    print('no token below 500')