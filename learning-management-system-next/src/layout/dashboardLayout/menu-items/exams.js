// assets
import { ChromeOutlined, QuestionOutlined } from '@ant-design/icons';

// icons
const icons = {
    ChromeOutlined,
    QuestionOutlined
};

// ==============================|| MENU ITEMS - SAMPLE PAGE & DOCUMENTATION ||============================== //

const exams = {
    id: 'course',
    title: 'Courses',
    type: 'item',
    children: [
        {
            id: 'course-catagories',
            title: 'Catagories',
            type: 'item',
            url: '/course-catagories',
            icon: icons.ChromeOutlined
        },
        {
            id: 'course-list',
            title: 'Course List',
            type: 'item',
            url: '/courses',
            icon: icons.QuestionOutlined
        }
    ]
};

export default exams;
