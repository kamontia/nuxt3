import { Ref } from 'vue'

export const useTitle = () => {
    const title = useState<string>('title', () => 'Hello world')

    const changeTitle = (title: Ref<string>) => (value: string) => {
        title.value = value;
    }

    return {
        title: readonly(title),
        changeTitle: changeTitle(title)
    }

}


export const useCounterState = () => {
    const count = useState<number>('count', () => 0)

    return {
        counter: readonly(count),
        countUp: countUp(count),
        countDown: countDown(count),
        Reset: Reset(count)
    }
}

const countUp = (count: Ref<number>) => () => {
    count.value++

}
const countDown = (count: Ref<number>) => () => {
    count.value--
}
const Reset = (count: Ref<number>) => () => {
    count.value = 0
}

