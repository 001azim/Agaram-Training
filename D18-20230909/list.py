num = [2, 7, 8, 10, 66, 3, 7]
min=num[0]
max=num[0]
for i in num:
    if i<min:
        min=i
    elif i>max:
        max=i

output=max-min
print(output,'(',max,'-',min,')')
# print(max(num)-min(num))


