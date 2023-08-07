# l=[60,67,78,87,90]

# total=0
# for i in l:
#     total=total+i
# print(total)


mark=[{'sub':[90,89,78,76,70]},{'sub':[45,46,90,98,89]}]

# for i in mark:
#     total=0
#     for j in i['sub']:
#         total=total+j
#     print(total)  

for i in mark:
    total=0
    for j in  i['sub']:
        total+=j
    print(total)