# Zerodha Task

### Problem statement

The task include to download the `Bhavcopy` zip everyday from `https://www.bseindia.com/markets/MarketInfo/BhavCopy.aspx` and store in to the `redis` datastructure
and render it on the frontend, the download should happen everyday at `6:00 pm`. The frontend should also have the functionality of searching based on name.

### Solution

I have used three services two achieve this, can access as follows

1. https://github.com/safwan-mansuri/zerodha-frontend ( frontend service using reactjs )
2. https://github.com/safwan-mansuri/zerodha-backend ( backend service using django )
3. https://github.com/safwan-mansuri/zerodha-schedular ( schedular service using vanilla python )


