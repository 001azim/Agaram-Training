l=[{"name":"gokul",   
               "places":"arumanallor", 
                  "hobbies":["chess" ,'cricket','swimming']   },  
                         {"name":"siva",  
                            "places":"mondaymarket",   
                              "hobbies":["chess" ,'cricket','swimming']    } ]

l.append({'name': 'xyz', 'place':'x', "hobbies":["chess" ,'cricket','swimming'] })
print(l)


for i in l:
    i.update({'karka': 'bootcamp'})
    print(i)

for i in l:
    # print(type(i)['hobbies'])
    x=(i['hobbies'])
    x.append('football')
    print(x)



print(l)
     


