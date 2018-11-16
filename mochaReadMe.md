## it块执行时，传入done参数，测试结束时执行该函数
1. 一个具体的测试单元
2. it.only()
3. it.skip()

## describe提供四个钩子 before(), after(), beforeEach(), afterEach();
1. 相当于模块划分，可以进行嵌套
2. describe.only()
3. describe.skip()

## 其他方法
1. this.slow(1000) 定义多久算慢
2. this.timeout(1000) 定义一个模块执行时间
3. 异步模块需要用run()进行调用
4. 可以用await 与Promise一起用