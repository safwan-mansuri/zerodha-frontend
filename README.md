# Zerodha Task

### Problem statement

The task include to download the `Bhavcopy` zip everyday from `https://www.bseindia.com/markets/MarketInfo/BhavCopy.aspx` and store in to the `redis` datastructure
and render it on the frontend, the download should happen everyday at `6:00 pm`. The frontend should also have the functionality of searching based on name.

### Solution

I have used three services two achieve this, can access as follows

1. https://github.com/safwan-mansuri/zerodha-frontend ( frontend service using reactjs )
2. https://github.com/safwan-mansuri/zerodha-backend ( backend service using django )
3. https://github.com/safwan-mansuri/zerodha-schedular ( schedular service using vanilla python )

### Architecture

![Screenshot 2021-04-27 at 10 30 32 PM](https://user-images.githubusercontent.com/82272505/116282282-31655180-a7a8-11eb-8c48-0c7aa37f5b66.png)

1. Schedular service will run everyday at 6:00 pm as job is scheduled accordingly.
2. Schedular service download the zip file and unzip it to have the csv file which have the data.
3. Traverse the csv file and prepare a json response in order to hit POST request to the Backend service at endpoint `https://zerodha-backend-stock.herokuapp.com/stock_details/today_data`.
4. Once the data is recieved at the Backend service it will add that data in to the redis service before that it will remove the previous data in order to save the memory.
5. I have used `redis to go` service which has limited memory.
6. Now user can hit the endpoint `https://zerodha-backend-stock.herokuapp.com/stock_details/` to get the data.
7. Frontend internally hit the above endpoint and parse the data to show at frontend.

### DEMO

https://user-images.githubusercontent.com/82272505/116283557-a2f1cf80-a7a9-11eb-9afa-60f96c2974c9.mov
