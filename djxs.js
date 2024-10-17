#!url=https://raw.githubusercontent.com/xxf185/ruanjian/refs/heads/main/djxs.js

#!name=得间小说
#!desc=得间小说解锁
  
[Script]
djxs=type=http-response,pattern=^http[s]?:\/\/dj.palmestore.com\/zyuc\/api\/user\/accountInfo,requires-body=1,script-path=https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/djxs.js


[MITM]
hostname = %APPEND% dj.palmestore.com
