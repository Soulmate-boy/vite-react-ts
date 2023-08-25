import { state } from '@/store/index'

const { UserInfo } = state;

export default {
    UserInfo: {
        inc: () => {
            ++UserInfo.count
        }
    }
}