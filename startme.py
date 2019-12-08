import os
import multiprocessing
import time

def start_api_server():
    os.system('npm start')

def start_client_server():
    os.system('cd client && npm start')


if __name__ == '__main__':
    job1 = multiprocessing.Process(name='job1', target=start_api_server)
    job2 = multiprocessing.Process(name='job2', target=start_client_server)

    job1.start()

    time.sleep(2)

    job2.start()



