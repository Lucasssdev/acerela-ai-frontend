import useStore from '@src/zustand/store'
import { Store, Actions } from '../../src/zustand/store'

export default function useController() {
    const language = useStore((state: Store & Actions) => state.language)

    return {}
}
