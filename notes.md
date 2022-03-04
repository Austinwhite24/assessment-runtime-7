
Array Used	|	doubleAppend Time | doubleInsert Time
-------------------------------------------------------------------
tinyArray	|	112.07 us	|	42.102 us
-------------------------------------------------------------------
SmallArray	|	126.491 us	|	59.245 us
-------------------------------------------------------------------
mediumArray	|	172.751 us	|	208.293 us
-------------------------------------------------------------------
largeArray	|	728.424 us	|	11.91457 s
-------------------------------------------------------------------
extraLargeArray	| 4.036776 ms	|	1.518211 s
-------------------------------------------------------------------

The doubleAppend function uses the .push() to just add the element straight to the end of the array which in this case the function it's self has a time complexity of O(n) but the method .push() has a time complexity of O(1)
this means that the differnce length of array getting pushed into the doubleAppend function will affect the runtime.

The doubleInsert function is similar to the .push() method in where the function time complexity is O(n) itself. But differnt from the .push() method this insert uses the .unshift() method which enters whatever is pushed in at the front of the array which causes the whole array every index to shift over to the right one, due to that it causes more and more time when the array gets bigger, so with that the unshift() method is O(n)
and also a linear time performance which can lead to very long runtimes when the array gets bigger.

So after conclusion the doubleAppend Function will scale better in the long run with arrays that are long doubleInsert scales good in short arrays but we saw very quickly how it went from super quick to already over a second in half and would only go to higher and longer speeds later on.

