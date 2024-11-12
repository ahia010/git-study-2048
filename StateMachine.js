class StateMachine {
    constructor() {
        this.state = 'idle';
        this.handlers = {
            idle: this.handleIdle,
            processing: this.handleProcessing,
            completed: this.handleCompleted
        };
    }

    handleIdle(token) {
        if (token === 'start') {
            console.log('开始处理...');
            this.transitionTo('processing');
        } else {
            console.log('等待开始指令...');
        }
    }

    handleProcessing(token) {
        if (token === 'end') {
            console.log('处理完成...');
            this.transitionTo('completed');
        } else {
            console.log(`处理数据: ${token}`);
        }
    }

    handleCompleted(token) {
        console.log('已完成，等待下一次开始...');
    }

    transitionTo(state) {
        this.state = state;
        console.log(`状态转换至: ${state}`);
    }

    processToken(token) {
        const handler = this.handlers[this.state];
        if (handler) {
            handler.call(this, token);
        } else {
            throw new Error(`未知状态: ${this.state}`);
        }
    }
}

