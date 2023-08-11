# n=int(input('num'))
# for i in range(n):
#     print('*'*n)

# for i in range(n):
#     for j in range(n):
#         print('*',end='')
#     print('')
# n=int(input('num'))
# for i in range(1,(n*n)+1):
#     print(i, end=' ')
#     if i%n==0:
#         print(' \n')
n=5
for i in range(n*n,0,-1):
    
    if i%n==0:
        print(' \n')
    print(i, end=' ')
    