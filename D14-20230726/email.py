userDtails = [{
    "name" : "saravana",
    "e_mail" : "saravana@gmail.com",
    "password" : "saravana@123",
},
{
    "name" : "benish",
    "e_mail" : "benish@gmail.com",
    "password" : "benish@123",
},
{
    "name" : "kabeesh",
    "e_mail" : "kabeesh@gmail.com",
    "password" : "kabeesh@123",
},
{
    "name" : "naathan",
    "e_mail" : "naathan@gmail.com",
    "password" : "naathan@123",
}]



def login():
    email= input('enter email')
    password=input('password')

    for i in userDtails:
      if i['e_mail']== email and password== i['password']:
             print('login successfully')
      if  not i['e_mail']== email and  not password== i['password']:
                  print('enter correct email and password')
                  break


new=[]  
def register():
    newname=input('enter new name ')
    newemail=input('enter new email ')
    newpassword=input('enter new password ')
    for i in userDtails:
        if  not i['e_mail']== newname and  not newpassword== i['password'] and not newemail==i['e_mail']:     
            
            new.append({'name': newname, 'e_mail': newemail,
                'password': newpassword})
        print(new)

    else:
        print('user already exist')
    print(userDtails+new)



select=input(['login','register'])
if select== 'login':
    login()
elif select== 'register':
    register()