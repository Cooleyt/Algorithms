def unique_in_order(iterable):
    output = []
    if len(iterable) == 0:
        return output
    i = 0

    ii = iterable[i]
    output.append(iterable[i])
    while i < len(iterable):
        if ii == iterable[i]:
            i += 1
        else:
            ii = iterable[i]
            output.append(iterable[i])
            i += 1
    return output
print(unique_in_order('AAAABBBCCDAABBB'))