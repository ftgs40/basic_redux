import React, { Component } from 'react'
import Header from '../components/layouts/header'
import { connect } from 'react-redux'

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
            <div>Home</div>
            {this.props.age}
            <div>
                <button onClick={this.props.upAge}>
                    UP
                </button>
                <button onClick={this.props.downAge}>
                    DOWN
                </button>
            </div>
      </div>
    )
  }
}
const mapStatToProps = (state) => {
    return {
        age: state.countAge
    }
}

const mapDisPatchToProps = (dispatch) => {
    return {
        downAge: () => {
            dispatch({type: 'DOWN'})
        },
        upAge: () => {
            dispatch({type: 'UP'})
        }
    }
}

export default connect(mapStatToProps, mapDisPatchToProps)(Home)