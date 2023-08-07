basic_salary =int(input('input your salary here'))
HRA=[20,25,30] 
DA=[5,7,8]
if basic_salary<=10000:
    print(basic_salary+ HRA[0]/100*(basic_salary)+ DA[0]/100*(basic_salary))
elif basic_salary>10000 and basic_salary<=20000:
    print(basic_salary + HRA[1] / 100 * (basic_salary) + DA[1] / 100 * (basic_salary))
elif basic_salary>20000:
    print(basic_salary + HRA[2] / 100 * (basic_salary) + DA[2] / 100 * (basic_salary))