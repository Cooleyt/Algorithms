def rgb(r, g, b):
    output = ''
    charaters = ('0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F')
    if r > 255: output = 'FF'
    elif r < 0: output = '00'
    else: output = f'{output}{charaters[r//16]}{charaters[r%16]}'
    if g > 255: output = f'{output}FF'
    elif g < 0: output = f'{output}00'
    else: output = f'{output}{charaters[g//16]}{charaters[g%16]}'
    if b > 255: output = f'{output}FF'
    elif b < 0: output = f'{output}00'
    else: output = f'{output}{charaters[b//16]}{charaters[b%16]}'
    return output

print(rgb(0,0,0))
print(rgb(1,2,3))
print(rgb(255,255,255))
print(rgb(254,253,252))
print(rgb(-20,275,125))