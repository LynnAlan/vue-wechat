<template>
  <div class="">
    test
  </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        computed: {},
        methods: {},
        mounted() {

          var str = '1236547890';
          var re = /(\d)(?=(?:\d{3})+$)/g;
          str.replace(re,function($0,$1){
            //alert($0);   代表每次匹配成功的结果 : aa dd jj kk l sssssssssssssssss
            //alert($1);  代表每次匹配成功的第一个子项，也就是\w:  a d j k l S
//            console.log($0,'$0');
//            console.log($1,'$1');
          });
          function formatNum(num,n){
              num = 1236547890;
              n = 3
            //参数说明：num 要格式化的数字 n 保留小数位
            num = String(num);
            var re = /(\d+)(\d{3})/;
            while(re.test(num)) {
              num = num.replace(re,"$1,$2");
              num.replace(re,function ($0,$1,$2) {
//                console.log($0,'00');
                console.log($1,$2);
 //               console.log($2,'222');
              })
            }
            console.log(num)
            return num;
          }
          formatNum(str);
          //console.log( str.replace(/(\d)(?=(?:\d{3})+$)/g, '$1,'))
        }
    }
</script>

<style  scoped="">

</style>
