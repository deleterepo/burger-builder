import * as React from 'react';
import Auxiliary from '../../hoc/Auxiliary';

interface IProps {
    children: any,
}

const layout = (props: IProps) => (
    <Auxiliary>
        <div>Toolbar, Sidedrawer, Backdrop</div>
        <main>
            {props.children}
        </main>
    </Auxiliary>
);

export default layout;