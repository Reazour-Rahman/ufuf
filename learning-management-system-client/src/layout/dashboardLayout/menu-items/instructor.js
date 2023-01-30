// assets
import { ChromeOutlined, QuestionOutlined } from '@ant-design/icons';

// icons
const icons = {
    ChromeOutlined,
    QuestionOutlined
};

// ==============================|| MENU ITEMS - SAMPLE PAGE & DOCUMENTATION ||============================== //

const instructor = {
    id: 'instructor',
    title: 'Instructor',
    type: 'item',
    children: [
        {
            id: 'instructor-overview',
            title: 'Instructor Overview',
            type: 'item',
            url: '/instructor-overview',
            icon: icons.ChromeOutlined
        },
        {
            id: 'instructor-details',
            title: 'Instructor Details',
            type: 'item',
            url: '/instructor-details',
            icon: icons.ChromeOutlined
        },
        {
            id: 'instructor-list',
            title: 'Instructor List',
            type: 'item',
            url: '/instructor-list',
            icon: icons.QuestionOutlined
        },
        {
            id: 'instructor-payment',
            title: 'Instructor Payment',
            type: 'item',
            url: '/instructor-payment',
            icon: icons.QuestionOutlined
        },
    ]
};

export default instructor;
