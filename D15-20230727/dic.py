items_list = [
    {'name': 'Apple', 'category': 'Fruits'},
    {'name': 'Carrot', 'category': 'Vegetables'},
    {'name': 'Banana', 'category': 'Fruits'},
    {'name': 'Broccoli', 'category': 'Vegetables'},
]




def vegetables(list):
    m=[]
    n=[]
    d={}

    for i in list:
     if i['category']=='Vegetables':
       m.append(i['name'])
     elif i['category']=='Fruits':
        n.append(i['name'])    
    d.update({'fruits': n, 'vegetables': m})
    print(d)
vegetables(items_list)



# vegetables(items_list)



# l=[1,2,3,4]
# n=l[0]
# for i in l:
#     n=n*i
#     print(n)   




l==
def number():
   for i in range(1,11):
      if i==10/2:
         break
      print(i)
number()