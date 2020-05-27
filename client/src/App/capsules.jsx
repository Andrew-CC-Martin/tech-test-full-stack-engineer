import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

const host = 'http://localhost:4000'

const onClickCapsules = (e, onUpdateCapsules) => {
    e.preventDefault()
    axios.get(`${host}/capsules`)
        .then(({ data: { result } }) => {
            onUpdateCapsules(JSON.parse(result))
        })
}

const Capsules = ({ onUpdateCapsules }) => (
    <div className="outer-border">
        <button onClick={e => onClickCapsules(e, onUpdateCapsules)}>
            Capsules
        </button>
    </div>
)

const mapDispatchToProps = dispatch => {
    return {
        onUpdateCapsules: capsules => {
            dispatch({ type: 'UPDATE_CAPSULES', capsules })
        }
    }
}

export default connect(null, mapDispatchToProps)(Capsules)