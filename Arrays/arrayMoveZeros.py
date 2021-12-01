def move_zeros(array):
    if len(array) == 0:
        return array
    count = array.count(0)
    while array.count(0):
        array.remove(0)
    zeros = [0] * count
    array.extend(zeros)
    return array


def youarecute():
    print(move_zeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]))
    print(move_zeros([9, 0, 0, 9, 1, 2, 0, 1, 0, 1, 0, 3, 0, 1, 9, 0, 0, 0, 0, 9]))
    print(move_zeros([0, 0]))
    print(move_zeros([0]))
    print(move_zeros([]))