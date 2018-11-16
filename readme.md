1. 安装ts-loader
2. webpack loader配置

```javascript
{
    test: /\.vue$/,
    loader: 'vue-loader',
    options: vueLoaderConfig
},
{
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: [
      "babel-loader",
      {
        loader: "ts-loader",
        options: { appendTsxSuffixTo: [/\.vue$/] }
      }
    ]
}
```

vue-loader配置

3. tsconfig.json配置

```javascript
{
  "include": [
    "src/*",
    "src/**/*"
  ],
  "exclude": [
    "node_modules"
  ],
  "compilerOptions": {
    // types option has been previously configured
    "types": [
      // add node as an option
      "node"
    ],
    // typeRoots option has been previously configured
    "typeRoots": [
      // add path to @types
      "node_modules/@types"
    ],
    // 以严格模式解析
    "strict": true,
    // 在.tsx文件里支持JSX
    "jsx": "preserve",
    // 使用的JSX工厂函数
    "jsxFactory": "h",
    // 允许从没有设置默认导出的模块中默认导入
    "allowSyntheticDefaultImports": true,
    // 启用装饰器
    "experimentalDecorators": true,
    "strictFunctionTypes": false,
    // 允许编译javascript文件
    "allowJs": true,
    // 采用的模块系统
    "module": "esnext",
    // 编译输出目标 ES 版本
    "target": "es5",
    // 如何处理模块
    "moduleResolution": "node",
    // 在表达式和声明上有隐含的any类型时报错
    "noImplicitAny": true,
    "lib": [
      "dom",
      "es5",
      "es6",
      "es7",
      "es2015.promise"
    ],
    "sourceMap": true,
    "pretty": true
  }
}

或
{
  // 编译选项
  "compilerOptions": {
    // 输出目录
    "outDir": "./output",
    // 是否包含可以用于 debug 的 sourceMap
    "sourceMap": true,
    // 以严格模式解析
    "strict": true,
    // 采用的模块系统
    "module": "esnext",
    // 如何处理模块
    "moduleResolution": "node",
    // 编译输出目标 ES 版本
    "target": "es5",
    // 允许从没有设置默认导出的模块中默认导入
    "allowSyntheticDefaultImports": true,
    // 将每个文件作为单独的模块
    "isolatedModules": false,
    // 启用装饰器
    "experimentalDecorators": true,
    // 启用设计类型元数据（用于反射）
    "emitDecoratorMetadata": true,
    // 在表达式和声明上有隐含的any类型时报错
    "noImplicitAny": false,
    // 不是函数的所有返回路径都有返回值时报错。
    "noImplicitReturns": true,
    // 从 tslib 导入外部帮助库: 比如__extends，__rest等
    "importHelpers": true,
    // 编译过程中打印文件名
    "listFiles": true,
    // 移除注释
    "removeComments": true,
    "suppressImplicitAnyIndexErrors": true,
    // 允许编译javascript文件
    "allowJs": true,
    // 解析非相对模块名的基准目录
    "baseUrl": "./",
    // 指定特殊模块的路径
    "paths": {
      "jquery": [
        "node_modules/jquery/dist/jquery"
      ]
    },
    // 编译过程中需要引入的库文件的列表
    "lib": [
      "dom",
      "es2015",
      "es2015.promise"
    ]
  }
}
```

4. 入口文件为.ts文件
5. vue-shims.d.ts 文件告诉Typescript `.vue`交由编辑器来处理

```javascript
declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}
```

6. Vue-class-Component官方维护的Typescript装饰器
7. 引入第三方库时需要额外声明文件，types目录下，建声明文件tools.d.ts；虽然库已在本地安装，但typescript还是提示找不到，因为typescript从node_modules/@types目录下找模块声明，但库并没有提供typescript的声明文件，所以需要自己添加。

Vue特性修饰器：Vue-Property-Decorator
Vuex修饰器：Vuex-Class

```javascript
declare module 'vue-awesome-swiper' {
  export const swiper: any
  export const swiperSlide: any
}

declare module 'vue-lazyload'
```


```
