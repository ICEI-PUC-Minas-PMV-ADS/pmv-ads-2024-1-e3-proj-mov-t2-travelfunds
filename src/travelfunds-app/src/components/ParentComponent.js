import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import { getAuth } from 'firebase/auth';
import DashboardGasto from './DashboardGasto';

const ParentComponent = () => {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const fetchUserId = async () => {
      const auth = getAuth();
      const user = auth.currentUser;

      if (user) {
        setUserId(user.uid);
      } else {
        console.error('No user is signed in');
      }
    };

    fetchUserId();
  }, []);

  if (!userId) {
    return <Text>Loading...</Text>;
  }

  return <DashboardGasto userId={userId} />;
};

export default ParentComponent;
