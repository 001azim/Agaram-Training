def login_user():
    email_input = input("Enter your email: ")
    password_input = input("Enter your password: ")
    
    user_found = False
    for user in userdetails:
        if user["e_mail"] == email_input and user["password"] == password_input:
            print(f"Welcome, {user['name']}!")
            user_found = True
            break
            
    if not user_found:
        print("Login failed. Invalid email or password.")

def register_user():
    register_name = input("Enter your name: ")
    register_email = input("Enter your email: ")
    
    while True:
        register_password = input("Enter your password: ")
        confirm_password = input("Confirm your password: ")
        
        if register_password == confirm_password:
            break
        else:
            print("Passwords do not match. Please try again.")
    
    register = {
        "name": register_name,
        "e_mail": register_email,
        "password": register_password
    }
    userdetails.append(register)
    print("Registration successful. You can now log in.")

login_page = input("Login or Register: ")

if login_page.lower() == "login":
    login_user()
elif login_page.lower() == "register":
    register_user()
else:
    print("Invalid input. Please enter 'login' or 'register'.")