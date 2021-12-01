def find_outlier(integers):
    count = 0
    ii = 0
    for i in range(len(integers)):
        if integers[i]%2 == 0:
            count += 1
        else:
            count -= 1
        if count >= 2:
            while integers[ii]%2 == 0:
                ii += 1
            break
        if count <= -2:
            while integers[ii]%2 != 0:
                ii += 1
            break
    if count == 1:
        while integers[ii]%2 == 0:
            ii += 1
    if count == -1:
        while integers[ii]%2 != 0:
            ii += 1
    return integers[ii]

print(find_outlier([1,0,0]))
print(find_outlier([2, 4, 6, 8, 10, 3]))
print(find_outlier([2, 4, 0, 100, 4, 11, 2602, 36]))
print(find_outlier([160, 3, 1719, 19, 11, 13, -21]))