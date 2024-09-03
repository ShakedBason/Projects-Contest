import React from 'react';
import { useNavigate } from 'react-router-dom';
import {observer} from "mobx-react-lite"
import AdminButtons from './AdminButtons'; // Import AdminButtons component
const AdminHome = observer(() => {
    const navigate = useNavigate();

    const handleButtonClick = (route) => {
        navigate(route);
    };
    return (
        <div>
            <h2>Admin Dashboard</h2>
            <AdminButtons /> {/* Add AdminButtons component */}
        </div>
    );
});

export  {AdminHome};