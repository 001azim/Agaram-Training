# number=[1,2,3,4,5,6,7,8,9,10]
# for i in number:
#     print(i, end=' ')
# list=[1,2.0,'hai','&', 5,6,'&',8,9]
# for v in list:
#       b=(type(v))
#       if (b==int  or b==float):
#         print(v)
list=[1,2.0,'hai','&', 5,6,'&',8,9]
total=0
for i in list:
    is_type=type(i)
    if is_type==float:
        total+=1 
print(f"Total integer is:{total}")
