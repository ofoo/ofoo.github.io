(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{304:function(a,t,e){"use strict";e.r(t);var r=e(10),_=Object(r.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"javaweb-知识"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#javaweb-知识"}},[a._v("#")]),a._v(" JavaWeb 知识")]),a._v(" "),t("h2",{attrs:{id:"一、加密算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、加密算法"}},[a._v("#")]),a._v(" 一、加密算法")]),a._v(" "),t("h3",{attrs:{id:"_1-什么是对称加密"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-什么是对称加密"}},[a._v("#")]),a._v(" 1. 什么是对称加密")]),a._v(" "),t("p",[t("a",{attrs:{href:"https://baike.baidu.com/item/%E5%AF%B9%E7%A7%B0%E5%8A%A0%E5%AF%86%E7%AE%97%E6%B3%95/211953?fromModule=lemma_inlink",target:"_blank",rel:"noopener noreferrer"}},[a._v("对称加密算法"),t("OutboundLink")],1),a._v("在"),t("a",{attrs:{href:"https://baike.baidu.com/item/%E5%8A%A0%E5%AF%86/752748?fromModule=lemma_inlink",target:"_blank",rel:"noopener noreferrer"}},[a._v("加密"),t("OutboundLink")],1),a._v("和解密时使用的是同一个"),t("a",{attrs:{href:"https://baike.baidu.com/item/%E7%A7%98%E9%92%A5/9200183?fromModule=lemma_inlink",target:"_blank",rel:"noopener noreferrer"}},[a._v("秘钥"),t("OutboundLink")],1),a._v("。")]),a._v(" "),t("h3",{attrs:{id:"_2-什么是非对称加密"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-什么是非对称加密"}},[a._v("#")]),a._v(" 2. 什么是非对称加密")]),a._v(" "),t("p",[a._v("非对称加密算法需要两个"),t("a",{attrs:{href:"https://baike.baidu.com/item/%E5%AF%86%E9%92%A5/101144?fromModule=lemma_inlink",target:"_blank",rel:"noopener noreferrer"}},[a._v("密钥"),t("OutboundLink")],1),a._v("来进行加密和解密，这两个密钥是"),t("a",{attrs:{href:"https://baike.baidu.com/item/%E5%85%AC%E5%BC%80%E5%AF%86%E9%92%A5/7453570?fromModule=lemma_inlink",target:"_blank",rel:"noopener noreferrer"}},[a._v("公开密钥"),t("OutboundLink")],1),a._v("（public key，简称公钥）和私有密钥（private key，简称私钥）。")]),a._v(" "),t("p",[t("strong",[a._v("RSA：")]),t("span",[a._v("RSA")]),a._v("由于难以破解，是目前应用最广泛的数字加密和签名技术。安全程度取决于秘钥的长度，推荐使用 2048 位或以上的秘钥。")]),a._v(" "),t("p",[t("strong",[a._v("RSA：")]),t("span",{staticStyle:{color:"red"}},[a._v("RSA 是一种目前应用非常广泛")]),a._v("、历史也比较悠久的非对称秘钥加密技术，在1977年被麻省理工学院的罗纳德·李维斯特（Ron Rivest）、阿迪·萨莫尔（Adi Shamir）和伦纳德·阿德曼（Leonard Adleman）三位科学家提出，由于"),t("span",{staticStyle:{color:"red"}},[a._v("难于破解")]),a._v("，RSA 是目前应用最广泛的数字加密和签名技术，比如国内的支付宝就是通过RSA算法来进行签名验证。它的"),t("span",{staticStyle:{color:"red"}},[a._v("安全程度取决于秘钥的长度")]),a._v("，目前主流可选秘钥长度为 1024位、2048位、4096位等，理论上秘钥越长越难于破解，按照维基百科上的说法，小于等于256位的秘钥，在一台个人电脑上花几个小时就能被破解，512位的秘钥和768位的秘钥也分别在1999年和2009年被成功破解，虽然目前还没有公开资料证实有人能够成功破解1024位的秘钥，但显然距离这个节点也并不遥远，所以目前业界"),t("span",{staticStyle:{color:"red"}},[a._v("推荐使用 2048 位或以上的秘钥")]),a._v("，不过目前看 2048 位的秘钥已经足够安全了，支付宝的官方文档上推荐也是2048位，当然更长的秘钥更安全，但也意味着会产生更大的性能开销。")]),a._v(" "),t("h3",{attrs:{id:"_3-摘要算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-摘要算法"}},[a._v("#")]),a._v(" 3. 摘要算法")]),a._v(" "),t("p",[a._v("消息摘要算法的主要特征是"),t("a",{attrs:{href:"https://baike.baidu.com/item/%E5%8A%A0%E5%AF%86/752748?fromModule=lemma_inlink",target:"_blank",rel:"noopener noreferrer"}},[a._v("加密"),t("OutboundLink")],1),a._v("过程不需要"),t("a",{attrs:{href:"https://baike.baidu.com/item/%E5%AF%86%E9%92%A5/101144?fromModule=lemma_inlink",target:"_blank",rel:"noopener noreferrer"}},[a._v("密钥"),t("OutboundLink")],1),a._v("，并且经过加密的数据无法被解密，可以被解密逆向的只有"),t("a",{attrs:{href:"https://baike.baidu.com/item/CRC32/7460858?fromModule=lemma_inlink",target:"_blank",rel:"noopener noreferrer"}},[a._v("CRC32"),t("OutboundLink")],1),a._v("算法，只有输入相同的明文数据经过相同的消息摘要算法才能得到相同的"),t("a",{attrs:{href:"https://baike.baidu.com/item/%E5%AF%86%E6%96%87/9684333?fromModule=lemma_inlink",target:"_blank",rel:"noopener noreferrer"}},[a._v("密文"),t("OutboundLink")],1),a._v("。")]),a._v(" "),t("h2",{attrs:{id:"二、响应速度优化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、响应速度优化"}},[a._v("#")]),a._v(" 二、响应速度优化")]),a._v(" "),t("h3",{attrs:{id:"_1-影响响应速度的原因"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-影响响应速度的原因"}},[a._v("#")]),a._v(" 1. 影响响应速度的原因")]),a._v(" "),t("p",[a._v("1）拦截器查询数据库太多")]),a._v(" "),t("p",[a._v("2）静态资源（.png、.jpg、.pdf等等）也走拦截器")]),a._v(" "),t("h2",{attrs:{id:"三、个人总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、个人总结"}},[a._v("#")]),a._v(" 三、个人总结")]),a._v(" "),t("p",[a._v("1）很难做到数据一致性，要想数据库不出现垃圾数据，几乎是不可能的。很难！")]),a._v(" "),t("h2",{attrs:{id:"四、功能设计"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四、功能设计"}},[a._v("#")]),a._v(" 四、功能设计")]),a._v(" "),t("h3",{attrs:{id:"_1-excel批量导入功能"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-excel批量导入功能"}},[a._v("#")]),a._v(" 1. Excel批量导入功能")]),a._v(" "),t("h4",{attrs:{id:"方案一-数据全部正确无误后-添加数据库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方案一-数据全部正确无误后-添加数据库"}},[a._v("#")]),a._v(" 方案一：数据全部正确无误后，添加数据库")]),a._v(" "),t("p",[t("img",{attrs:{src:"/assets/img/knowledge/javaweb/image-20220923233921491.png",alt:"image-20220923233921491"}})]),a._v(" "),t("h4",{attrs:{id:"方案二-过滤掉错误数据-添加数据库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方案二-过滤掉错误数据-添加数据库"}},[a._v("#")]),a._v(" 方案二：过滤掉错误数据，添加数据库")]),a._v(" "),t("p",[t("img",{attrs:{src:"/assets/img/knowledge/javaweb/image-20220923233836388.png",alt:"image-20220923233836388"}})]),a._v(" "),t("p",[t("span",{staticStyle:{color:"red"}},[a._v("个人推荐使用方案二：")]),a._v("从使用角度对用户友好，既添加了正确数据，又同时告诉了用户错误数据。")]),a._v(" "),t("h2",{attrs:{id:"五、用户故事"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#五、用户故事"}},[a._v("#")]),a._v(" 五、用户故事")]),a._v(" "),t("p",[a._v("我接了一个项目，我要进行开发，赚钱。")]),a._v(" "),t("p",[a._v("开始阶段：")]),a._v(" "),t("p",[a._v("我想知道项目需要开发哪些功能。（收集需求）")]),a._v(" "),t("p",[a._v("我想知道每个功能需要开发多少天。（属性：天数）")]),a._v(" "),t("p",[a._v("我想知道应该先开发哪些功能。（项目进度网络图，紧前关系和紧后关系）")]),a._v(" "),t("p",[a._v("执行阶段：")]),a._v(" "),t("p",[a._v("我想知道项目完成了哪些功能。")]),a._v(" "),t("p",[a._v("我想知道项目还剩哪些功能。")]),a._v(" "),t("p",[a._v("我想知道项目还有多少天才能完成。")])])}),[],!1,null,null,null);t.default=_.exports}}]);