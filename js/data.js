

//全局变量
var data_content1= '<li><a href="';
var data_content2= '" class="link-3" target="_blank" rel="nofollow"><div class="text-container"><img class="image-text" src="'
var data_content3='"><span class="image-text" title="';
var data_content4='">';
var data_content5='</span></div></a></li>';

//////////////标题1
var title1 = "娱乐";
//字典类型
var data1 = [
          {href:'https://weibo.com/',name:'新浪微博',icon:'./img/ico/xinlangweibo.ico'},
          {href:'http://mail.sina.com.cn/',name:'新浪邮箱',icon:'./img/ico/xinlangyouxiang.ico'},
      	  {href:'http://www.youku.com/',name:'优酷',icon:'./img/ico/youku.ico'},
          {href:'http://www.iqiyi.com/',name:'爱奇艺',icon:'./img/ico/iqiyi.ico'},
 	      {href:'https://v.qq.com/',name:'腾讯视频',icon:'./img/ico/tengxunshipin.ico'},
      	  {href:'https://www.bilibili.com/',name:'哔哩哔哩',icon:'./img/ico/bili.ico'},
	      {href:'http://dilidili11.com/',name:'D站',icon:'./img/ico/dzhan.ico'},
];

//////////////标题2
var title2 = "文献";
//字典类型
var data2 = [
          {href:'https://www.cnki.net/',name:'知网',icon:'./img/ico/zhiwang.ico'},
          {href:'https://xueshu.baidu.com/',name:'百度学术',icon:'./img/ico/baiduxueshu.ico'},
      	  {href:'https://ieeexplore.ieee.org/s',name:'IEEE',icon:'./img/ico/ieee.ico'},
          {href:'https://webofscience.clarivate.cn/',name:'web of sci',icon:'./img/ico/webofsci.ico'},
 	      {href:'http://www.ucdrs.superlib.net/',name:'全国图书馆联盟',icon:'./img/ico/quanguotushuguanlianmeng.ico'},
      	  {href:'http://ac.scmor.com/?tdsourcetag=s_pcqq_aiomsg',name:'谷歌学术镜像',icon:'./img/ico/gugexueshu.ico'},
	      {href:'http://www.sci-hub.ren/',name:'sci-hub',icon:'./img/ico/sci-hub.ico'},
		   {href:'https://navi.cnki.net/knavi/journals/index',name:'知网期刊',icon:'./img/ico/zhiwang.ico'},
];


//////////////标题3
var title3 = "代码&存储";
//字典类型
var data3 = [
          {href:'https://blog.csdn.net/u011321546',name:'SCDN',icon:'./img/ico/csdn.ico'},
          {href:'https://github.com/',name:'GitHub',icon:'./img/ico/github.ico'},
     	  {href:'https://www.klgeek.com/',name:'知识极客-内容付费',icon:'./img/ico/fageka.jpg'},
          {href:'https://wwar.lanzout.com/',name:'蓝奏·云存储',icon:'./img/ico/lanzhouyun.ico'},
      	  {href:'https://www.alipan.com/',name:'阿里云盘',icon:'./img/ico/aliyunpan.ico'},
      	  {href:'https://pan.baidu.com/',name:'百度网盘',icon:'./img/ico/baiduwangpan.ico'},
      	  {href:'https://www.zhihu.com/explore',name:'知乎',icon:'./img/ico/zhihu.png'},
		  {href:'https://movie.douban.com/',name:'豆瓣',icon:'./img/ico/douban.ico'},
];

//////////////标题4
var title4 = "影视";
//字典类型
var data4 = [
           {href:'https://dianying.fm/',name:'电影FM',icon:'./img/ico/dianyingfm.ico'},
          {href:'http://www.zzzfun.com/',name:'ZzzFun',icon:'./img/ico/zzzfun.ico'},
     	  {href:'https://www.dytt8899.com/',name:'电影天堂',icon:'./img/ico/dianyingtiantang.ico'},
          {href:'http://xunjuba.kanjuba6.com/',name:'70看看',icon:'./img/ico/dzhan.ico'},
      	  {href:'http://www.dyhz1.com/',name:'电影盒子',icon:'./img/ico/dianyinghezhi.ico'},
      	  {href:'https://tools.liumingye.cn/music/#/',name:'音乐下载',icon:'./img/ico/yinyuexiazai.ico'},
      	  {href:'https://music.itzo.cn/a.php',name:'音乐搜索器',icon:'./img/ico/yinyuexiazai.ico'},
		  {href:'https://www.xiaobaipan.com/',name:'小白盘-网盘搜索',icon:'./img/ico/xiaobaipan.png'},
];

//////////////标题5
var title5 = "工具";
//字典类型
var data5 = [
          {href:'http://www.akuziti.com/',name:'艺术字',icon:'./img/ico/tongyong.png'},
          {href:'http://www.bitbug.net/',name:'制作图标ico',icon:'./img/ico/zhizuotubiao.ico'},
     	  {href:'http://www.2gei.com/bgremover',name:'图片背景透明',icon:'./img/ico/tupianbeijingtouming.ico'},
          {href:'http://www.asqql.com/qqtp/',name:'gif图片添加文字',icon:'./img/ico/tongyong.png'},
      	  {href:'http://st.so.com/',name:'360识图',icon:'./img/ico/360shitu.ico'},
      	  {href:'http://image.baidu.com/?fr=shitu',name:'百度识图',icon:'./img/ico/baidu.ico'},
      	  {href:'http://520sucai.cn/',name:'昵图千图下载',icon:'./img/ico/tongyong.png'},
		  {href:'http://www.pdfdo.com',name:'PDF文件操作',icon:'./img/ico/tongyong.png'},
];


//////////////标题6
var title6 = "导航";
//字典类型
var data6 = [
          {href:'https://www.coolist.net/',name:'软件清单',icon:'./img/ico/ruanjianqingdan.ico'},
          {href:'https://www.soukuzhan.com/',name:'搜酷站导航',icon:'./img/ico/tongyong.png'},
     	  {href:'https://www.jianavi.com/',name:'简约导航',icon:'./img/ico/jianyuedaohang.ico'},
];
//////////////标题7
var title7 = "AI软件";
var data7 = [
          {href:'https://www.deepseek.com/',name:'DeepSeek',icon:'./img/ico/deepseek.ico'},
          {href:'https://yuanbao.tencent.com/',name:'腾讯元宝',icon:'./img/ico/tengxunyuanbao.png'},
     	  {href:'https://yiyan.baidu.com/',name:'文心一言',icon:'./img/ico/wenxin.ico'},
		  {href:'https://chat.baidu.com/',name:'百度ai',icon:'./img/ico/baidu.ico'},
		  {href:'https://www.doubao.com/chat/',name:'豆包',icon:'./img/ico/doubao.png'},
		  {href:'https://kimi.moonshot.cn/',name:'KiMi',icon:'./img/ico/kimi.ico'},
];


Ftitle("title1",title1,"data1",data1);
Ftitle("title2",title2,"data2",data2);
Ftitle("title3",title3,"data3",data3);
Ftitle("title4",title4,"data4",data4);
Ftitle("title5",title5,"data5",data5);
Ftitle("title6",title6,"data6",data6);
Ftitle("title7",title7,"data7",data7);
function Ftitle(titleid,title,dataid,data){
	var titleData =data;
	var content="";
	for(var i=0;i<titleData.length;i++){
		content+=data_content1+titleData[i].href+data_content2+titleData[i].icon+data_content3+titleData[i].name+data_content4+titleData[i].name+data_content5;
		}
document.getElementById(titleid).innerHTML = title;
document.getElementById(dataid).innerHTML = content;
}	
