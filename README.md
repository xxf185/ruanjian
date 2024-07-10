```
更新系统
apt-get update -y && apt-get install curl -y 

x-ui安装代码：
bash <(curl -Ls https://raw.githubusercontent.com/xxf185/x-ui/master/install.sh)


用户名
598215657

端口
15657

IP＋端口
xxx.xxx.xxx.xxx:15657

api令牌 
20f0ff7794cbcec1ee99736ddfdd9aa2105c6  

邮箱
ashcraftbartlett057337@gmail.com



域名＋端口
xxx.xxx.xxx:15657   

公钥文件路径
/root/cert/fullchain.cer
            
密钥文件路径
/root/cert/xxx.xxx.xxx.key

--------------------------------------------------------------------------------
--------------------------------------------------------------------------------

Centos/Debian系统80端口被占用

netstat -lnpt

卸载占用端口的应用
apt -y remove apache2

杀进程再分配端口
netstat -lnpt|grep 80

netstat -lnpt|grep 443

kill -s 9 xxx
```





