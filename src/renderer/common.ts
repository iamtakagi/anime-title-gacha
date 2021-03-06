import { Work } from '../annict';
import { API_BASEURL, ARM_ENDPOINT } from './consts';

const randomPick = <T> (array: Array<T>) => array[Math.floor(Math.random() * array.length)]

const pickRandomWork = async () => { 
    const annictIds = (await fetch(ARM_ENDPOINT).then((res) => res.json()) as (number | null)[])
    const annictId = randomPick(annictIds.filter(v => v !== null))
    const work = (await fetch(`${API_BASEURL}/works/${annictId}`).then(
        (res) => res.json()
      ) as Work);
    return work;
}

export { pickRandomWork }