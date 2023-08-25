import { proxy } from 'valtio'

interface IState {
    count: number
}

class State implements IState {
    count = 0

    countJIA() {
        this.count++
    }

    countJIAN() {
        this.count--
    }

}


export default proxy(new State())
