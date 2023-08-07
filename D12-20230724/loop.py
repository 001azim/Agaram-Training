# x=[1,2,3,45,67]
# total=0
# for i in x:
#     total+=i
# print(total)

l=[{'name':'aj','mark':[54,56,56,44,67]},
   {'name':'pm','mark':[65,76,78,98,99]},
   {'name':'jk','mark':[90,90,98,86,77]} ]

for i in l:
    total=0
    name=i['name']
    for x in i['mark']:
        total=total+x
    print(total)
    if total>400:
        print(name,'you are qualified')
    else:
        print(name,' you are not qualified')







        