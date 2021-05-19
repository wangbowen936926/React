import SockJS from 'sockjs-client';

/**
 * 参数：[onOpen|onMessage|onClose|onError] = func，[socket连接成功时触发|连接关闭|发送消息|连接错误]
 * timeout：连接超时时间
 * @type {module.webSocket}
 */

class webSocket {

    constructor (options = {}) {
        this.param = options;
        this.socket = null;
        this.isSuccess = true;
        this.reconnectCount = 0;
        this.taskRemindInterval = null;
    }

    //连接
    connection = () => {

        let { url, timeout } = this.options;
        //检测浏览器是否支持webSocket
        if ('WebSocket' in window) {

            this.socket = new WebSocket(url);

        }else if ('MozWebSocket' in window) {

            this.socket = new MozWebSocket(url);

        }else{
            // 模拟WebSocket
            this.socket = new SockJS(url);
        }
        this.socket.onopen = this.onOpen;
        this.socket.onmessage = this.onMessage;
        this.socket.onclose = this.onClose;
        this.socket.onerror = this.onError;
        this.socket.send = this.sendMessage;
        // 检测返回的状态码 如果socket.readyState不等于1则连接失败，关闭连接
        if (timeout) {

            let time = setTimeout(() => {

                if(this.socket && this.socket.readyState !== 1) this.socket.close();
                clearInterval(time);

            }, timeout)

        }
    }

    //连接建立时触发
    onOpen = () => {
        //连接成功将标识符改为false
        this.isSuccess = false;
        let { onOpen } = this.options;
        onOpen && onOpen();
    }

    //客户端接收服务端数据时触发
    onMessage = (data) => {

        let { onMessage } = this.options;
        onMessage && onMessage(data);

    }

    //连接关闭时触发
    onClose = (e) => {

        this.isSuccess = true;
        let { onClose } = this.options;
        onClose && onClose();
        // 根据后端返回的状态码做操作
        // 我的项目是当前页面打开两个或者以上，就把当前以打开的socket关闭
        // 否则就20秒重连一次，直到重连成功为止 
        if(e.code == '4500'){
            this.socket.close();
        }else{
            this.taskRemindInterval = setInterval(()=>{
                if(this.isSuccess){
                    this.connection();
                }else{
                    clearInterval(this.taskRemindInterval)
                }
            }, 20000)
        }

    }

    //通信发生错误时触发
    onError = (e) => {

        let { onError } = this.options;
        this.socket = null;
        onError && onError(e);

    }

    //发送数据
    sendMessage = (data) => {
        if(this.socket) this.socket.send(JSON.stringify(data));
    }

}