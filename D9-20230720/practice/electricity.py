total_unit=int(input('enter the total unit '))
cost=int(input('enter cost here '))
x=total_unit*cost
gst=18/100*(x)
if total_unit<=100:
    print(x +gst)
elif total_unit>100:
    print(x+50 +gst) 
elif total_unit>500 and total_unit<=1000:
    print(x+(5/100*(x))+(gst*(x)))
