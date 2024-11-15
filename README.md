```
racknerd-c——142.171.198.189——r.xxf186.asia


美国15M——103.143.248.45——15.xxf186.asia


--------------------------------------------------------------------------------

#放行端口

iptables -I INPUT -p tcp --dport 80 -j ACCEPT

iptables -I INPUT -p tcp --dport 443 -j ACCEPT

配置查看

wget -qO- bench.sh | bash

速度测速

wget -O /dev/null http://test.b-cdn.net/100mb.bin

更新及安装组件Debian/Ubuntu 命令

apt update -y

apt install -y curl

apt install -y socat

更新及安装组件CentOS 命令

yum update -y

yum install -y curl

yum install -y socat

Debian/Ubuntu 系统安装 curl 方法:

apt-get update -y && apt-get install curl -y

centos 系统安装 curl 方法:

yum update -y && yum install curl -y

--------------------------------------------------------------------------------
--------------------------------------------------------------------------------

中文包命令
wget -N --no-check-certificate https://raw.githubusercontent.com/FunctionClub/LocaleCN/master/LocaleCN.sh && bash LocaleCN.sh

curl命令

apt-get update -y && apt-get install curl -y

① xray

bash <(wget -qO- -o- https://raw.githubusercontent.com/xxf185/Xray/master/install.sh)

② v2ray

bash <(wget -qO- -o- https://raw.githubusercontent.com/xxf185/v2ray/master/install.sh)


③ OpenVPN

wget https://raw.githubusercontent.com/xxf185/openvpn/master/openvpn-install.sh -O openvpn-install.sh && bash openvpn-install.sh


④ x-ui

bash <(curl -Ls https://raw.githubusercontent.com/xxf185/x-ui/master/install.sh)

⑤ tuic

bash <(wget -qO- -o- https://raw.githubusercontent.com/xxf185/tuic/master/tuic.sh)

⑥  sing-box

bash <(wget -qO- -o- https://github.com/xxf185/sing-box/raw/main/install.sh)

bash <(curl -fsSL https://github.com/xxf185/sing-REALITY-Box/raw/master/sing-REALITY-box.sh)

bash <(curl -fsSL https://raw.githubusercontent.com/xxf185/Singbox-Reality/main/install.sh)

⑦ hysteria

bash <(wget -qO- -o- https://raw.githubusercontent.com/xxf185/hysteria/master/hy2.sh)

⑧ h-ui

bash <(curl -fsSL https://raw.githubusercontent.com/xxf185/h-ui/master/install.sh)

⑨ s-ui

bash <(curl -Ls https://raw.githubusercontent.com/xxf185/s-ui/master/install.sh)

⑩  juicity

bash <(wget -qO- -o- https://raw.githubusercontent.com/xxf185/juicity/main/juicity.sh)


--------------------------------------------------------------------------------
--------------------------------------------------------------------------------

api令牌

20f0ff7794cbcec1ee99736ddfdd9aa2105c6

邮箱

ashcraftbartlett057337@gmail.com

公钥文件路径

/root/cert/fullchain.cer

密钥文件路径

/root/cert/15.xxf186.asia.key

/root/cert/r.xxf186.asia.key


删除配置 v2ray del——xray del

查看 配置 v2ray info——xray info

添加配置 v2ray add ws——xray add ws

更改端口 v2ray port tls auto——xray port tls auto


TLS禁止自动配置 v2ray no-auto-tls —— xray no-auto-tls 

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
