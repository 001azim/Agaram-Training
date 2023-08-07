# list=[1,2,3,4,5,6,7,100]
# n=0
# for i in list:
#     if i%2==0:
#         n+=1
# print(n)

l=[1,3,4,'sd','aa', 9.85,6,8]
total=0
for i in l:
    if i==type(int(i)):
        total+=1    
print(total)
