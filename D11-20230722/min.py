l=[200,23,34,3268,87,23]
# print(min(l))
# print(max(l))
# print(len(l))
# print(l.count(23))
min=l[0]
max=l[0]
for i in l:
    if i < min:
        min=i
    elif i>max:
            max=i
print(min)
print(max)