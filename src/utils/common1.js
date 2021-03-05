import React from 'react'


const keepAlive = (Comp) => {

    let cache = {}

    return class Alive extends React.Component {

        componentDidMount() {
            console.log(this.comp);
            const state = this.comp.state;
            this.comp.setState({ ...state, ...cache });
          }
      
          componentWillUnmount() {
            const state = this.comp.state;
            cache = { ...state };
          }

        render () {
            return (
                <Comp ref={comp => this.comp = comp} />
            )
        }

    }
}


export default keepAlive

