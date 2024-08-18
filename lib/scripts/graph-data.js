let graphData={graphOptions:{attractionForce:1,linkLength:10,repulsionForce:150,centralForce:3,edgePruning:100,minNodeRadius:3,maxNodeRadius:7},isInitialized:!0,paths:["blender/几何节点学习/边的面拐.html","blender/几何节点学习/几何节点学习.html","blender/示例文件/示例文件.html","blender/示例文件/ex_按距离合并.html","blender/示例文件/ex_边界框.html","blender/示例文件/ex_表面细分.html","blender/示例文件/ex_拆分边.html","blender/示例文件/ex_翻转面.html","blender/示例文件/ex_分离几何体.html","blender/示例文件/ex_分离元素.html","blender/示例文件/ex_复制元素.html","blender/示例文件/ex_合并几何.html","blender/示例文件/ex_几何接近.html","blender/示例文件/ex_挤出网格.html","blender/示例文件/ex_删除几何体.html","blender/示例文件/ex_设置位置.html","blender/示例文件/ex_缩放元素.html","blender/示例文件/ex_细分网格.html","blender/示例文件/ex_元素排列.html","blender/geo-node/布局/框.html","blender/geo-node/布局/转接点.html","blender/geo-node/材质/材质编号.html","blender/geo-node/材质/材质选择.html","blender/geo-node/材质/设置材质.html","blender/geo-node/材质/设置材质编号.html","blender/geo-node/材质/替换材质.html","blender/geo-node/点/点.html","blender/geo-node/点/点-转换为-顶点.html","blender/geo-node/点/点-转换为-曲线.html","blender/geo-node/点/点-转换为-体积.html","blender/geo-node/点/分布点于面上.html","blender/geo-node/点/分布点于体积内.html","blender/geo-node/点/设置点半径.html","blender/geo-node/几何数据/采样/采样.html","blender/geo-node/几何数据/采样/采样编号.html","blender/geo-node/几何数据/采样/采样最近.html","blender/geo-node/几何数据/采样/光线投射.html","blender/geo-node/几何数据/采样/几何接近_geometry-proximity.html","blender/geo-node/几何数据/采样/最近编号.html","blender/geo-node/几何数据/操作/按距离合并_merge-by-distance.html","blender/geo-node/几何数据/操作/边界框_bounding-box.html","blender/geo-node/几何数据/操作/变换几何体_transform-geometry.html","blender/geo-node/几何数据/操作/拆分为实例.html","blender/geo-node/几何数据/操作/分离几何体.html","blender/geo-node/几何数据/操作/分离元素_separate-components.html","blender/geo-node/几何数据/操作/复制元素_duplicate-elements.html","blender/geo-node/几何数据/操作/烘焙.html","blender/geo-node/几何数据/操作/删除几何体_delete-geometry.html","blender/geo-node/几何数据/操作/凸壳.html","blender/geo-node/几何数据/操作/元素排序_sort-elements.html","blender/geo-node/几何数据/读取/半径.html","blender/geo-node/几何数据/读取/编号.html","blender/geo-node/几何数据/读取/读取.html","blender/geo-node/几何数据/读取/法向.html","blender/geo-node/几何数据/读取/位置.html","blender/geo-node/几何数据/读取/已命名属性.html","blender/geo-node/几何数据/读取/id.html","blender/geo-node/几何数据/写入/设置位置_set-postition.html","blender/geo-node/几何数据/写入/设置id.html","blender/geo-node/几何数据/写入/写入.html","blender/geo-node/几何数据/合并几何_join-geometry.html","blender/geo-node/几何数据/几何到实例.html","blender/geo-node/模拟/模拟区.html","blender/geo-node/模拟/未命名.html","blender/geo-node/曲线/采样/采样曲线.html","blender/geo-node/曲线/操作/插值曲线.html","blender/geo-node/曲线/操作/反转曲线.html","blender/geo-node/曲线/操作/曲线-转换为-点.html","blender/geo-node/曲线/操作/曲线-转换为-网格.html","blender/geo-node/曲线/操作/填充曲线.html","blender/geo-node/曲线/操作/细分曲线.html","blender/geo-node/曲线/操作/修剪曲线.html","blender/geo-node/曲线/操作/圆角曲线.html","blender/geo-node/曲线/操作/在表面上变形曲线.html","blender/geo-node/曲线/操作/重采样曲线.html","blender/geo-node/曲线/读取/端点选择.html","blender/geo-node/曲线/读取/控制柄类型选择.html","blender/geo-node/曲线/读取/曲线控制柄位置.html","blender/geo-node/曲线/读取/曲线切向.html","blender/geo-node/曲线/读取/曲线倾斜.html","blender/geo-node/曲线/读取/曲线长度.html","blender/geo-node/曲线/读取/是否闭合样条线.html","blender/geo-node/曲线/读取/样条线参数.html","blender/geo-node/曲线/读取/样条线精度.html","blender/geo-node/曲线/读取/样条线长度.html","blender/geo-node/曲线/基本体/贝塞尔线段.html","blender/geo-node/曲线/基本体/二次型贝塞尔.html","blender/geo-node/曲线/基本体/曲线螺旋.html","blender/geo-node/曲线/基本体/曲线圆环.html","blender/geo-node/曲线/基本体/曲线直线.html","blender/geo-node/曲线/基本体/四边形.html","blender/geo-node/曲线/基本体/星形.html","blender/geo-node/曲线/基本体/圆弧.html","blender/geo-node/曲线/拓扑/点所属曲线.html","blender/geo-node/曲线/拓扑/偏移曲线中的点.html","blender/geo-node/曲线/拓扑/曲线的点.html","blender/geo-node/曲线/写入/设置控制柄类型.html","blender/geo-node/曲线/写入/设置控制柄位置.html","blender/geo-node/曲线/写入/设置曲线半径.html","blender/geo-node/曲线/写入/设置曲线法向.html","blender/geo-node/曲线/写入/设置曲线倾斜.html","blender/geo-node/曲线/写入/设置样条线闭合.html","blender/geo-node/曲线/写入/设置样条线精度.html","blender/geo-node/曲线/写入/设置样条线类型.html","blender/geo-node/群组/组输出.html","blender/geo-node/群组/组输入.html","blender/geo-node/实例/平移实例.html","blender/geo-node/实例/设置实例变换.html","blender/geo-node/实例/实例到点.html","blender/geo-node/实例/实例的变换.html","blender/geo-node/实例/实例的缩放.html","blender/geo-node/实例/实例的旋转.html","blender/geo-node/实例/实例化于点上.html","blender/geo-node/实例/实现实例.html","blender/geo-node/实例/缩放实例.html","blender/geo-node/实例/旋转实例.html","blender/geo-node/实用工具/场/累计场.html","blender/geo-node/实用工具/场/在编号处评估.html","blender/geo-node/实用工具/场/在域上评估.html","blender/geo-node/实用工具/矩阵/变换点.html","blender/geo-node/实用工具/矩阵/变换方向.html","blender/geo-node/实用工具/矩阵/分离变换.html","blender/geo-node/实用工具/矩阵/分离矩阵.html","blender/geo-node/实用工具/矩阵/合并变换.html","blender/geo-node/实用工具/矩阵/合并矩阵.html","blender/geo-node/实用工具/矩阵/矩阵相乘.html","blender/geo-node/实用工具/矩阵/逆矩阵.html","blender/geo-node/实用工具/矩阵/投影点.html","blender/geo-node/实用工具/矩阵/转置矩阵.html","blender/geo-node/实用工具/矢量/分离xyz.html","blender/geo-node/实用工具/矢量/合并xyz.html","blender/geo-node/实用工具/矢量/混合矢量.html","blender/geo-node/实用工具/矢量/矢量曲线.html","blender/geo-node/实用工具/矢量/矢量旋转.html","blender/geo-node/实用工具/矢量/矢量运算.html","blender/geo-node/实用工具/文本/合并字符串.html","blender/geo-node/实用工具/文本/数值-转换为字符串.html","blender/geo-node/实用工具/文本/特殊字符.html","blender/geo-node/实用工具/文本/替换字符串.html","blender/geo-node/实用工具/文本/字符串-转换为-曲线.html","blender/geo-node/实用工具/文本/字符串切片.html","blender/geo-node/实用工具/文本/字符串长度.html","blender/geo-node/实用工具/旋转/对齐旋转至矢量.html","blender/geo-node/实用工具/旋转/反向旋转.html","blender/geo-node/实用工具/旋转/累加旋转.html","blender/geo-node/实用工具/旋转/欧拉-转换为-旋转.html","blender/geo-node/实用工具/旋转/四元数-转换为-旋转.html","blender/geo-node/实用工具/旋转/旋转-转换为-欧拉.html","blender/geo-node/实用工具/旋转/旋转-转换为-四元数.html","blender/geo-node/实用工具/旋转/旋转-转换为-轴角度.html","blender/geo-node/实用工具/旋转/旋转矢量.html","blender/geo-node/实用工具/旋转/轴角度-转换为-旋转.html","blender/geo-node/实用工具/旋转/轴向-转换为-旋转.html","blender/geo-node/实用工具/颜色/分离颜色.html","blender/geo-node/实用工具/颜色/合并颜色.html","blender/geo-node/实用工具/颜色/黑体.html","blender/geo-node/实用工具/颜色/混合颜色.html","blender/geo-node/实用工具/颜色/颜色.html","blender/geo-node/实用工具/颜色/颜色渐变.html","blender/geo-node/实用工具/颜色/rgb-曲线.html","blender/geo-node/实用工具/已弃用/对齐欧拉至矢量.html","blender/geo-node/实用工具/已弃用/旋转欧拉.html","blender/geo-node/实用工具/已弃用/已弃用.html","blender/geo-node/实用工具/运算/比较.html","blender/geo-node/实用工具/运算/布尔运算.html","blender/geo-node/实用工具/运算/浮点曲线.html","blender/geo-node/实用工具/运算/浮点数-转-整数.html","blender/geo-node/实用工具/运算/混合.html","blender/geo-node/实用工具/运算/钳制.html","blender/geo-node/实用工具/运算/映射范围.html","blender/geo-node/实用工具/运算/运算.html","blender/geo-node/实用工具/运算/运算-.md/运算-.md.html","blender/geo-node/实用工具/编号切换.html","blender/geo-node/实用工具/菜单切换.html","blender/geo-node/实用工具/切换.html","blender/geo-node/实用工具/随机值.html","blender/geo-node/实用工具/重复区.html","blender/geo-node/输出/预览器.html","blender/geo-node/输出/组输出.html","blender/geo-node/输入/常量/布尔.html","blender/geo-node/输入/常量/材质.html","blender/geo-node/输入/常量/常量.html","blender/geo-node/输入/常量/矢量.html","blender/geo-node/输入/常量/图像.html","blender/geo-node/输入/常量/旋转.html","blender/geo-node/输入/常量/颜色.html","blender/geo-node/输入/常量/整数.html","blender/geo-node/输入/常量/值.html","blender/geo-node/输入/常量/字符串.html","blender/geo-node/输入/场景/场景.html","blender/geo-node/输入/场景/场景时间.html","blender/geo-node/输入/场景/活动摄像机.html","blender/geo-node/输入/场景/集合信息.html","blender/geo-node/输入/场景/是否为视图.html","blender/geo-node/输入/场景/图像信息.html","blender/geo-node/输入/场景/物体信息.html","blender/geo-node/输入/场景/自身物体.html","blender/geo-node/输入/群组/群组.html","blender/geo-node/输入/群组/组输入.html","blender/geo-node/属性/捕捉属性.html","blender/geo-node/属性/存储已命名属性.html","blender/geo-node/属性/模糊属性.html","blender/geo-node/属性/删除已命名属性.html","blender/geo-node/属性/属性统计.html","blender/geo-node/属性/域大小.html","blender/geo-node/体积/操作/操作.html","blender/geo-node/体积/操作/体积-转-网格.html","blender/geo-node/体积/基本体/基本体.html","blender/geo-node/体积/基本体/体积立方体.html","blender/geo-node/网格/采样/采样最近的表面.html","blender/geo-node/网格/采样/采样uv表面.html","blender/geo-node/网格/操作/边路径到曲线.html","blender/geo-node/网格/操作/边路径到选中项.html","blender/geo-node/网格/操作/表面细分_subdivision-surface.html","blender/geo-node/网格/操作/拆分边_split-edges.html","blender/geo-node/网格/操作/对偶网格.html","blender/geo-node/网格/操作/翻转面_flip-faces.html","blender/geo-node/网格/操作/挤出网格_extrude-mesh.html","blender/geo-node/网格/操作/三角化.html","blender/geo-node/网格/操作/缩放元素_scale-elements.html","blender/geo-node/网格/操作/网格-转-体积.html","blender/geo-node/网格/操作/网格-转换为-点.html","blender/geo-node/网格/操作/网格-转换为曲线.html","blender/geo-node/网格/操作/网格布尔.html","blender/geo-node/网格/操作/细分网格_subdivide-mesh.html","blender/geo-node/网格/读取/边到面组.html","blender/geo-node/网格/读取/边的顶点.html","blender/geo-node/网格/读取/边的夹角.html","blender/geo-node/网格/读取/边的邻面.html","blender/geo-node/网格/读取/边是否平滑着色.html","blender/geo-node/网格/读取/顶点的领项.html","blender/geo-node/网格/读取/面的领项.html","blender/geo-node/网格/读取/面的面积.html","blender/geo-node/网格/读取/面是否平滑着色.html","blender/geo-node/网格/读取/面是否平坦.html","blender/geo-node/网格/读取/面组边界.html","blender/geo-node/网格/读取/网格孤岛.html","blender/geo-node/网格/读取/最短边路径.html","blender/geo-node/网格/基本体/经纬球.html","blender/geo-node/网格/基本体/棱角球.html","blender/geo-node/网格/基本体/立方体.html","blender/geo-node/网格/基本体/网格圆环.html","blender/geo-node/网格/基本体/网格直线.html","blender/geo-node/网格/基本体/栅格.html","blender/geo-node/网格/基本体/柱形.html","blender/geo-node/网格/基本体/锥形.html","blender/geo-node/网格/拓扑/边的拐角.html","blender/geo-node/网格/拓扑/顶点的边.html","blender/geo-node/网格/拓扑/顶点的拐角.html","blender/geo-node/网格/拓扑/拐角的边.html","blender/geo-node/网格/拓扑/拐角的顶点.html","blender/geo-node/网格/拓扑/拐角所属面.html","blender/geo-node/网格/拓扑/面的拐角.html","blender/geo-node/网格/拓扑/面内拐角偏移.html","blender/geo-node/网格/写入/设置着色平滑.html","blender/geo-node/网格/uv/拼排uv孤岛.html","blender/geo-node/网格/uv/uv展开.html","blender/geo-node/纹理/白噪波纹理.html","blender/geo-node/纹理/波浪纹理.html","blender/geo-node/纹理/渐变纹理.html","blender/geo-node/纹理/迷幻纹理.html","blender/geo-node/纹理/棋盘格纹理.html","blender/geo-node/纹理/图形纹理.html","blender/geo-node/纹理/沃罗诺伊纹理.html","blender/geo-node/纹理/噪波纹理.html","blender/geo-node/纹理/砖墙纹理.html","blender/geo-node/geo-node.html","blender/blender.html"],nodeCount:268,linkSources:[37,39,40,43,44,45,47,49,57,60,213,214,216,217,219,224],linkTargets:[12,3,4,8,9,10,14,18,15,11,5,6,7,13,16,17],labels:["边的面拐","几何节点学习","示例文件","EX_按距离合并","EX_边界框","EX_表面细分","EX_拆分边","EX_翻转面","EX_分离几何体","EX_分离元素","EX_复制元素","EX_合并几何","EX_几何接近","EX_挤出网格","EX_删除几何体","EX_设置位置","EX_缩放元素","EX_细分网格","EX_元素排列","框","转接点","材质编号","材质选择","设置材质","设置材质编号","替换材质","点","点 转换为 顶点","点 转换为 曲线","点 转换为 体积","分布点于面上","分布点于体积内","设置点半径","采样","采样编号","采样最近","光线投射","几何接近_Geometry Proximity","最近编号","按距离合并_Merge by Distance","边界框_Bounding Box","变换几何体_Transform Geometry","拆分为实例","分离几何体","分离元素_Separate Components","复制元素_Duplicate Elements","烘焙","删除几何体_Delete Geometry","凸壳","元素排序_Sort Elements","半径","编号","读取","法向","位置","已命名属性","ID","设置位置_Set Postition","设置ID","写入","合并几何_Join Geometry","几何到实例","模拟区","未命名","采样曲线","插值曲线","反转曲线","曲线 转换为 点","曲线 转换为 网格","填充曲线","细分曲线","修剪曲线","圆角曲线","在表面上变形曲线","重采样曲线","端点选择","控制柄类型选择","曲线控制柄位置","曲线切向","曲线倾斜","曲线长度","是否闭合样条线","样条线参数","样条线精度","样条线长度","贝塞尔线段","二次型贝塞尔","曲线螺旋","曲线圆环","曲线直线","四边形","星形","圆弧","点所属曲线","偏移曲线中的点","曲线的点","设置控制柄类型","设置控制柄位置","设置曲线半径","设置曲线法向","设置曲线倾斜","设置样条线闭合","设置样条线精度","设置样条线类型","组输出","组输入","平移实例","设置实例变换","实例到点","实例的变换","实例的缩放","实例的旋转","实例化于点上","实现实例","缩放实例","旋转实例","累计场","在编号处评估","在域上评估","变换点","变换方向","分离变换","分离矩阵","合并变换","合并矩阵","矩阵相乘","逆矩阵","投影点","转置矩阵","分离XYZ","合并XYZ","混合矢量","矢量曲线","矢量旋转","矢量运算","合并字符串","数值 转换为字符串","特殊字符","替换字符串","字符串 转换为 曲线","字符串切片","字符串长度","对齐旋转至矢量","反向旋转","累加旋转","欧拉 转换为 旋转","四元数 转换为 旋转","旋转 转换为 欧拉","旋转 转换为 四元数","旋转 转换为 轴角度","旋转矢量","轴角度 转换为 旋转","轴向 转换为 旋转","分离颜色","合并颜色","黑体","混合颜色","颜色","颜色渐变","RGB 曲线","对齐欧拉至矢量","旋转欧拉","已弃用","比较","布尔运算","浮点曲线","浮点数 转 整数","混合","钳制","映射范围","运算","运算 ","编号切换","菜单切换","切换","随机值","重复区","预览器","组输出","布尔","材质","常量","矢量","图像","旋转","颜色","整数","值","字符串","场景","场景时间","活动摄像机","集合信息","是否为视图","图像信息","物体信息","自身物体","群组","组输入","捕捉属性","存储已命名属性","模糊属性","删除已命名属性","属性统计","域大小","操作","体积 转 网格","基本体","体积立方体","采样最近的表面","采样UV表面","边路径到曲线","边路径到选中项","表面细分_Subdivision Surface","拆分边_Split Edges","对偶网格","翻转面_Flip Faces","挤出网格_Extrude Mesh","三角化","缩放元素_Scale Elements","网格 转 体积","网格 转换为 点","网格 转换为曲线","网格布尔","细分网格_Subdivide Mesh","边到面组","边的顶点","边的夹角","边的邻面","边是否平滑着色","顶点的领项","面的领项","面的面积","面是否平滑着色","面是否平坦","面组边界","网格孤岛","最短边路径","经纬球","棱角球","立方体","网格圆环","网格直线","栅格","柱形","锥形","边的拐角","顶点的边","顶点的拐角","拐角的边","拐角的顶点","拐角所属面","面的拐角","面内拐角偏移","设置着色平滑","拼排UV孤岛","UV展开","白噪波纹理","波浪纹理","渐变纹理","迷幻纹理","棋盘格纹理","图形纹理","沃罗诺伊纹理","噪波纹理","砖墙纹理","Geo Node","Blender"],radii:[3,3,3,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,7,3,7,7,3,3,7,7,7,3,7,3,7,3,3,3,3,3,3,3,7,3,3,7,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,7,7,3,7,7,3,7,3,3,3,3,7,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],linkCount:16}