cloudcone——23.234.240.118——c.xxf185.asia

racknerd-a——198.74.113.18——r1.xxf185.asia

racknerd-b——192.227.231.203——r2.xxf185.asia

美国5M——38.181.44.23——us2.xxf185.asia

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
1：curl命令

apt-get update -y && apt-get install curl -y

2：V2Ray一键安装代码

bash <(wget -qO- -o- https://git.io/v2ray.sh)

XRay一键安装代码：

bash <(wget -qO- -o- https://github.com/233boy/Xray/raw/main/install.sh)

OpenVPN搭建代码：

wget https://git.io/vpn -O openvpn-install.sh && bash openvpn-install.sh

wireguard搭建代码：

wget https://git.io/wireguard -O wireguard-install.sh && bash wireguard-install.sh

x-ui安装代码：

bash <(curl -Ls https://gitlab.com/rwkgyg/x-ui-yg/raw/main/install.sh)

宝塔面板国际版

wget -O install.sh http://www.aapanel.com/script/install-ubuntu_6.0_en.sh && sudo bash install.sh aapanel

--------------------------------------------------------------------------------
--------------------------------------------------------------------------------
api令牌

20f0ff7794cbcec1ee99736ddfdd9aa2105c6

邮箱

ashcraftbartlett057337@gmail.com

公钥文件路径

/root/ygkkkca/cert.crt

密钥文件路径

/root/ygkkkca/private.key

删除配置 v2ray del——xray del

查看 配置 v2ray info——xray info

添加配置 v2ray add ws——xray add ws

更改端口 v2ray port tls auto——xray port tls auto

--------------------------------------------------------------------------------
--------------------------------------------------------------------------------
官方定义reality域名的目标网站最低标准：国外网站 、支持 TLSv1.3 、X25519 与 H2

gateway.icloud.com

itunes.apple.com

download-installer.cdn.mozilla.net

addons.mozilla.org

www.microsoft.com

www.lovelive-anime.jp

swdist.apple.com

swcdn.apple.com

updates.cdn-apple.com

mensura.cdn-apple.com

osxapps.itunes.apple.com

aod.itunes.apple.com

cdn-dynmedia-1.microsoft.com

update.microsoft

software.download.prss.microsoft.com

s0.awsstatic.com

d1.awsstatic.com

images-na.ssl-images-amazon.com

m.media-amazon.com

player.live-video.net

dl.google.com

www.yahoo.com

--------------------------------------------------------------------------------
--------------------------------------------------------------------------------

Centos/Debian系统80端口被占用

netstat -lnpt

卸载占用端口的应用
apt -y remove apache2

杀进程再分配端口
netstat -lnpt|grep 80

netstat -lnpt|grep 443

kill -s 9 xxxx


--------------------------------------------------------------------------------
--------------------------------------------------------------------------------

https://raw.githubusercontent.com/xxf185/ruanjian/main/dsj

https://raw.githubusercontent.com/xxf185/ruanjian/main/kuwo

https://raw.githubusercontent.com/xxf185/ruanjian/main/openvpn

https://raw.githubusercontent.com/xxf185/ruanjian/main/v2ray

https://raw.githubusercontent.com/xxf185/ruanjian/main/wireguard

https://raw.githubusercontent.com/xxf185/ruanjian/main/x-ui

https://raw.githubusercontent.com/xxf185/ruanjian/main/youtube

https://raw.githubusercontent.com/xxf185/ruanjian/main/xray
