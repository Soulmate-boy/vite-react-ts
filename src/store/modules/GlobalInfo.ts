import { proxy } from 'valtio'

interface IState {
    count: number
}

class State implements IState {
    count = 0







}

export default proxy(new State())
