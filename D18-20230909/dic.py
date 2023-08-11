str = "the quick brown fox jumps over the lazy dog the quick brown the jumps fox"
Output :  {  'the': 2,  'quick': 2, 'brown': 2,     'fox': 2,     'jumps': 1,     'over': 1,     'lazy': 1,     'dog': 1 }
d={}
x=str.split()
for i in x:
     r=x.count(i)
     d.update({i:r})
print(d)



