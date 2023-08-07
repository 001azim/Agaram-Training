list=['groupA','groupB','groupC']
select=input(' enter ' )
for i in list:
    if i==select:
        print(True)
        break
    else:
        print(False)
        break
if select in list:
    print(True)
else:
    print(False)


