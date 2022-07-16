
select = int(input("select from 1,2,3,4: "))

numb1 = int(input("Enter Number One: "))
numb2 = int(input("Enter Number Two: "))

if select == 1:
  print ( numb1 + numb2 )
elif select == 2: 
  print ( numb1 - numb2 )
elif select == 3:
  print ( numb1 * numb2 )
elif select == 4:
  print ( numb1 / numb2 )
else:
  print("Unknown button")