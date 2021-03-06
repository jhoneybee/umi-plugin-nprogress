import Link from 'umi/link';
import { connect } from 'dva';
import styles from './index.css';
import { PureComponent } from 'react';

class Index extends PureComponent {
  constructor(props) {
    props.dispatch({
      type: 'global/waitForMe',
      timeout: 300,
    });
    super(props);
  }

  onClick = () => {
    this.props.dispatch({
      type: 'global/waitForMe',
      timeout: 400,
    });
  }

  render() {
    return (
      <div className={styles.normal}>
        <div className={styles.welcome} />
        <ul className={styles.list}>
          <li><button onClick={this.onClick}>Click to dispatch a effect in dva</button></li>
          <li><Link to='/another'>Go to another page</Link></li>
        </ul>
      </div>
    );
  }
}

export default connect(() => ({}))(Index)
