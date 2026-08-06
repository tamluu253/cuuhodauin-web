import urllib.request, re
html = urllib.request.urlopen('https://www.youtube.com/results?search_query=RFID+warehouse+inventory+scanning').read().decode('utf-8')
match = re.search(r'"videoId":"([^"]{11})"', html)
if match:
    print(match.group(1))
