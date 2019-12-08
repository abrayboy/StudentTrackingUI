import os
import sys
import multiprocessing
import time
import json

def start_api_server():
    os.system('npm start')

def start_client_server():
    os.system('cd client && npm start')


def check_os():
    print('Checking Operating System...')
    jsonData = read_json()
    with open('./client/package.json', 'w') as jsonFileW:
        json.dump(jsonData, jsonFileW)
        jsonFileW.close()
    print("Complete...")
    print("Heading to Startup...")

def read_json():
    jsonData = None
    with open('./client/package.json', 'r') as jsonFile:
        jsonData = json.load(jsonFile)
        _os = sys.platform.upper()
        if ("WIN32" in _os):
            jsonData['scripts']['start'] = 'set PORT=1641 && react-scripts start'
        elif ("DARWIN" in _os):
            jsonData['scripts']['start'] = 'export PORT=1641 && react-scripts start'
        elif ("LINUX" in _os):
            jsonData['scripts']['start'] = 'PORT=1641 && react-scripts start'
        print("Current OS: " + _os)
        time.sleep(1)
        print(jsonData)
        jsonFile.close()
    return jsonData


if __name__ == '__main__':
    check_os()
    time.sleep(2)
    job1 = multiprocessing.Process(name='job1', target=start_api_server)
    job2 = multiprocessing.Process(name='job2', target=start_client_server)

    job1.start()
    time.sleep(2)
    job2.start()



