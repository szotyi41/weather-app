import React from 'react'

export default class Loadingbar extends React.Component {

    render() {

        const loadingBarStyle: React.CSSProperties = {
            position: 'absolute',
            backgroundColor: 'rgba(0,212,255,1)',
            left: 0,
            top: 0,
            width: '100vw',
            height: '4px',
            transition: 'all 0.3s'
        }

        return (
            <div className="loading-bar" style={loadingBarStyle}></div>
        )
    }
}