import React from 'react';

export default {
    title: 'Class Component',
};
export const Example = () => {
    return (
        <Title title={'hello'}/>
    )
}

class Title extends React.Component<{ title: string }, { count: number }> {
    constructor(props: { title: string }) {
        super(props);
        this.state = {count: 0}
    };

    interval: ReturnType<typeof setInterval> | undefined;

    componentDidMount() {
        this.interval = setInterval(() => {
            console.log(this.state.count)
            this.increase()
        }, 1000)
    }

    componentWillUnmount() {
        console.log('destroy')
        if(this.interval)
        clearInterval(this.interval)
    }

    increase = () => {
        this.setState({count: this.state.count + 1})
    }

    render() {
        return <div>
            <h2>{this.props.title}</h2>
            <p>{this.state.count}</p>
        </div>
    }
}