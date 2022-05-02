def distinct_pair_sum(arr, k)
  newArr = []
  arr.map{|num|
  nextNum = arr[arr.index(num)+1]
  if num + nextNum == k
    newArr.push([num,nextNum])
  end 
}
  newArr.uniq
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: [[1, 1], [2, 0]]"
  print "=> "
  print distinct_pair_sum([0, 1, 1, 2, 0, 1, 1], 2)

  puts

  puts "Expecting: [[2, 8]]"
  print "=> "  
  print distinct_pair_sum([3, 4, 2, 1, 5, 2, 8, 2], 10)

  # Don't forget to add your own!
end

# Please add your pseudocode to this file
# And a written explanation of your solution
