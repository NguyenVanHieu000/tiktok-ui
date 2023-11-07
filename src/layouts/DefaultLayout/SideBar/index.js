import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass, faHome, faSignIn, faUserGroup, faVideo } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './SideBar.module.scss';

import Button from '~/components/Button';
const cx = classNames.bind(styles);

export default function SideBar() {
    return (
        <aside className={cx('wrapper')}>
            <h2>SideBar</h2>
        </aside>
    );
}
