import { Typography } from '@mui/material';
import React from 'react';
import { MdMessage } from 'react-icons/md';

const ActiveHandle = ({status, id}) => {
    return (
        <div>
           {status === id ? (
              <div
                style={{
                  display: "flex",
                }}
              >
                <MdMessage
                  style={{
                    fontSize: "30px",
                    cursor: "pointer",
                  }}
                />
                <MdMessage
                  style={{
                    fontSize: "30px",
                    cursor: "pointer",
                  }}
                />
              </div>
            ) : (
              <Typography variant="soft" sx={{fontFamily: `'Poppins', sans-serif`,}}>Active</Typography>
            )} 
        </div>
    );
};

export default ActiveHandle;