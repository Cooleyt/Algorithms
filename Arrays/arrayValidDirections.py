def is_valid_walk(walk):
    if len(walk) == 10 and walk.count('s') == walk.count('n') and walk.count('e') == walk.count('w'):
        return True
    return False

#some test cases for you...
print(is_valid_walk(['n','s','n','s','n','s','n','s','n','s']))
print(is_valid_walk(['w','e','w','e','w','e','w','e','w','e','w','e']))
print(is_valid_walk(['w']))
print(is_valid_walk(['n','n','n','s','n','s','n','s','n','s']))