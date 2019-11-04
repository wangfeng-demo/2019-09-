/* 
 * 需求：创建A/B/C三个模块 
 *   A中有一个SUM方法实现任意数求和
 *   B中有一个办法AVG是求平均数：去掉最大和最小值，剩余值求和（调取A中的SUM方法，实现求和）
 *   C中调取B中的AVG，传递：98 95 85 67 25，实现求一堆数中的平均数
 */
let {
	avg
} = require('./B');
console.log(avg(98, 95, 85, 67, 25));