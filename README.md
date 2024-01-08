# Template模版引擎

这是一个简约、超快的模板引擎。它采用作用域预声明的技术来优化模板渲染速度，从而获得接近 JavaScript 极限的运行性能，并且同时支持
NodeJS 和浏览器

## 项目简介

- 使用技术：TypeScript
- 参考项目：ejs、art-template

## 安装

```
npm install @ama-lib/template
```

## 使用

### 全局导入

```
// require导入
const Template = require('@ama-lib/template')

// import导入
import Template from "@ama-lib/template";

// 使用
Template.Simple('',{}) // 简单版
Template.Intact('',{}) // 完整版
```

### 按需导入

```
// require导入
const {SimpleTemplate,IntactTemplate} = require('@ama-lib/template')

// import导入
import {SimpleTemplate,IntactTemplate} from "@ama-lib/template";

// 使用
SimpleTemplate('',{}) // 简单版
IntactTemplate('',{}) // 完整版
```

### 浏览器支持

```
<script type="text/javascript" src="template.min.js"></script>

// 全局导入
Template.Simple('',{}) // 简单版
Template.Intact('',{}) // 完整版

// 按需导入
SimpleTemplate('',{}) // 简单版
IntactTemplate('',{}) // 完整版

```

## 使用示例

### 简单版使用

```
import Template from "@ama-lib/template";

// 简单版
const templateStr = `
<div class="ama-img-container">
<% for(var index in this.datas) { %>
    <div class="ama-img-item">
    <% if(this.header && this.header[index]) { %>
        <h4 class="ama-header"><% this.header[index] %></h4>
    <% } %>
        <img class="ama-img" src="<% this.datas[index] %>"/>
    <% if(this.header && this.describe[index]) { %>
        <p class="ama-describe"><% this.describe[index] %></p>
    <% } %>
    </div>
<% } %>
</div>
`
const templateData = {
  datas: ['./test01.jpg', './test02.jpg'],
  header: ["test01test01"],
  describe: ["", "test02test02"]
}
Template.Simple(templateStr,templateData)
```

### 完整版使用

```
import Template from "@ama-lib/template";

// 简单版
const templateStr = `
<div class="ama-img-container">
<% for(var index in datas) { %>
    <div class="ama-img-item">
    <% if(header && header[index]) { %>
        <h4 class="ama-header"><%= header[index] %></h4>
    <% } %>
        <img class="ama-img" src="<%= datas[index] %>"/>
    <% if(header && describe[index]) {%>
        <p class="ama-describe"><%= describe[index] %></p>
    <% } %>
    </div>
<%}%>
</div>
`
const templateData = {
  datas: ['./test01.jpg', './test02.jpg'],
  header: ["test01test01"],
  describe: ["", "test02test02"]
}
Template.Intact(templateStr,templateData)
```

## 标签含义

### 简单版

- 使用“<% %>”作为模版引擎
- “<% %>”内仅支持 if、for、else、switch、case、break
- “<% %>”内的this.xxx指的是你传入的值

### 完整版

- <% '脚本' 标签，用于流程控制，无输出。
- <%_ 删除其前面的空格符
- <%= 输出数据到模板（输出是转义 HTML 标签）
- <%- 输出非转义的数据到模板
- <%# 注释标签，不执行、不输出内容
- %% 输出字符串 '<%'
- %> 一般结束标签
- -%> 删除紧随其后的换行符
- %> 将结束标签后面的空格符删除

## 参数

### 简单版

| 参数名          | 类型     | 参数说明   | 默认值 |
|--------------|--------|--------|-----|
| template     | string | 模版引擎   | ''  |
| templateData | any    | 模版引擎数据 | {}  |

### 完整版

| 参数名          | 类型                | 参数说明   | 默认值         |
|--------------|-------------------|--------|-------------|
| template     | string            | 模版引擎   | ''          |
| templateData | any               | 模版引擎数据 | {}          |
| options      | ITemplateOptionns | 模版引擎参数 | 参考options参数 |

### options参数[ITemplateOptionns]

| 参数名            | 类型      | 参数说明                        | 默认值      |
|----------------|---------|-----------------------------|----------|
| openDelimiter  | string  | 用于打开分隔符的字符，默认为“<”           | "<"      |
| closeDelimiter | string  | 用于结束分隔符的字符，默认为“>”           | ">"      |
| delimiter      | string  | 用于内部分隔符的字符，默认为“%”           | "%"      |
| strict         | boolean | 当设置为“true”时，生成的函数处于严格模式     | false    |
| removeSpace    | boolean | 删除所有可安全删除的空白字符，包括开始与结尾处的空格  | false    |
| localsName     | string  | 不使用默认值时用于存储局部变量的对象的名称locals | "locals" |
| _with          | boolean | 是否使用with() {}构造             | false    |

