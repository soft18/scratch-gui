/**
 * Created by liamios on 2018/2/10.
 * 在合适的地方，加载全局变量，方便其它地方使用
 * // import myConfig from '../../mycode/config/MyConfig'
 *
 */

export default new class MyConfig {
    constructor() {
        try {
            //console.log('MyAi MyConfig')
        } catch (error) {
            console.error(error);
        }
    }

    setVm(vm){
        this.vm = vm ;
    }

}
