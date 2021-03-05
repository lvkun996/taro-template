import { useEffect, useState, useRef } from 'react'

/**
 * @date 2021/2/23
 * 
 * @description 同步useState 
 * 
 * @param { T } params 参数 
 * 
 * @return { Array }
 * 
 * @example 
 *  
 *  const [name , setName] = useStateSync<string>('怡宝')
 *  
 *  useEffect( () => {
 *      setName('农夫山泉', (res) => {
 *         console.log(res)  // 农夫山泉
 *      })
 *  }, [])
 * 
 */


export const useStateSync = <T>(params: T): Array<any> => {

    const cbRef = useRef((_params: T) => {})

    const [ state, setState ] = useState<T>(params)

    useEffect( () => {
        cbRef.current &&  cbRef.current(state)
    }, [state] )

 
    return [state,  (val: T, callback: (_params: T) => void): void => {
        cbRef.current = callback;
        setState(val);
    }]
}

 
/**
 * @description setInterval hook
 * @param callback 执行的回调函数
 * @param delay 定时器的执行间隔，传入null 则停止计时器 
 * @example 
 *  useInterval( () => {
 *   setXxxx(x + 1)
 * }, x ? 1000 : null) 
 */

 type callback = () => void

export const useInterval = (callback: () => void, delay: number | null) => {
    const savedCallback = useRef<callback>();
  
    useEffect(() => {
      savedCallback.current = callback;
    });
  
    useEffect(() => {
      function tick() {
        savedCallback.current && savedCallback.current()
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
     
    }, [delay]);
  }