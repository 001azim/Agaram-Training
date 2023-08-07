gold_rate=10000
makingcharge=1000




def rate(amount):
    return amount*0.3

gst=rate(gold_rate+makingcharge)

total=gold_rate+makingcharge+gst
print(total)




