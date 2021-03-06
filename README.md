# 豆瓣电影资源指引插件  ![](https://camo.githubusercontent.com/3f7996bf7bd441deb7199c498aaa835164dee8da/68747470733a2f2f696d672e736869656c64732e696f2f6475622f6c2f766962652d642e737667)

### 工具介绍
这是一个运行在chrome浏览器上的插件。前几天看了[@羡澈](http://zhangwenli.com/blog/2014/09/01/readfree-chrome-extension/)大神写的豆瓣读书跳转到Readme上下载电子书的地址，所以闲着没事就写了一个电影的跳转。
### 实现功能
在豆瓣电影介绍页面自动添加一个下载按钮，点击可以直接传送到该电影的可下载资源的地址，当然了，前提是要找得到资源才行。我写了一个爬虫事先爬取了电影下载网站中的现有资源，离线为一个哈希表供插件搜索。

![](./plugin/images/2.jpeg)

### 使用方法
- 能够科学上网的同学到chrome应用商店下载即可：[douban-movies-plugin](https://chrome.google.com/webstore/detail/douban-movies-plugin/ecgaddjpeacadegjcopipeoncpaphnpl?hl=zh-CN)
- 不能的直接本地下载Chrome插件的cxr文件：[plugin.cxr](https://github.com/shudery/douban-movies-plugin/raw/master/plugin.crx)
- 然后打开Chrome浏览器，点击菜单->工具->扩展程序
- 将已下载的crx文件拖入Chrome窗口
- 打开一个豆瓣电影页面（如：[https://movie.douban.com/subject/25934014/](https://movie.douban.com/subject/25934014/)），如果电影标题右侧没有出现下载按钮，则表示该资源暂时没找到。

### 注意
- 使用这个插件目前只支持chrome浏览器。
- 目前只有豆瓣电影的详情页有添加按钮。
- 暂时只爬取了80s电影网的所有视频资源，也就是说如果80s上没有资源，那么按钮就不会出现了，不过这个网站已经相当给力，基本想看啥有啥，新上映的电影一般一个月内会补上。
