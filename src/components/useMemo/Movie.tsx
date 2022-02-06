type PropsType = {
    title: string;
    releaseDate: string;
    memo: boolean;
    callback:()=>void;
}
export const Movie = ({title, releaseDate, memo,callback}: PropsType) => {
    console.log(memo?'render MemorizeMovie':'render Movie');
    return (
        <div>
            <p>{title}</p>
            <p>{releaseDate}</p>
            <button onClick={callback}>click</button>
        </div>
    )
}