/* obj:滚动对象
         * target:滚动对象个数
         * callback:回调函数
         * 函数变动值：根据子盒子的数量，需变动ar和al点击事件的num(具体修改在对应位置有注释)
         * 需手动添加(总盒子个数 % 页面显示子盒子个数)的子盒子，顺序按照第一个顺位排下
         */
        function animate(obj,target,callback){
            clearInterval(obj.timer)
            obj.timer = setInterval(()=>{
                var step = (target - obj.offsetLeft) / 10
                step = step > 0 ? Math.ceil(step) : Math.floor(step)
                if(obj.offsetLeft == target){
                    clearInterval(obj.timer)
                    if(callback){
                        callback()
                    }
                }
                obj.style.left = obj.offsetLeft + step + 'px'
            },15)
        }
        function rotation(InnerBox,Box,Content,al,ar){
            var ContentX = Content[0].offsetWidth;
            InnerBox.style.width = ContentX * Content.length +'px'
            Box.addEventListener('mouseenter',()=>{
                al.style.display = 'block'
                ar.style.display = 'block'
                clearInterval(timer);
                timer = null;
            })
            Box.addEventListener('mouseleave',()=>{
                al.style.display = 'none'
                ar.style.display = 'none'
                timer = setInterval(()=>{ar.click()},2000)
                console.log(1111)
            })
            var num = 0;
            var first = InnerBox.children[0].cloneNode(true);
            
            var flag = true;
            al.addEventListener('click',()=>{
                if(flag){
                    flag = flase;
                    if(num == 0){
                        num = Innerbox.clidren[0].length // - (总盒子个数 % 页面显示子盒子个数) -2
                        InnerBox.style.right = -num * ContentX + 'px'
                    }
                    num--;
                    anumate(InnerBox, -num * ContentX, ()=>{flag = true})
                    // circle--;控制小圆点
                }
            })
            ar.addEventListener('click',()=>{
                if(flag){
                    flag = false;
                    if(num == InnerBox.children.length - 3){//轮播页面多少个子盒子就减多少个
                        InnerBox.style.left = 0
                        num = 0
                    }
                    num++;
                    animate(InnerBox, -num * ContentX, ()=>{flag = true})
                }
            })
            var timer = setInterval(()=>{ar.click()},2000)
        }
        
