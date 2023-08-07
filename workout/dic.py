email=input('enter email here ' )
password=int(input('enter password here ' ))
x=None
if email=='star.azim776@gmail.com'and password==123456:
    x='you are logged in successfully'
elif email!='star.azim776@gmail.com' and password!=123456:
    x='you are not authenticated'
elif email!='star.azim776@gmail.com':
    x='your email is wrong'
elif password!=123456:
    x='your password is wrong'
print(x)
