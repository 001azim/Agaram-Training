age=int(input('input your age here '))
t1=0
t2=10
t3=12
t4=15

if age<=3:
    print(f'ticket rate is {t1}$')
elif age>3 and age<=12:
     print( f'ticket rate is {t2}$')
elif age>=65:
     print(f'ticket rate is {t3}$')
else:
     print(f'ticket rate is {t4}$')