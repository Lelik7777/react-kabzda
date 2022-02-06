import {Movie} from './Movie';
import React, {useCallback, useEffect, useState} from 'react';

const MemoizedMemo = React.memo(Movie);

export const RenderMovie = () => {
    const [, setToggle] = useState(false);
    useEffect(() => {
        const interval = setInterval(() => {
            setToggle(toggle => !toggle);
        }, 3000);
        return () => {
            clearInterval(interval);
        }
    }, []);
    const onClick =useCallback( () => {
      alert('oops');
    },[])

    return (<>
        <Movie title={'current day1'}
               releaseDate={'Feb 06'}
               memo={false}
               callback={onClick}/>
        <MemoizedMemo title={'current day2'}
                      releaseDate={'Feb 06'}
                      memo={true}
                      callback={onClick}/>
    </>)
}