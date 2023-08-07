# list1=[10,30,50,70,90,110]
# list2=[15,35,55,62,95,100]

# for i in range(len(list1)) and range(len(list2)):
#     if i[0]>i[0]:
#         print()

    

   
l=[1,2,3,10,5,0]
max=l[0]
min=l[0]
for i in l:
    if i> max:
        max=i
    elif i<min:
      min=i
print(max)
print(min)



def min(list):
    min=list[0]
    for i in list:
      if i<min:
    
         min=i
    return min
m=[33,45,44,22,22]
print(min(m))

min(m)