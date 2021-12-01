def song_decoder(song):
    output = song.replace("WUB", " ").strip()
    while output.find("  ") != -1:
        output = output.replace("  ", " ")
    return output

print(song_decoder("AWUBBWUBC"))
print(song_decoder("AWUBWUBWUBWUBBWUBWUBWUBC"))
print(song_decoder("WUBAWUBBWUBCWUB"))