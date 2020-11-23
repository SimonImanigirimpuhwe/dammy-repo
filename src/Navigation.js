import React from 'react';
import { useHistory} from 'react-router-dom';
import { Business, Dashboard, Mail, Inbox} from '@material-ui/icons';

export default function Navigations (){
    const history = useHistory();
   return  [
    {
        name: 'Email',
        icon: <Inbox />,
        onclick: () => history.push('/email')
    },
    {
        name: 'Sent',
        icon: <Mail />,
        onclick: () => history.push('/sent')
    },
    {
        name: 'Business',
        icon: <Business />,
        onclick: () => history.push('/business')
    },
    {
        name: 'Dashboard',
        icon: <Dashboard />,
        onclick: () => history.push('/dashboard')
    }
]
}