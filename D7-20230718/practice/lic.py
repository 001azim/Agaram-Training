name=input('input your name here ')
age=int(input('input your age here '))
gender=input('input your gender here ')

if age>60 and gender=='male':
    print(f'hi Mr.{name} you are a senior citizen')
if age>60 and gender == 'female':
    print(f'hi Miss.{name} you are a senior citizen')

if age<18 and gender == 'male':
        print(f'hi Mr.{name} you are a teenager')
if age<18 and gender == 'female':
        print(f'hi Miss {name} you are a teenager')

if age>18 and age<60 and gender== 'male':
         print(f'hi Mr.{name} you are an adult')
if age > 18 and age<60 and gender=='female':
        print(f'hi Miss {name} you are an adult')
