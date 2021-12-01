def to_camel_case(text):
    text = str(text)
    if len(text) == 0:
        return text
    s = []
    output = ''
    u = 0
    j = 0
    jj = 0
    if text[0] != text[0].upper():
        u = 1
    while(text.find('-') != -1 or text.find('_') != -1):
        j = text.find('-')
        jj = text.find('_') # 3
        if((jj < j and jj != -1) or j == -1):
            i = jj
        else:
            i = j
        sly = slice(0, i)
        # print(text[sly].title())
        s.append(text[sly].title())
        for ii in range(0,i+1):
            text = text.replace(text[0],'',1)
    s.append(text.title())
    if u == 1:
        s[0] = s[0].lower()

    for e in range(0,len(s)):
        output += s[e]
    return output

print(to_camel_case(''))
print(to_camel_case("the_stealth_warrior"))
print(to_camel_case("The-Stealth-Warrior"))
print(to_camel_case("A-B-C"))
print(to_camel_case('A-pippi_Is-Pippi'))