import React from 'react'

export interface LoadingbarStateInterface {
    value: Number
}

export default class Loadingbar extends React.Component<{}, LoadingbarStateInterface> {

    constructor(props: any) {

        super(props)

        this.state = {
            value: 0
        }
    }

    start = () => this.setState((state) => ({ value: Number(state.value) + 1 }))
    completed = () => this.setState((state) => ({ value: Number(state.value) - 1 }))

    render() {

        const loadingBarStyle: React.CSSProperties = {
            width: this.state.value <= 0 ? 0 : (100 / Number(this.state.value)) + 'vw',
        }

        return (
            <div className="loading-bar" style={loadingBarStyle}></div>
        )
    }
}