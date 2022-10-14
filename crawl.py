import requests
from requests_html import HTMLSession
from bs4 import BeautifulSoup
import json
file_path = "./sample.json"



for page in range(94, 500):
    out = []
    url = 'https://www.tradingview.com/ideas/indicator/page-' + str(page)
    response = requests.get(url)
    i = 0
    if response.status_code == 200:
        html = response.text
        soup = BeautifulSoup(html, 'html.parser')
        titles = soup.select('div.tv-widget-idea__title-row > a')
        for title in titles: # titles 
            i = i+1
            #print(title.get_text(), '\n', title['href'])

            session = HTMLSession()
            #sleep(5)
            url = "https://tradingview.com" + title['href']
            response = session.get(url)
            response.html.render(timeout=40)
            html = response.text
            soup = BeautifulSoup(html, 'html.parser')
            

            name = soup.select('.tv-chart-view__title-user-name')
            if(len(name) > 0):
                name = name[0].get_text()
            else:
                name = ''
            
            
            contents = []
            contentsList = soup.select('.tv-chart-view__description')
            if(len(contentsList) > 0):
                for c in contentsList:
                    contents.append(str(c).replace('"','\"'))
            
            #contents = 'test'

#<meta property="og:image" content="https://s3.tradingview.com/h/Hbu9txEN_big.png">

            snapshot = soup.select('meta[property="og:image"]')
            if(len(snapshot) > 0):
                snapshot = snapshot[0]['content']
            else:
                snapshot = ''

            time = soup.select('.tv-chart-view__title-time')
            time = ""
            # print (time)
            # if(len(time) == 1):
            #     time = time[0]['title']
            # elif(len(time) == 2):
            #     time = time[1]['title']
            # else:
            #     time = ''

            contentsId = title['href'].split('/')[3].split('-')[0]
            commentUrl = 'https://tradingview.com/api/v1/ideas/' +  contentsId + '/comments/tree/?offset=0&sort_by_rating=true'
            print ('comment!' + commentUrl)
            commentResponse = requests.get(commentUrl)
            comments = commentResponse.text
            
            
            result = {
                "title": title.get_text(),
                "name": name,
                "time": time,
                "link": title['href'],
                "contents": contents,
                "snapshot": snapshot,
                "comments": comments 
            }
            print(url + ' success' )
            out.append(result)

    with open('./json/page-' + str(page) + '.json', 'w', encoding='utf8') as outfile:
        json.dump(out, outfile ,ensure_ascii = False)

'''
https://kr.tradingview.com/api/v1/ideas/IM2KIi2P/comments/tree/?offset=0&sort_by_rating=true
'''