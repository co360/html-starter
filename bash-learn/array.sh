#https://tldp.org/LDP/Bash-Beginners-Guide/html/sect_10_02.html

# Implicit create array
echo "Implicit arrary"
my_ary[0]=foo
echo ${my_ary[*]}

# Create an array
echo "Explicit arrary"
declare -a test_array
test_array[0]=bar
echo ${test_array[*]}


# Parenthesis is used to create array
echo "Parenthesis arrary"
a=(foo bar baz)
echo "${a}"         # print first element of array a
echo "${a[0]}"      # print first element of array a
echo "${a[1]}"      # print *second* element of array a
echo "${#a[@]}"     # print number of elements in array a

# loop array
echo "Looping array"
for ELEMENT in ${a[@]}
do
  echo item: $ELEMENT
done
