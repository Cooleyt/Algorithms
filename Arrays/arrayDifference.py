def array_diff(a, b):
    while(len(b)>0):
        i = 0
        while i < len(a):
            if a[i] == b[0]:
                a.pop(i)
                i -= 1
            else:
                i += 1
        b.pop(0)
    return a


print(array_diff([1,2], [1]))
print(array_diff([1,2,2], [1]))
print(array_diff([1,2,2], [2]))
print(array_diff([1,2,2], []))
print(array_diff([], [1,2]))
print(array_diff([1,2,3], [1, 2]))