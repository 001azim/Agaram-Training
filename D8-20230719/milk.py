user_food={'milk':1.02,'popcorn':2.5, 'bread':2.5}
food1=input('enter product here ')
food2=input('enter product here ')
# if food1=='milk' and food2=='popcorn' or food2=='milk' and food1=='popcorn' :
#     print( 'you are buying milk and popcorn and total amount is',user_food['milk']+user_food['popcorn'])
# elif food1=='popcorn' and food2=='bread' or food2=='popcorn' and food1=='bread':
#     print('you are buying bread and popcorn and total amount is',user_food['bread']+user_food['popcorn'])
# elif food1=='milk' and food2=='bread' or food2=='milk' and food1=='bread':
#     print('you are buying bread and milk and total amount is',user_food['milk']+user_food['popcorn'])
# else:
#     print('item not available')
# for i in user_food:
if  food1 in user_food and food2 in user_food:
    print('you are buying', food1,'and' ,food2 ,'for rs',user_food[food1]+user_food[food2])
else:
    print('item not available')