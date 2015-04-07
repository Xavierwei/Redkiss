/**
 * Created by frank.zhang on 4/2/15.
 */
var config={};
console.log('start');
!function(config){
    config.name="czhang";
    config.age="19";
    !function(util){
        console.log('util');
    }(config.util);
}(config||(config={}))
console.log('end');
config.util;