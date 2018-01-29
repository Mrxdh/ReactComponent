import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router'
import * as util from 'utils/util'

class RecordScrollTop extends Component {

    componentDidMount () {
        const { boxKey } = this.props
        const scrollTop = util.getSessionStorage(boxKey)
        this.refs[boxKey].scrollTop = scrollTop
        util.removeSessionStorage('scroll')
    }

    componentWillUnmount () {
        const { boxKey } = this.props
        util.setSessionStorage(boxKey, this.refs[boxKey].scrollTop)
    }

    render() {
        const { className, style, boxKey } = this.props
        return (
            <div className={ className } ref={ boxKey } style={ { ...style, overflowY: 'scroll' } } >
                { this.props.children }
            </div>
        )
    }
}

export default RecordScrollTop