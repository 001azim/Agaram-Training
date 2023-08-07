colour= input(' enter colour ')
if colour== 'white':
    print('europe')
elif colour== 'black':
    print('africa')
elif colour== 'brown':
    print('ASIAN')
else:
    print('error')




total_marks= int(input('enter mark here'))
if total_marks>92:
    print('you are eligible for MBBS')
elif total_marks>85 and total_marks<=92:
    print('you are eligible for BDS')
elif total_marks>75 and total_marks<=85:
    print('you are eligible for agriculture')
elif total_marks>=35:
    print('you are eligible for engineering')
else:
    print('YOU ARE NOT ELIGIBLE FOR ANY COURSE')