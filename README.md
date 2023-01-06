# TWENTI BEAUTI
Thank to https://thefaceshop.com.vn & https://www.sapo.vn for your supports.

## About Twenti
## Explore Twenti
## What we learned?
1. OAuth 2.0 powered by Firebase Auth
2. Chatbot by FPT Chatbot
3. E-payment by VNPay Payment
4. Unlimited image storage API: Imgur
5. The best Vuejs UI lib: PrimeVue (highly recommended)

Read Vietnamse document here: 
Video demo:

## How to run
Setup database: 
1. download Xampp or Wampp to work with MySQL Database - recorded here: https://github.com/giahuy2610/twentibeauti-frontend/blob/main/src/assets/twentimysqldb.sql
2. Create new database "Twenti" and execute

Setup Backend:
We provided 2 ways with the same api target:
1. Clone Laravel BE: git clone https://github.com/giahuy2610/twentibeauti_backend_DotNet  <br>
Or ASP Net: git clone https://github.com/giahuy2610/twentibeauti_backend_DotNet
2. npm run dev & php artisan serve to execute the Laravel project
Esier with only tap on Build project when using ASP on Visual Studio <br>
The url on terminal will be the baseURL of axios request.

Setup Frontend:<br>
1. git clone https://github.com/giahuy2610/twentibeauti-frontend.git
2. change the default axios request url at "main.js"
ex: axios.defaults.baseURL = "https://localhost:7084/api"; <br>
3. npm run dev -- --host and choose any address instead of localhost
(by using '-- --host' subfix, available to request to store on cloud - powered by https://imgur.com) <br>
If can not login by OAuth, change to localhost 
