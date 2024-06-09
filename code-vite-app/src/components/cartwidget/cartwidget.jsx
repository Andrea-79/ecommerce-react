import {ShoppingCartOutlined} from '@ant-design/icons';
import {Badge} from 'antd';

const CartWidget = () => {
    return(
        <Badge count={3}>
            <ShoppingCartOutlined />
        </Badge>
    )
}

export default CartWidget